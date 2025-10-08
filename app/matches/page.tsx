"use client";
import { useEffect, useState } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // default today (UTC)
  );

  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      try {
        const res = await fetch(`/api/matches?date=${selectedDate}`);
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
  }, [selectedDate]);

  // Utility: Yesterday / Today / Tomorrow buttons
  const formatDate = (offset: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split("T")[0];
  };

  if (loading) return <p>Loading matches...</p>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Matches</h1>

      {/* Date Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedDate(formatDate(-1))}
          className={`px-4 py-2 rounded ${
            selectedDate === formatDate(-1)
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Yesterday
        </button>
        <button
          onClick={() => setSelectedDate(formatDate(0))}
          className={`px-4 py-2 rounded ${
            selectedDate === formatDate(0)
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setSelectedDate(formatDate(1))}
          className={`px-4 py-2 rounded ${
            selectedDate === formatDate(1)
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Tomorrow
        </button>
      </div>

      {/* Matches List */}
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

            const fixtureDate = new Date(match.fixture?.date);
            const localDate = fixtureDate.toLocaleDateString([], {
              weekday: "long", // Monday, Tuesday...
              month: "short",  // Oct
              day: "numeric",  // 7
              year: "numeric", // 2025
            });
            const localTime = fixtureDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            const status = match.fixture?.status?.short;

            return (
              <li key={index} className="bg-white p-4 rounded shadow">
                {/* League */}
                <div className="text-xs text-gray-500 mb-2">
                  {league} ({country})
                </div>

                {/* Teams & Score */}
                <div className="flex items-center justify-between">
                  {/* Home */}
                  <div className="flex items-center gap-2">
                    {homeLogo && (
                      <img src={homeLogo} alt={homeTeam} className="w-6 h-6" />
                    )}
                    <span>{homeTeam}</span>
                  </div>

                  {/* Score */}
                  <span className="text-lg font-bold">
                    {goalsHome} - {goalsAway}
                  </span>

                  {/* Away */}
                  <div className="flex items-center gap-2">
                    <span>{awayTeam}</span>
                    {awayLogo && (
                      <img src={awayLogo} alt={awayTeam} className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="text-gray-600 text-sm mt-2">
                  {status === "FT" ? "Full Time" : `${localDate} • ${localTime}`}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No matches scheduled for this day.</p>
      )}
    </main>
  );
}
