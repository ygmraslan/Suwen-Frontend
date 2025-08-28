import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../css/ProductDetail.css";
import { useState, useRef } from "react";
import type { ProductAttributeValue } from "../../types/Products";
import { FaSearchPlus } from "react-icons/fa";

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { product, productAttributes, loading, error } = useProduct(id!);
    const [quantity, setQuantity] = useState(0);
    const [stockError, setStockError] = useState("");
    const [isZoomActive, setIsZoomActive] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const totalStock = Array.isArray(productAttributes) ? productAttributes.reduce((acc: number, attr: ProductAttributeValue) => acc + attr.stock, 0) : 0;

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Ürün bulunamadı.</p>;

    const handleIncrease = () => {
        if (quantity + 1 > totalStock) {
            setStockError("Stok yetersiz!");
            return;
        }
        setQuantity(quantity + 1);
        setStockError("");
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setStockError("");
        }
    };

    const isAddToCartDisabled = quantity === 0 || totalStock === 0 || quantity > totalStock;

    const handleZoomToggle = () => {
        setIsZoomActive(!isZoomActive);
    };

    const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomActive || !imageRef.current || !containerRef.current) {
            return;
        }

        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;

        const percentX = offsetX / containerRect.width;
        const percentY = offsetY / containerRect.height;

        const bgPosX = percentX * (imageRect.width - containerRect.width);
        const bgPosY = percentY * (imageRect.height - containerRect.height);

        setZoomPosition({ x: bgPosX, y: bgPosY });
    };

    const handleImageDoubleClick = () => {
        setIsZoomActive(false);
    };

    return (
        <>
            <Header />
            <div className="product-detail-container">
                <div className="product-left" ref={containerRef} onMouseMove={handleImageMouseMove} onDoubleClick={handleImageDoubleClick}>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className={`product-image ${isZoomActive ? 'zoomed' : ''}`}
                        ref={imageRef}
                        style={isZoomActive ? {
                            transformOrigin: `${zoomPosition.x}px ${zoomPosition.y}px`,
                            transform: 'scale(2)',
                            cursor: 'zoom-out'
                        } : {
                            cursor: 'zoom-in'
                        }}
                    />
                    {!isZoomActive && (
                        <button className="zoom-button" onClick={handleZoomToggle} aria-label="Büyüt">
                            <FaSearchPlus />
                        </button>
                    )}
                </div>

                <div className="product-right">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>

                    {productAttributes && productAttributes.length > 0 && (
                        <div className="product-attributes">
                            {productAttributes.map((attr: ProductAttributeValue, index: number) => (
                                <span key={attr.id} className="attribute-value">
                                    {attr.productAttribute.name}: {attr.value}
                                    {index < productAttributes.length - 1 ? " | " : ""}
                                </span>
                            ))}
                        </div>
                    )}

                    <p>Fiyat: {product.price.toFixed(2)} ₺</p>

                    <div className="quantity-control">
                        <button onClick={handleDecrease} disabled={quantity === 0}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease} disabled={quantity >= totalStock}>+</button>
                    </div>
                    {stockError && <p className="stock-error">{stockError}</p>}

                    {totalStock > 0 ? (
                        <button className="add-to-cart" disabled={isAddToCartDisabled}>
                            Sepete Ekle
                        </button>
                    ) : (
                        <p className="stock-error">Stok Tükendi</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;