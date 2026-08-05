import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // مستخدم Super Admin
  const passwordHash = await bcrypt.hash("Admin@12345", 10);
  await prisma.user.upsert({
    where: { email: "admin@qet3a-w-qesa.sa" },
    update: {},
    create: {
      name: "مدير النظام",
      email: "admin@qet3a-w-qesa.sa",
      passwordHash,
      role: "SUPER_ADMIN"
    }
  });

  // التصنيفات
  const categories = [
    { name: "تحف وانتيك", slug: "antiques" },
    { name: "أواني منزلية", slug: "household" },
    { name: "قطع أثرية", slug: "rare-pieces" },
    { name: "لوحات فنية", slug: "paintings" },
    { name: "أثاث كلاسيك", slug: "classic-furniture" },
    { name: "نجف وإضاءة", slug: "chandeliers" }
  ];

  for (const c of categories) {
    await prisma.category.upsert({ where: { slug: c.slug }, update: {}, create: c });
  }

  console.log("تم زرع البيانات الأساسية بنجاح ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
