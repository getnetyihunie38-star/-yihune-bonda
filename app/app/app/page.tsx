import Link from "next/link";

const categories = [
  "ሱሪ",
  "ቱታ",
  "ሸሚዝ",
  "ቲሸርት",
  "ጃኬት",
  "ሁዲ",
  "ኦ-ሹራብ",
  "ክር ሹራብ",
  "ክሬሽን ሱሪ",
];

export default function Home() {
  return (
    <>
      <header className="head">
        <div className="wrap row">
          <div className="logo">
            ይሁኔ <span className="gold">ቦንዳ</span>
          </div>

          <nav>
            <Link href="/">መነሻ</Link>
            {" | "}
            <Link href="/products">ምርቶች</Link>
            {" | "}
            <Link href="/order">ይዘዙ</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <p className="gold">ይሁኔ ቦንዳ</p>

        <h1>ዘመናዊ የወንዶች ልብስ</h1>

        <p>
          ጥራት • ምርጥ ዋጋ • ቀላል ትዕዛዝ
        </p>

        <br />

        <Link href="/products" className="btn">
          🛍️ ምርቶችን ይመልከቱ
        </Link>
      </section>

      <main className="wrap section">
        <h2>🛍️ የምርት ምድቦች</h2>

        <div className="grid">
          {categories.map((category) => (
            <div className="card" key={category}>
              <div style={{ fontSize: "45px" }}>👕</div>
              <h3>{category}</h3>
              <p>ምርቶችን ይመልከቱ</p>
            </div>
          ))}
        </div>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#191919",
          color: "white",
        }}
      >
        <h3>ይሁኔ ቦንዳ</h3>

        <p>ባህር ዳር፣ ቀበሌ 4፣ አሮጌው መንሀሪያ ጀርባ </p>

        <p>📞 094557 12 00</p>

        <p>© 2026 ይሁኔ ቦንዳ</p>
      </footer>
    </>
  );
}
