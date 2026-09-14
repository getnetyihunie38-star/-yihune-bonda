"use client";

import Link from "next/link";
import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("M");

  function sendOrder() {
    if (!name || !phone || !product) {
      alert("እባክዎ ሁሉንም መረጃ ያስገቡ።");
      return;
    }

    const message = `
🛍️ አዲስ ትዕዛዝ - ይሁኔ ቦንዳ

👤 ስም: ${name}
📞 ስልክ: ${phone}
👕 ምርት: ${product}
📏 መጠን: ${size}
`;

    const whatsappNumber = "251945571200";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

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
          </nav>
        </div>
      </header>

      <main className="wrap section">
        <h1>📦 ትዕዛዝ ይላኩ</h1>

        <p>
          የሚፈልጉትን ምርት መረጃ ያስገቡ።
        </p>

        <div
          className="card"
          style={{ maxWidth: "600px", margin: "30px auto" }}
        >
          <label>👤 ሙሉ ስም</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ስምዎን ያስገቡ"
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 20px",
            }}
          />

          <label>📞 ስልክ ቁጥር</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09XXXXXXXX"
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 20px",
            }}
          />

          <label>👕 የምርቱ ስም</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="ለምሳሌ፦ ዘመናዊ ሸሚዝ"
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 20px",
            }}
          />

          <label>📏 መጠን</label>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "8px 0 20px",
            }}
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>

          <button
            onClick={sendOrder}
            className="btn"
            style={{
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            📲 ትዕዛዙን በWhatsApp ይላኩ
          </button>
        </div>
      </main>
    </>
  );
}
