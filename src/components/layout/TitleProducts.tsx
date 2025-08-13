import React from "react";
import "../../css/TitleProducts.css";

const popularItems = [
    { src: "/assets/TitleProduct/Plaj.png", title: "Plaj", link: "#" },
    { src: "/assets/TitleProduct/corap.png", title: "Çorap", link: "#" },
    { src: "/assets/TitleProduct/Hamile.png", title: "Hamile", link: "#" },
    { src: "/assets/TitleProduct/kulot.png", title: "Külot", link: "#" },
    { src: "/assets/TitleProduct/sutyen.png", title: "Sütyen", link: "#" },
    { src: "/assets/TitleProduct/bikini-story.png", title: "Bikini", link: "#" },
];

function PopularProducts() {
    return (
        <div className="popular-icons-container">
            {popularItems.map((item, index) => (
                <a href={item.link} key={index} className="icon-item-link">
                    <div className="icon-item">
                        <img src={item.src} alt={item.title} className="icon-image" />
                        <span className="icon-title">{item.title}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default PopularProducts;
