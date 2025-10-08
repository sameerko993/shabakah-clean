export default function FooterAr() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        direction: "rtl",
      }}
    >
      <p style={{ margin: "5px 0" }}>
        © {new Date().getFullYear()} شبكة ⚽ | جميع الحقوق محفوظة
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px" }}>
        تواصل معنا:{" "}
        <a href="mailto:sameerko886@gmail.com" style={{ color: "#4ade80" }}>
          support@shabakahsport.com
        </a>
      </p>
      <p style={{ margin: "5px 0", fontSize: "12px", opacity: 0.7 }}>
        تنويه: موقع شبكة يوفر نتائج مباشرة، ترتيب المنتخبات، والأخبار من مصادر خارجية.
        لا نضمن دقة 100٪ في جميع الأوقات.
      </p>
    </footer>
  );
}
