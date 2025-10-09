"use client";

import { useEffect, useMemo, useState } from "react";

type APIMatch = {
  fixture: { date: string; status: { short: string } };
  league: { name: string; country: string };
  teams: { home: { name: string; logo?: string }; away: { name: string; logo?: string } };
  goals?: { home: number | null; away: number | null };
};

type DayKey = "yesterday" | "today" | "tomorrow";

function formatDateForAPI(day: DayKey) {
  const d = new Date();
  if (day === "yesterday") d.setDate(d.getDate() - 1);
  if (day === "tomorrow") d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function MatchesPage() {
  const [day, setDay] = useState<DayKey>("today");
  const [matches, setMatches] = useState<APIMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;
    async function run() {
      setLoading(true);
      setErr(null);
      setMatches([]);

      const date = formatDateForAPI(day);

      try {
        const res = await fetch(
          `https://v3.football.api-sports.io/fixtures?date=${date}`,
          {
            headers: {
              "x-apisports-key": process.env.NEXT_PUBLIC_API_KEY as string,
            },
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const json = await res.json();
        const list: APIMatch[] = Array.isArray(json?.response) ? json.response : [];

        if (!canceled) setMatches(list);
      } catch (e: any) {
        if (!canceled) setErr(e?.message || "Failed to load matches");
      } finally {
        if (!canceled) setLoading(false);
      }
    }
    run();
    return () => {
      canceled = true;
    };
  }, [day]);

  // Group by league for a clean, scannable layout
  const groups = useMemo(() => {
    const map = new Map<string, APIMatch[]>();
    for (const m of matches) {
      const key = `${m.league.country} — ${m.league.name}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(m);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [matches]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Matches</h1>

      {/* Tabs */}
      <div className="flex gap-2">
        {(["yesterday", "today", "tomorrow"] as DayKey[]).map((k) => (
          <button
            key={k}
            onClick={() => setDay(k)}
            className={`px-3 py-1 rounded border ${
              day === k ? "bg-gray-900 text-white" : "bg-white"
            }`}
          >
            {k[0].toUpperCase() + k.slice(1)}
          </button>
        ))}
      </div>

      {/* Body */}
      {loading ? (
        <p>Loading {day}…</p>
      ) : err ? (
        <div className="rounded border border-red-300 bg-red-50 p-3 text-red-700">
          Couldn’t load matches ({err}). If your API key is missing, set it in
          <code className="ml-1 px-1 py-0.5 rounded bg-gray-200">.env.local</code> as
          <code className="ml-1 px-1 py-0.5 rounded bg-gray-200">NEXT_PUBLIC_API_KEY=YOUR_KEY</code>.
        </div>
      ) : groups.length === 0 ? (
        <p>No matches found for {day}.</p>
      ) : (
        <div className="space-y-6">
          {groups.map(([leagueTitle, list]) => (
            <section key={leagueTitle} className="bg-white rounded shadow">
              <div className="px-4 py-3 border-b font-semibold">{leagueTitle}</div>
              <ul className="divide-y">
                {list.map((m, idx) => {
                  const dt = new Date(m.fixture.date);
                  const time = dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                  const status = m.fixture.status.short || "";
                  const score =
                    typeof m.goals?.home === "number" && typeof m.goals?.away === "number"
                      ? `${m.goals.home} - ${m.goals.away}`
                      : "—";

                  return (
                    <li key={idx} className="p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {/* Team text (we avoid remote images here to keep config zero-risk) */}
                          <div className="font-medium">{m.teams.home.name}</div>
                          <span className="text-gray-400">vs</span>
                          <div className="font-medium">{m.teams.away.name}</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="tabular-nums">{time}</span>
                          <span className="font-semibold">{score}</span>
                          <span className="uppercase">{status}</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
