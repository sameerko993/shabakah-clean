import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const day = searchParams.get("day") || "today";

  const today = new Date();
  let targetDate = new Date(today);

  if (day === "yesterday") targetDate.setDate(today.getDate() - 1);
  if (day === "tomorrow") targetDate.setDate(today.getDate() + 1);

  const dateString = targetDate.toISOString().split("T")[0];

  try {
    const res = await fetch(`https://v3.football.api-sports.io/fixtures?date=${dateString}`, {
      headers: {
        "x-apisports-key": process.env.API_KEY as string,
      },
    });

    const data = await res.json();
    return NextResponse.json(data.response || []);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 });
  }
}
