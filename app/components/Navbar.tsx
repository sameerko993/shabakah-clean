<nav
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
  }}
>
  {/* Left side: Logo */}
  <div style={{ display: "flex", alignItems: "center" }}>
    <img src="/logo.png" alt="Shabakah Logo" style={{ height: "40px", marginRight: "10px" }} />
    <span style={{ fontWeight: "bold", fontSize: "20px" }}>Shabakah</span>
  </div>

  {/* Middle: Navigation links with forced spacing */}
  <div style={{ display: "flex", gap: "20px" }}>
    <a href="/" style={{ textDecoration: "none" }}>Home</a>
    <a href="/standings" style={{ textDecoration: "none" }}>Standings</a>
    <a href="/scores" style={{ textDecoration: "none" }}>Scores</a>
    <a href="/ranking" style={{ textDecoration: "none" }}>Ranking</a>
    <a href="/news" style={{ textDecoration: "none" }}>News</a>
    <a href="/tickets" style={{ textDecoration: "none" }}>Tickets</a>
    <a href="/store" style={{ textDecoration: "none" }}>Store</a>
  </div>

  {/* Right side: Language switcher */}
  <div style={{ display: "flex", gap: "10px" }}>
    <a href="/" style={{ textDecoration: "none" }}>English</a>
    <a href="/ar" style={{ textDecoration: "none" }}>العربية</a>
  </div>
</nav>
