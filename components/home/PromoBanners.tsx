import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PromoBanners() {
  return (
    <section
      className="container grid-auto grid-2"
      style={{ marginTop: 24 }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          minHeight: 230,
          backgroundImage:
            "linear-gradient(90deg, rgba(20,15,12,0.85), rgba(20,15,12,0.35)), url('/images/promo-auction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 32px",
          textAlign: "right"
        }}
      >
        <h3 style={{ color: "var(--surface)", fontSize: 24, marginBottom: 8 }}>المزادات الإلكترونية</h3>
        <p style={{ color: "#ddd", fontSize: 14, marginBottom: 18 }}>شارك الآن واقتنِ القطع النادرة</p>
        <Link href="/auction" className="btn btn-primary" style={{ width: "fit-content" }}>
          اكتشف المزادات
          <ArrowLeft size={16} />
        </Link>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          minHeight: 230,
          backgroundImage:
            "linear-gradient(90deg, rgba(20,15,12,0.85), rgba(20,15,12,0.35)), url('/images/promo-shopper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 32px",
          textAlign: "right"
        }}
      >
        <h3 style={{ color: "var(--surface)", fontSize: 24, marginBottom: 8 }}>الباحث الشخصي</h3>
        <p style={{ color: "#ddd", fontSize: 14, marginBottom: 18 }}>نبحث لك عن القطعة التي تريدها</p>
        <Link href="/personal-shopper" className="btn btn-dark" style={{ width: "fit-content" }}>
          اطلب الآن
          <ArrowLeft size={16} />
        </Link>
      </div>
    </section>
  );
}
