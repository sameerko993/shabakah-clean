// app/api/news/english/route.ts
import { NextResponse } from "next/server";
import Parser from "rss-parser";

// RSS Parser setup
const parser = new Parser();

// Reliable sources
const feeds = [
  { name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml?edition=uk" },
  { name: "FIFA News", url: "https://www.fifa.com/rss-feeds/news" },
  { name: "ESPN", url: "https://www.espn.com/espn/rss/news" },
];

export async function GET() {
  try {
    const allArticles: any[] = [];

    // Fetch and parse each RSS feed
    for (const feed of feeds) {
      const rss = await parser.parseURL(feed.url);
      const top = rss.items.slice(0, 3).map((item) => ({
        title: item.title || "Untitled",
        link: item.link,
        description: item.contentSnippet || "No description available",
        source: feed.name,
      }));
      allArticles.push(...top);
    }

    // Return combined news articles
    return NextResponse.json(allArticles);
  } catch (error) {
    console.error("❌ Error fetching English news:", error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
