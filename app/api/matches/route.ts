import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/fixtures?date=2025-10-07",
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY || "",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API fetch failed:", err);
    return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 });
  }
}
