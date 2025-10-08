"use client";

import { useEffect, useState } from "react";

type Match = {
  fixture: {
    date: string;
    status: { short: string };
  };
  teams: {
    home: { name: string };
    away: { name: string };
  };
};

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [day, setDay] = useState<"yesterday" | "today" | "tomorrow">("today");

  useEffect(() => {
    async function fetchMatches() {
      let date = new Date();

      if (day === "yesterday") {
        date.setDate(date.getDate() - 1);
      } else if (day === "tomorrow") {
        date.setDate(date.getDate() + 1);
      }

      const formatted = date.toISOString().split("T")[0];

      const res = await fetch(
        `https://v3.football.api-sports.io/fixtures?date=${formatted}`,
        {
          headers: {
            "x-apisports-key": process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );

      const data = await res.json();
      setMatches(data.response || []);
    }

    fetchMatches();
  }, [day]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Matches</h1>

      {/* Tabs for Yesterday / Today / Tomorrow */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setDay("yesterday")}>Yesterday</button>
        <button onClick={() => setDay("today")}>Today</button>
        <button onClick={() => setDay("tomorrow")}>Tomorrow</button>
      </div>

      {matches.length > 0 ? (
        <ul className="space-y-2">
          {matches.map((m, i) => (
            <li key={i} className="bg-white p-3 rounded shadow">
              <div>
                {m.teams.home.name} vs {m.teams.away.name}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(m.fixture.date).toLocaleString()} – {m.fixture.status.short}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches found for {day}.</p>
      )}
    </div>
  );
}
