export interface Color {
    title: string;
    hex: string;
}

/**
 *  نوع داده برای اطلاعات موجودی انبار
 */
export interface Inventory {
    inStock: number;
    reserved: number;
    available: number;
}

/**
 *  نوع داده برای تفکیک امتیازات داده شده
 */
export interface RatingBreakdown {
    '5': number;
    '4': number;
    '3': number;
    '2': number;
    '1': number;
}

/**
 *  نوع داده برای اطلاعات کلی امتیاز محصول
 */
export interface Rating {
    average: number;
    totalReviews: number;
    breakdown: RatingBreakdown;
}

/**
 *  نوع داده برای اطلاعات قیمت‌گذاری
 */
export interface Pricing {
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    currency: string;
}

/**
 *  نوع داده برای جزئیات یک مشخصه فنی خاص
 */
export interface SpecificationDetail {
    labelFa: string;
    labelEn: string;
    value: string | number | string[] | boolean;
    valueEn: string | number | string[] | boolean;
    slug: string;
    code: string | number | boolean;
    type: 'text' | 'number' | 'array' | 'boolean';
}

/**
 *  نوع داده برای یک بخش از مشخصات فنی (مانند مشخصات کلی یا صفحه‌نمایش)
 */
export interface SpecificationSection {
    label: string;
    specs: {
        [key: string]: SpecificationDetail; // کلیدها می‌توانند داینامیک باشند (e.g., 'region', 'os', 'chipset')
    };
}

export type ProductProperties = {
    [categoryKey: string]: SpecificationSection;  // dynamic for all kind of products
};

/**
 *  نوع داده برای کل آبجکت مشخصات فنی
 */
export interface Specifications {  // only for phones
    general: SpecificationSection;
    display: SpecificationSection;
    processor: SpecificationSection;
    memory: SpecificationSection;
    connectivity: SpecificationSection;
    camera: SpecificationSection;
    sound: SpecificationSection;
    software: SpecificationSection;
    sensors: SpecificationSection;
    battery: SpecificationSection;
    inBox: SpecificationSection;
}

/**
 *  نوع داده برای اطلاعات سئو
 */
export interface Seo {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
}

/**
 *  نوع داده برای وضعیت دسترسی و ارسال محصول
 */
export interface Availability {
    status: 'available' | 'unavailable' | 'preorder';
    estimatedDelivery: string;
    regions: string[];
}

// --- نوع اصلی و کامل محصول ---

/**
 *  ساختار کامل و نهایی برای یک محصول
 */
export interface IProduct {
    id: number;
    titleFa: string;
    titleEn: string;
    slug: string;
    colors: Color[];
    introduction: string;
    inventory: Inventory;
    rating: Rating;
    pricing: Pricing;
    images: string[];
    likedBy: number[];
    sharedBy: number[];
    warrantyId: number;
    clubPoints: number;
    shippingMethods: number[];
    comments: number[]; // آرایه‌ای از ID کامنت‌ها
    categoryId: number;
    brandId: number;
    specifications: ProductProperties;
    tags: string[];
    seo: Seo;
    availability: Availability;
    createdAt: string; // یا می‌توانید از نوع Date استفاده کنید
    updatedAt: string; // یا می‌توانید از نوع Date استفاده کنید
}

interface ContactInfo {
    phone: string;
    website: string;
}

export interface Warranty {
    id: number;
    title: string;
    duration: number;
    provider: string;
    coverage: string[];
    excludes: string[];
    contactInfo: ContactInfo;
}

export interface ShippingMethod {
    id: number;
    name: string;
    type: string;
    duration: string;
    cost: number;
    description: string;
    coverage: string[];
}

