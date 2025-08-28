import { useState, useEffect } from "react";
import type { ProductDetailType, ProductAttributeValue } from "../types/Products";
import { ProductService } from "../services/productService";

export function useProduct(productId: string) {
    const [product, setProduct] = useState<ProductDetailType | null>(null);
    const [productAttributes, setProductAttributes] = useState<ProductAttributeValue[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                // Sadece tek bir API çağrısı yapıyoruz
                const prod = await ProductService.getById(productId);
                setProduct(prod);

                // Eğer ürün özellikleri varsa, state'e kaydet
                if (prod && prod.productAttributeValues) {
                    setProductAttributes(prod.productAttributeValues);
                } else {
                    setProductAttributes([]);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);

    return { product, productAttributes, loading, error };
}