import React, { useState, useEffect, useCallback } from "react";
import "../../css/Banner.css";

const banners = [
    "/assets/banners/silaxsuwen-desktop.png",
    "/assets/banners/Duchess-Desktop-TR.png",
    "/assets/banners/EvGiyim706050-Desk-TR-Snap.png",
    "/assets/banners/Outlet_70_VaranDesktopTR.png",
    "/assets/banners/Coraplarda_3_Al_2_DesktopTR.png",
    "/assets/banners/PlajGiyim706050-Desk-TR-Snap.png",
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? banners.length - 1 : prev - 1));
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % banners.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="banner-container">
            <button className="banner-arrow left-arrow" onClick={prevSlide} aria-label="Önceki">
                &#10094;
            </button>

            <img
                src={banners[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
                className="banner-image"
            />

            <button className="banner-arrow right-arrow" onClick={nextSlide} aria-label="Sonraki">
                &#10095;
            </button>

            {/* Noktalar */}
            <div className="banner-dots">
                {banners.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Banner ${index + 1}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") goToSlide(index); }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
