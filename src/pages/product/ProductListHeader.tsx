import React, { useState, useRef, useEffect } from "react";
import { TbArrowsSort } from "react-icons/tb";
import { BsSortDown, BsSortUp, BsSortNumericUp, BsSortNumericDown } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import type { ProductListHeaderProps } from "../../types/ProductList";
import "../../css/ProductListHeader.css";

function ProductListHeader({ totalProducts, onSortChange }: ProductListHeaderProps) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSortValue, setSelectedSortValue] = useState("");
    const sortRef = useRef<HTMLDivElement>(null);

    const sortOptions = [
        { value: "date-desc", label: "Tarih: Yeniden Eskiye", icon: <BsSortUp /> },
        { value: "date-asc", label: "Tarih: Eskiden Yeniye", icon: <BsSortDown /> },
        { value: "popular", label: "Popüler", icon: <FaArrowTrendUp /> },
        { value: "price-asc", label: "Fiyat: Artan", icon: <BsSortNumericUp /> },
        { value: "price-desc", label: "Fiyat: Azalan", icon: <BsSortNumericDown /> },
    ];

    const handleSortToggle = () => setIsSortOpen(!isSortOpen);

    const handleSortSelect = (value: string) => {
        setSelectedSortValue(value);
        onSortChange(value); // Parent'e bildir
        setIsSortOpen(false);
    };

    const getSortText = () => {
        const selectedOption = sortOptions.find(option => option.value === selectedSortValue);
        return selectedOption ? selectedOption.label : "Sıralama";
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="product-list-header">
            <div className="total-products">{totalProducts} ürün listeleniyor</div>
            <div className="sort-container" ref={sortRef}>
                <button
                    className={`sort-button ${selectedSortValue ? "active" : ""}`}
                    onClick={handleSortToggle}
                >
                    <TbArrowsSort /> {getSortText()}
                </button>

                {isSortOpen && (
                    <div className="sort-dropdown">
                        {sortOptions.map((option) => (
                            <div
                                key={option.value}
                                className={`sort-option ${selectedSortValue === option.value ? "selected" : ""}`}
                                onClick={() => handleSortSelect(option.value)}
                            >
                                {option.icon} {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductListHeader;
