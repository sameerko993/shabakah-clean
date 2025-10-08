"use client";
import { useEffect, useState } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch("/api/matches");
        const data = await res.json();
        const fixtures = Array.isArray(data?.response) ? data.response : [];
        setMatches(fixtures);
      } catch (err) {
        console.error("Error fetching matches:", err);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, []);

  if (loading) return <p>Loading matches...</p>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Today’s Matches</h1>

      {matches.length > 0 ? (
        <ul className="space-y-4">
          {matches.map((match: any, index: number) => {
            const league = match.league?.name;
            const country = match.league?.country;
            const homeTeam = match.teams?.home?.name;
            const awayTeam = match.teams?.away?.name;
            const homeLogo = match.teams?.home?.logo;
            const awayLogo = match.teams?.away?.logo;
            const goalsHome = match.goals?.home ?? "-";
            const goalsAway = match.goals?.away ?? "-";

            const status = match.fixture?.status?.short; // FT, NS, LIVE
            const startTime = match.fixture?.date
              ? new Date(match.fixture.date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "TBD";

            return (
              <li
                key={index}
                className="bg-white p-4 rounded shadow flex flex-col gap-3"
              >
                {/* League */}
                <div className="text-xs text-gray-500">
                  {league} ({country})
                </div>

                {/* Teams & score */}
                <div className="flex items-center justify-between">
                  {/* Home */}
                  <div className="flex items-center gap-2">
                    <img src={homeLogo} alt={homeTeam} className="w-6 h-6" />
                    <span>{homeTeam}</span>
                  </div>

                  {/* Score */}
                  <span className="text-lg font-bold">
                    {goalsHome} - {goalsAway}
                  </span>

                  {/* Away */}
                  <div className="flex items-center gap-2">
                    <span>{awayTeam}</span>
                    <img src={awayLogo} alt={awayTeam} className="w-6 h-6" />
                  </div>
                </div>

                {/* Time / Status */}
                <div className="text-gray-600 text-sm">
                  {status === "FT" ? "Full Time" : startTime}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No matches available.</p>
      )}
    </main>
  );
}
