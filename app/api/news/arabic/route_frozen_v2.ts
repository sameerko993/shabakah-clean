// app/api/news/arabic/route.ts
import { NextResponse } from "next/server";
import Parser from "rss-parser";

export const revalidate = 0;

export async function GET() {
  const parser = new Parser({ customFields: { item: ["description"] } });

  // ✅ Use allorigins proxy to bypass CORS
  const feeds = [
    {
      name: "العربية رياضة",
      url: "https://api.allorigins.win/raw?url=https://www.alarabiya.net/.mrss/ar/sport.xml",
    },
    {
      name: "فيفا بالعربية (English feed)",
      url: "https://api.allorigins.win/raw?url=https://www.fifa.com/rss-feeds/news",
    },
  ];

  try {
    const articles: any[] = [];

    for (const feed of feeds) {
      try {
        const response = await fetch(feed.url, {
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const xml = await response.text();
        const parsed = await parser.parseString(xml);

        parsed.items.slice(0, 4).forEach((item: any) => {
          articles.push({
            title: item.title || "بدون عنوان",
            link: item.link,
            description: item.contentSnippet || "لا يوجد وصف",
            source: feed.name,
          });
        });
      } catch (feedErr: any) {
        console.warn(`⚠️ تخطي ${feed.name}:`, feedErr.message);
      }
    }

    // 🧩 Fallback Arabic articles if both feeds fail
    if (articles.length === 0) {
      articles.push(
        {
          title: "⚽ الهلال يواصل انتصاراته في الدوري السعودي",
          link: "#",
          description: "حقق نادي الهلال فوزاً جديداً ليحافظ على صدارته لدوري روشن.",
          source: "شبكة شباكـة",
        },
        {
          title: "🌍 المنتخبات تستعد لتصفيات كأس العالم 2026",
          link: "#",
          description: "تواصل المنتخبات العربية استعداداتها لتصفيات المونديال القادم.",
          source: "شبكة شباكـة",
        }
      );
    }

    return NextResponse.json(articles);
  } catch (err: any) {
    console.error("❌ خطأ في جلب الأخبار:", err.message);
    return NextResponse.json({ error: "فشل في جلب الأخبار" }, { status: 500 });
  }
}
