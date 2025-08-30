export interface IstandardFilterColors {
    nameFa: string;
    nameEn: string;
    slug: string;
    hex: string
}
export const standardFilterColors: IstandardFilterColors[] = [
    { nameFa: "مشکی", nameEn: "Black", slug: "black", hex: "#000000" },
    { nameFa: "سفید", nameEn: "White", slug: "white", hex: "#FFFFFF" },
    { nameFa: "خاکستری", nameEn: "Gray", slug: "gray", hex: "#808080" },
    { nameFa: "قرمز", nameEn: "Red", slug: "red", hex: "#FF0000" },
    { nameFa: "آبی", nameEn: "Blue", slug: "blue", hex: "#0000FF" },
    { nameFa: "سبز", nameEn: "Green", slug: "green", hex: "#008000" },
    { nameFa: "صورتی", nameEn: "Pink", slug: "pink", hex: "#FFC0CB" },
    { nameFa: "بنفش", nameEn: "Purple", slug: "purple", hex: "#800080" },
    { nameFa: "قهوه‌ای", nameEn: "Brown", slug: "brown", hex: "#8B4513" },
    { nameFa: "زرد", nameEn: "Yellow", slug: "yellow", hex: "#FFFF00" },
];

export const colorMapping: Record<string, string> = {
    "طوسی": "gray",
    "خاکستری": "gray",
    "زغالی": "black",
    "گرافیتی": "black",
    "مشکی": "black",
    "سیاه": "black",
    "زرد": "yellow",
    "طلایی": "yellow",
    "نقره ای": "gray",
    "نقره‌ای": "black",
    "نعنایی": "green",
    "صورتی": "pink",
    "سبز": "green",
    "آبی": "blue",
    "سفید": "white",
    "بنفش": "purple",
    "قهوه ای": "brown",
    "قهوه‌ای": "brown"
};

export function colorsNormalizer(productColors: { title: string; hex: string }[]) {
    return productColors.map(c => {
        const slug = colorMapping[c.title] || "other"; // اگه پیدا نشد بذار تو دسته "سایر"
        return { ...c, slug };
    });
}