export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: "5px 0" }}>
        © {new Date().getFullYear()} Shabakah ⚽ | All Rights Reserved
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px" }}>
        Contact: <a href="mailto:sameerko886@gmail.com" style={{ color: "#4ade80" }}>
          support@shabakahsport.com
        </a>
      </p>
      <p style={{ margin: "5px 0", fontSize: "12px", opacity: 0.7 }}>
        Disclaimer: Shabakah provides live scores, standings, and news from external sources.
        We do not guarantee 100% accuracy at all times.
      </p>
    </footer>
  );
}
