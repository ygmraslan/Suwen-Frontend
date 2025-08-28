import type { Product, ProductDetailType, ProductAttributeValue } from "../types/Products";

const API_URL = "http://localhost:5079/api/Product";

export const ProductService = {
    getAll: async (): Promise<Product[]> => {
        const response = await fetch(`${API_URL}/getall`);
        if (!response.ok) throw new Error("Ürünler alınamadı");
        const json = await response.json();
        return Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [];
    },

    getById: async (id: string | number): Promise<ProductDetailType> => {
        const response = await fetch(`${API_URL}/getbyid/${id}`);
        if (!response.ok) throw new Error("Ürün alınamadı");
        const json = await response.json();
        return json.data ? json.data : json;
    }
};