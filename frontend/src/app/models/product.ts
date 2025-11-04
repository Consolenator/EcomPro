// Defines the precise structure of a Product object
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category?: string;
    inStock: boolean;
}