import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { useCategories } from "../../hooks/useCategories";
import { useCategory } from "../../hooks/UseCategory";
import { useProducts } from "../../hooks/useProducts";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import "../../css/ProductPage.css";
import ProductListHeader from "./ProductListHeader";
import type { Product } from "../../types/Products";
import { Link } from "react-router-dom";

function ProductPage() {
    // Backend’den kategorileri çek
    const { categories, loading: categoriesLoading } = useCategories();

    // useCategory hook’una kategori dizisini ver
    const { selectedCategory, selectedSubCategory } = useCategory(categories || []);

    // Backend’den ürünleri çek
    const { products = [], loading: productsLoading, error } = useProducts();

    const [sortType, setSortType] = React.useState<string>("");

    const handleSortChange = (sortKey: string) => setSortType(sortKey);

    // filtreleme: categoryId ile eşleştirme
    const filteredProducts: Product[] = selectedSubCategory
        ? products.filter(p => p.categoryId === selectedSubCategory.id)
        : selectedCategory
            ? products.filter(
                p =>
                    p.categoryId === selectedCategory.id ||
                    selectedCategory.subCategories?.some(sub => sub.id === p.categoryId)
            )
            : products;

    // sıralama
    if (sortType) {
        filteredProducts.sort((a, b) => {
            switch (sortType) {
                case "price-asc": return a.price - b.price;
                case "price-desc": return b.price - a.price;
                case "rating-desc": return (b.rating ?? 0) - (a.rating ?? 0);
                case "date-asc": return a.id - b.id;
                case "date-desc": return b.id - a.id;
                case "popular": return (b.rating ?? 0) - (a.rating ?? 0);
                default: return 0;
            }
        });
    }

    return (
        <>
            <Header />
            <Breadcrumbs />

            <div className="product-page-container">
                <ProductListHeader
                    totalProducts={filteredProducts.length}
                    onSortChange={handleSortChange}
                />

                <h2 className="section-title">
                    {selectedSubCategory?.name || selectedCategory?.name || "Tüm Ürünler"}
                </h2>

                {categoriesLoading || productsLoading ? (
                    <div>Yükleniyor...</div>
                ) : error ? (
                    <div>Ürünler yüklenirken hata oluştu: {error}</div>
                ) : filteredProducts.length > 0 ? (
                    <div className="product-list-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-list-item">
                                <div className="product-image-container">
                                    <Link to={`/products/detail/${product.id}`}>
                                        <img src={product.imageUrl} alt={product.name} />
                                    </Link>
                                    <button className="wishlist-btn"><GoHeart /></button>
                                    <button className="add-to-basket-btn">Sepete Ekle</button>
                                </div>
                                <div className="product-details">
                                    <Link to={`/products/detail/${product.id}`} className="product-name-link">
                                        {product.name}
                                    </Link>
                                    <div className="product-rating">
                                        <span className="rating-score">{product.rating ?? 0}</span>
                                        {[1, 2, 3, 4, 5].map(i => {
                                            const rating = product.rating ?? 0;
                                            if (rating === 0) return <FaRegStar key={i} />;
                                            if (i <= Math.floor(rating)) return <FaStar key={i} />;
                                            else if (i - rating <= 0.5 && i > rating) return <FaStarHalfAlt key={i} />;
                                            else return <FaRegStar key={i} />;
                                        })}
                                    </div>
                                    <div className="product-price">{product.price.toFixed(2)} TL</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-products-message">Bu kategoride ürün bulunmamaktadır.</div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default ProductPage;
