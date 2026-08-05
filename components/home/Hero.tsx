import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 420,
        height: "60vh",
        maxHeight: 560,
        backgroundImage:
          "linear-gradient(90deg, rgba(43,33,27,0.6) 0%, rgba(43,33,27,0.25) 55%, rgba(43,33,27,0.1) 100%), url('/images/hero-antique.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          textAlign: "right",
          maxWidth: 560
        }}
      >
        <h1 className="hero-title" style={{ color: "var(--surface)", fontSize: 44, lineHeight: 1.3, marginBottom: 16 }}>
          حيث تلتقي الأصالة بالفخامة
        </h1>
        <p className="hero-text" style={{ color: "#EFE7DD", fontSize: 16, marginBottom: 24, lineHeight: 1.9 }}>
          اكتشف مجموعة مختارة بعناية من التحف والقطع النادرة المصممة لتروي قصة كل عصر.
        </p>
        <Link href="/shop" className="btn btn-primary">
          تصفح المتجر
          <ArrowLeft size={18} />
        </Link>
      </div>
    </section>
  );
}
