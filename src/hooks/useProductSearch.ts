import { useState, useEffect } from "react";
import type { Product } from "../types/Products";
import { ProductService } from "../services/productService";

export const useProductSearch = (query: string) => {
    const [results, setResults] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        const fetchAndFilter = async () => {
            setLoading(true);
            try {
                const allProducts = await ProductService.getAll();
                if (!query) {
                    if (!isCancelled) setResults([]);
                    return;
                }
                const filtered = allProducts.filter((p) =>
                    p.name.toLowerCase().includes(query.toLowerCase())
                );

                if (!isCancelled) setResults(filtered);
            } catch (err) {
                console.error("Ürün arama hatası:", err);
                if (!isCancelled) setResults([]);
            } finally {
                if (!isCancelled) setLoading(false);
            }
        };
        const timeoutId = setTimeout(fetchAndFilter, 200);

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
        };
    }, [query]);

    return { results, loading };
};
