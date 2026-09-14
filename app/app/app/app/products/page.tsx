import Link from "next/link";

const products = [
  {
    name: "ዘመናዊ ሸሚዝ",
    category: "ሸሚዝ",
    price: "1,200 ብር",
  },
  {
    name: "የወንዶች ሱሪ",
    category: "ሱሪ",
    price: "1,500 ብር",
  },
  {
    name: "ስፖርት ቱታ",
    category: "ቱታ",
    price: "1,800 ብር",
  },
  {
    name: "ዘመናዊ ቲሸርት",
    category: "ቲሸርት",
    price: "900 ብር",
  },
  {
    name: "ጃኬት",
    category: "ጃኬት",
    price: "2,500 ብር",
  },
  {
    name: "ሁዲ",
    category: "ሁዲ",
    price: "1,700 ብር",
  },
];

export default function ProductsPage() {
  return (
    <>
      <header className="head">
        <div className="wrap row">
          <Link href="/" className="logo">
            ይሁኔ <span className="gold">ቦንዳ</span>
          </Link>

          <nav>
            <Link href="/">መነሻ</Link>
            {" | "}
            <Link href="/products">ምርቶች</Link>
            {" | "}
            <Link href="/order">ይዘዙ</Link>
          </nav>
        </div>
      </header>

      <main className="wrap section">
        <h1>🛍️ ምርቶች</h1>

        <p>
          የሚፈልጉትን ልብስ ይምረጡ።
          ፎቶዎች በኋላ ይጨመራሉ።
        </p>

        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product.name}>
              
              <div
                style={{
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "70px",
                  background: "#eee7dc",
                  borderRadius: "10px",
                }}
              >
                👕
              </div>

              <h2>{product.name}</h2>

              <p>📂 {product.category}</p>

              <h3 className="gold">
                {product.price}
              </h3>

              <p>
                📏 S | M | L | XL
              </p>

              <Link
                href="/order"
                className="btn"
              >
                ይዘዙ
              </Link>

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
        <p>📞 094557 12 00</p>
      </footer>
    </>
  );
}
