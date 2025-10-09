// ✅ English News Page
console.log("📰 ENGLISH NEWS PAGE LOADED");

export const metadata = {
  title: "Shabakah News",
  description: "Latest football news from leagues and tournaments around the world.",
};

export default function NewsPage() {
  const englishNews = [
    {
      id: 1,
      title: "🏆 Real Madrid wins El Clásico",
      desc: "Real Madrid defeats Barcelona 3–2 in a dramatic La Liga clash at the Bernabéu.",
    },
    {
      id: 2,
      title: "🔥 Premier League title race tightens",
      desc: "Arsenal and Liverpool share the top spot after weekend wins, with Man City close behind.",
    },
    {
      id: 3,
      title: "🌍 World Cup 2026 qualifiers heat up",
      desc: "National teams battle for early qualification spots across continents.",
    },
    {
      id: 4,
      title: "🇸🇦 Al Hilal dominates AFC Champions League",
      desc: "Saudi powerhouse Al Hilal continues perfect form in Asia’s biggest tournament.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Latest Football News
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {englishNews.map((news) => (
          <div
            key={news.id}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-5 hover:shadow-yellow-400/30 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-yellow-400 mb-2 text-center">
              {news.title}
            </h2>
            <p className="text-gray-300 text-sm text-center">{news.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
