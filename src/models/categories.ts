export interface CategorySeo {
    metaTitle: string;
    metaDescription: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    parent: string | null;
    icon: string;
    description: string;
    seo: CategorySeo;
}
