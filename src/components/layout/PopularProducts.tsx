import React, { useState } from 'react';
import '../../css/PopularProducts.css';
import type { Product } from '../../types/Products';

const popularProducts: Product[] = [
    {
        id: 1,
        name: 'Vizon Rosa Minimizer Toparlayıcı Sütyen',
        price: 1499.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8335100_01.jpg',
        category: "sütyen"
    },
    {
        id: 2,
        name: 'Vizon Celine Toparlayıcı Sütyen',
        price: 1599.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8455100_01.jpg',
        category: "sütyen"
    },
    {
        id: 3,
        name: 'Kahverengi Miranda Minimizer Sütyen',
        price: 1399.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8270023_01.jpg',
        category: "sütyen"
    },
    {
        id: 4,
        name: 'Vizon Juliet Minimizer Sütyen',
        price: 1499.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW8535100_01.jpg',
        category: "sütyen"
    },
    {
        id: 5,
        name: 'Vizon Madeleine Control Sütyen',
        price: 1499.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW5990100_01.jpg',
        category: "sütyen"
    },
    {
        id: 6,
        name: 'Siyah Diana Spacer Balkonet Sütyen',
        price: 1699.99,
        image: 'https://suwen.mncdn.com/mnresize/1200/-/suwen/Products/SW5668012_01.jpg',
        category: "sütyen"
    }
];

function PopularProducts() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % popularProducts.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            (prevIndex - 1 + popularProducts.length) % popularProducts.length
        );
    };

    const visibleProducts = [];
    for (let i = 0; i < visibleCount; i++) {
        const index = (startIndex + i) % popularProducts.length;
        visibleProducts.push(popularProducts[index]);
    }

    return (
        <div className="popular-products-container">
            <h2 className="section-title">Popüler Ürünler</h2>
            <div className="carousel-wrapper">
                <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
                <div className="products-row">
                    {visibleProducts.map(product => (
                        <div key={product.id} className="product-item">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">{product.price.toFixed(2)} TL</div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button next" onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
}

export default PopularProducts;