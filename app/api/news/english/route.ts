// app/api/news/english/route.ts
import { NextResponse } from "next/server";
import Parser from "rss-parser";
import axios from "axios";

export const revalidate = 0;

export async function GET() {
  const parser = new Parser();
  const feeds = [
    { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml?edition=uk" },
    { name: "FIFA", url: "https://www.fifa.com/rss-feeds/news" },
    { name: "ESPN", url: "https://www.espn.com/espn/rss/news" },
  ];

  try {
    const articles: any[] = [];

    for (const feed of feeds) {
      try {
        const { data } = await axios.get(feed.url, {
          timeout: 10000,
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        });

        const rss = await parser.parseString(data);
        const items = rss.items.slice(0, 3).map((i) => ({
          title: i.title || "Untitled",
          link: i.link,
          description: i.contentSnippet || i.summary || "No description available",
          source: feed.name,
        }));

        articles.push(...items);
      } catch (feedErr: any) {
        console.warn(`⚠️ Skipped ${feed.name}:`, feedErr.message);
      }
    }

    if (articles.length === 0) {
      throw new Error("No articles fetched");
    }

    return NextResponse.json(articles);
  } catch (err: any) {
    console.error("❌ Error fetching English news:", err.message);
    return NextResponse.json({ error: "Failed to fetch English news" }, { status: 500 });
  }
}
