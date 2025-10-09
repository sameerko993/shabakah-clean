export default function FooterArabic() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-8">
      <p>© 2025 شبكة. جميع الحقوق محفوظة.</p>
      <div className="mt-2 flex justify-center space-x-6 rtl:space-x-reverse">
        <a href="/privacy" className="hover:text-yellow-400">
          سياسة الخصوصية
        </a>
        <a href="/disclaimer" className="hover:text-yellow-400">
          إخلاء المسؤولية
        </a>
        <a href="/contact" className="hover:text-yellow-400">
          تواصل معنا
        </a>
      </div>
    </footer>
  );
}
