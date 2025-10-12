// app/ar/news/page.tsx
"use client";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  link: string;
  description: string;
  source: string;
}

export default function ArabicNewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news/arabic");
        if (!res.ok) throw new Error("فشل الاتصال بالخادم");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        setError("⚠️ حدث خطأ أثناء تحميل الأخبار");
      }
    }
    fetchNews();
  }, []);

  return (
    <main className="flex-1 container mx-auto px-6 py-6 text-right" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">📰 آخر أخبار كرة القدم</h1>

      {error ? (
        <p className="text-red-400">{error}</p>
      ) : articles.length === 0 ? (
        <p className="text-gray-400">جاري تحميل الأخبار...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p className="text-gray-300 mb-2">{article.description}</p>
              <p className="text-sm text-gray-500">
                📡 المصدر: <span className="text-gray-400">{article.source}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
