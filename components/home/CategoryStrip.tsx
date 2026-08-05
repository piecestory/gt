import Link from "next/link";

const CATEGORIES = [
  { slug: "antiques", name: "تحف وانتيك", image: "/images/cat-antiques.jpg" },
  { slug: "household", name: "أواني منزلية", image: "/images/cat-household.jpg" },
  { slug: "rare-pieces", name: "قطع أثرية", image: "/images/cat-rare.jpg" },
  { slug: "paintings", name: "لوحات فنية", image: "/images/cat-paintings.jpg" },
  { slug: "classic-furniture", name: "أثاث كلاسيك", image: "/images/cat-furniture.jpg" },
  { slug: "chandeliers", name: "نجف وإضاءة", image: "/images/cat-chandeliers.jpg" }
];

export default function CategoryStrip() {
  return (
    <section className="container category-strip" style={{ position: "relative", zIndex: 2 }}>
      <div
        className="card grid-6"
        style={{
          display: "grid",
          gap: 16,
          padding: 24
        }}
      >
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "14px 16px"
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--section)",
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{cat.name}</div>
              <div style={{ fontSize: 12, color: "var(--accent)" }}>تسوق الآن</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
