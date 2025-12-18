export const siteConfig = {
    name: "AE MUSIC |Production, Studio & Artist Agency",
    url: "https://aemusic.io", // استبدله برابط موقعك الفعلي لاحقاً
    ogImage: "https://aemusic.io/og-image.jpg", // الصورة التي تظهر عند مشاركة الرابط
    description:
        "AE MUSIC - Leading Music Production Studio & Artist Agency. From recording to global distribution, we scale your sound to the world.",
    links: {
        instagram: "https://instagram.com/ae_music_pro", // غير الروابط لحساباتك الفعلية
        facebook: "https://facebook.com/aemusicpro",
        youtube: "https://youtube.com/@AEMusicPro",
    },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
    light: "#000000", // جعلنا اللون الافتراضي أسود حتى في المود الفاتح ليناسب الهوية
    dark: "#000000",  // الأسود الصريح ليتناسب مع الـ Neon Green
};