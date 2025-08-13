import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiBookmarkHeart } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import type { Category } from "../../types/Category";
import logo from "../../../public/assets/logo.svg";
import "../../css/Header.css";

function Header() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Sütyen",
      slug: "sutyen",
      subCategories: [
        { id: 11, name: "Destekli sütyen", slug: "destekli-sutyen" },
        { id: 12, name: "Desteksiz sütyen", slug: "desteksiz-sutyen" },
      ],
    },
    {
      id: 2,
      name: "İç Giyim",
      slug: "ic-giyim",
      subCategories: [
        { id: 14, name: "Atlet", slug: "atlet" },
        { id: 15, name: "Külot", slug: "kulot" },
      ],
    },
  ];

  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const categoryNames = categories.map((c) => c.name);

  // Animasyon: harf harf yazma efekti
  useEffect(() => {
    if (searchText !== "") {
      // Kullanıcı yazıyor, animasyonu durdur
      setDisplayedText("");
      setCharIndex(0);
      return;
    }

    const currentCategory = categoryNames[categoryIndex];
    if (charIndex <= currentCategory.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentCategory.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Yazı tamamlandı, bir süre bekle sonra diğer kategoriye geç
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCategoryIndex((categoryIndex + 1) % categoryNames.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, categoryIndex, categoryNames, searchText]);

  const handleMouseEnter = (id: number) => {
    setOpenCategoryId(id);
  };

  const handleMouseLeave = () => {
    setOpenCategoryId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="custom-appbar">
      <div className="custom-toolbar">
        {/* Logo */}
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Kategoriler */}
        <nav className="categories-nav">
          <ul className="categories-list">
            {categories.map((category) => (
              <li
                key={category.id}
                className="category-item"
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="category-text">{category.name}</span>

                {category.subCategories && openCategoryId === category.id && (
                  <ul className="subcategories-list">
                    {category.subCategories.map((sub) => (
                      <li key={sub.id} className="subcategory-item">
                        <Link
                          to={`/category/${sub.slug}`}
                          className="subcategory-link"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Arama ve ikonlar */}
        <div className="right-section">
          <div className="search-box">
            <input
              type="text"
              value={searchText}
              onChange={handleInputChange}
              className={`search-input ${searchText ? "active" : ""}`}
              aria-label="search"
              placeholder=""
              autoComplete="off"
            />
            <CiSearch className="search-icon" />
            {!searchText && (
              <div className="animated-placeholder">{displayedText}</div>
            )}
          </div>

          <button className="icon-button" aria-label="Kaydet">
            <BiBookmarkHeart />
          </button>
          <button className="icon-button" aria-label="Sepet">
            <BsBasket />
          </button>
          <button className="icon-button" aria-label="Kullanıcı">
            <GoPerson />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
