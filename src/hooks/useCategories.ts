import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";
import type { Category } from "../types/Category";

export function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                if (mounted) setCategories(data);
            } catch (error) {
                console.error("Kategori çekme hatası:", error);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchCategories();

        return () => {
            mounted = false;
        };
    }, []);

    return { categories, loading };
}
