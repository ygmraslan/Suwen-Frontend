export type BreadcrumbPaths =
    | "/"
    | "/corporate"
    | "/corporate/about"
    | "/corporate/terms"
    | "/corporate/privacy"
    | "/corporate/qualitypolicy"
    | "/help"
    | "/help/faq"
    | "/help/returns-exchanges"
    | "/help/cargo-tracking"
    | "/help/contact"
    | "/products"
    | "/products/sutyen"
    | "/products/destekli-sutyen"
    | "/products/desteksiz-sutyen"
    | "/products/ic-giyim"
    | "/products/atlet"
    | "/products/kulot";

export const breadcrumbNameMap: Record<string, string> = {
    "/": "Anasayfa",
    "/corporate": "Kurumsal",
    "/corporate/about": "Hakkımızda",
    "/corporate/terms": "Kullanım Koşulları",
    "/corporate/privacy": "Gizlilik Politikası",
    "/corporate/qualitypolicy": "Kalite Politikası",
    "/help": "Yardım",
    "/help/faq": "Sıkça Sorulan Sorular",
    "/help/returns-exchanges": "İade, Değişim ve İptal İşlemleri",
    "/help/cargo-tracking": "Teslimat ve Kargo",
    "/help/contact": "Bize Ulaşın",
    "/products": "Ürünler",
    "/products/sutyen": "Sütyen",
    "/products/destekli-sutyen": "Destekli Sütyen",
    "/products/desteksiz-sutyen": "Desteksiz Sütyen",
    "/products/ic-giyim": "İç Giyim",
    "/products/atlet": "Atlet",
    "/products/kulot": "Külot",
}; 