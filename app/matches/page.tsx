"use client";

import { useEffect, useState } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([]);
  const [day, setDay] = useState<"yesterday" | "today" | "tomorrow">("today");

  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch("/api/matches");
        const data = await res.json();
        console.log("API Matches:", data); // Debug log
        setMatches(data || []);
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    }
    fetchMatches();
  }, []);

  function filterMatches() {
    const today = new Date();
    let targetDate = new Date();

    if (day === "yesterday") {
      targetDate.setDate(today.getDate() - 1);
    } else if (day === "tomorrow") {
      targetDate.setDate(today.getDate() + 1);
    }

    const yyyy = targetDate.getFullYear();
    const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
    const dd = String(targetDate.getDate()).padStart(2, "0");
    const target = `${yyyy}-${mm}-${dd}`;

    return matches.filter((m: any) =>
      m.fixture?.date?.startsWith(target)
    );
  }

  const filtered = filterMatches();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Matches</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["yesterday", "today", "tomorrow"].map((d) => (
          <button
            key={d}
            onClick={() => setDay(d as any)}
            className={`px-4 py-2 rounded ${
              day === d ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>

      {/* Matches */}
      {filtered.length > 0 ? (
        <div className="grid gap-4">
          {filtered.map((m: any, idx: number) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {m.teams?.home?.logo && (
                  <img
                    src={m.teams.home.logo}
                    alt={m.teams.home.name}
                    className="h-6 w-6"
                  />
                )}
                <span>{m.teams?.home?.name}</span>
              </div>

              <span className="font-bold">
                {m.goals?.home ?? "-"} : {m.goals?.away ?? "-"}
              </span>

              <div className="flex items-center gap-3">
                <span>{m.teams?.away?.name}</span>
                {m.teams?.away?.logo && (
                  <img
                    src={m.teams.away.logo}
                    alt={m.teams.away.name}
                    className="h-6 w-6"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No matches scheduled for this day.</p>
      )}
    </div>
  );
}
