export interface IComment {
    id: number;
    productId: number;
    userId: number;
    parentId: number | null;
    rating: number | null;
    title: string | null;
    content: string;
    pros: string[];
    cons: string[];
    images: string[];
    likes: number;
    dislikes: number;
    verified: boolean;
    helpful: number;
    createdAt: string; // ISO date string (می‌تونی به Date هم تبدیل کنی موقع استفاده)
    updatedAt: string;
}
