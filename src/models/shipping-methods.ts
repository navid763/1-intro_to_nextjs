export interface ShippingMethod {
    id: number;
    name: string;
    type: string;
    duration: string;
    cost: number;
    description: string;
    coverage: string[];
}