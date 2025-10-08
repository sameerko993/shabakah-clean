"use client";

import { useState, useEffect } from "react";

export default function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState("today"); // default tab = today

  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.sportsdata.io/v4/soccer/scores/json/GamesByDate/2025-OCT-${day}?key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await res.json();
        setMatches(data || []);
      } catch (err) {
        console.error("Error fetching matches:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, [day]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">⚽ Matches</h1>

      {/* Tabs for Yesterday / Today / Tomorrow */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setDay("yesterday")} className={`px-4 py-2 rounded ${day === "yesterday" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Yesterday</button>
        <button onClick={() => setDay("today")} className={`px-4 py-2 rounded ${day === "today" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Today</button>
        <button onClick={() => setDay("tomorrow")} className={`px-4 py-2 rounded ${day === "tomorrow" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Tomorrow</button>
      </div>

      {loading ? (
        <p>Loading matches...</p>
      ) : matches.length === 0 ? (
        <p>No matches found for {day}.</p>
      ) : (
        <ul className="space-y-4">
          {matches.map((match, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <span>{match.HomeTeamName} vs {match.AwayTeamName}</span>
                <span>{match.Status} - {match.DateTime}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
