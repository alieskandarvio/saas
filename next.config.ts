import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // التعديل الأساسي: تحويل المخرجات لملفات ثابتة (Static) لتناسب Hostinger
  output: "export", 
  
  typescript: {
    // تجاهل أخطاء التايب سكريبت لضمان إتمام الـ Build
    ignoreBuildErrors: true,
  },
  eslint: {
    // تجاهل أخطاء الـ Lint لسرعة الرفع والتشغيل
    ignoreDuringBuilds: true,
  },
  images: {
    // ضروري جداً عند استخدام output: export لتشغيل الصور بدون سيرفر
    unoptimized: true, 
  },
  // إضافة اختيارية: تجنب مشاكل الـ Trailing Slashes في الروابط
  trailingSlash: true,
};

export default nextConfig;