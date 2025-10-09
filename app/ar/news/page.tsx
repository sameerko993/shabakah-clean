// ✅ Arabic News Page
console.log("📰 ARABIC NEWS PAGE LOADED");

export const metadata = {
  title: "شبكة الأخبار",
  description: "آخر أخبار كرة القدم من البطولات والدوريات حول العالم.",
};

export default function ArabicNewsPage() {
  const arabicNews = [
    {
      id: 1,
      title: "🏆 ريال مدريد يفوز في الكلاسيكو",
      desc: "فاز ريال مدريد على برشلونة بنتيجة 3-2 في مباراة مثيرة في الدوري الإسباني على ملعب سانتياغو برنابيو.",
    },
    {
      id: 2,
      title: "🔥 اشتعال المنافسة في الدوري الإنجليزي الممتاز",
      desc: "أرسنال وليفربول يتشاركان الصدارة بعد انتصارات مهمة، ومانشستر سيتي يلاحق عن قرب.",
    },
    {
      id: 3,
      title: "🌍 تصفيات كأس العالم 2026 تزداد إثارة",
      desc: "المنتخبات الوطنية تتنافس بقوة لحجز بطاقات التأهل المبكر في القارات المختلفة.",
    },
    {
      id: 4,
      title: "🇸🇦 الهلال يواصل هيمنته في دوري أبطال آسيا",
      desc: "نادي الهلال السعودي يواصل سلسلة انتصاراته في أكبر بطولات القارة الآسيوية.",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        آخر أخبار كرة القدم
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {arabicNews.map((news) => (
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
