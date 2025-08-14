import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { useCategory } from "../../hooks/UseCategory";
import type { Category } from "../../types/Category";
import type { Product } from "../../types/Products";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import "../../css/ProductPage.css";
import ProductListHeader from "./ProductListHeader";

const mainCategories: Category[] = [
    {
        id: 1,
        name: "Sütyen",
        slug: "sutyen",
        subCategories: [
            { id: 11, name: "Destekli Sütyen", slug: "destekli-sutyen" },
            { id: 12, name: "Desteksiz Sütyen", slug: "desteksiz-sutyen" },
        ],
    },
    {
        id: 2,
        name: "İç Giyim",
        slug: "ic-giyim",
        subCategories: [
            { id: 21, name: "Atlet", slug: "atlet" },
            { id: 22, name: "Külot", slug: "kulot" },
        ],
    },
];

const products: Product[] = [
    { id: 1, name: "Vizon Rosa Minimizer", price: 1499.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8335100_01.jpg", category: "sutyen", rating: 4.1 },
    { id: 2, name: "Kahverengi Miranda", price: 1399.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8270023_01.jpg", category: "destekli-sutyen", rating: 3.5 },
    { id: 3, name: "Vizon Celine", price: 1599.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8455100_01.jpg", category: "desteksiz-sutyen", rating: 4.3 },
    { id: 4, name: "Atlet Basic", price: 499.99, image: "https://suwen.mncdn.com/mnresize/750/-/suwen/Products/ST6830607D023_01.jpg", category: "atlet", rating: 5.0 },
    { id: 5, name: "Vizon Rosa Minimizer", price: 1499.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8335100_01.jpg", category: "sutyen", rating: 4.1 },
    { id: 6, name: "Kahverengi Miranda", price: 1399.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8270023_01.jpg", category: "destekli-sutyen" },
    { id: 7, name: "Vizon Celine", price: 1599.99, image: "https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8455100_01.jpg", category: "desteksiz-sutyen" },
    { id: 8, name: "Atlet Basic", price: 499.99, image: "https://suwen.mncdn.com/mnresize/750/-/suwen/Products/ST6830607D023_01.jpg", category: "atlet" },
];

function ProductPage() {
    const { selectedCategory, selectedSubCategory } = useCategory(mainCategories);
    const [sortType, setSortType] = React.useState<string>("");

    const handleSortChange = (sortKey: string) => {
        setSortType(sortKey);
    };

    let filteredProducts = selectedSubCategory
        ? products.filter((p) => p.category === selectedSubCategory.slug)
        : selectedCategory
            ? products.filter(
                (p) =>
                    p.category === selectedCategory.slug ||
                    selectedCategory.subCategories?.some((sub) => sub.slug === p.category)
            )
            : [...products];

    // Sort işlemi
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
                    {selectedSubCategory ? selectedSubCategory.name : selectedCategory ? selectedCategory.name : "Tüm Ürünler"}
                </h2>

                {filteredProducts.length > 0 ? (
                    <div className="product-list-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-list-item">
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name} />
                                    <button className="wishlist-btn">
                                        <GoHeart />
                                    </button>
                                    <button className="add-to-basket-btn">Sepete Ekle</button>
                                </div>
                                <div className="product-details">
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-rating">
                                        <span className="rating-score">{product.rating ?? 0}</span>
                                        {[1, 2, 3, 4, 5].map((i) => {
                                            const rating = product.rating ?? 0;
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
