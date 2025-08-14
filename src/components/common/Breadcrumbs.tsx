import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/Breadcrumbs.css";
import { breadcrumbNameMap } from "../../../src/types/BreadcrumbMapping"

function Breadcrumbs() {
    const location = useLocation();

    if (location.pathname === "/") return null;

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="breadcrumbs">
            <ul>
                <li>
                    <Link to="/">Anasayfa</Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = breadcrumbNameMap[routeTo as keyof typeof breadcrumbNameMap] || decodeURIComponent(name.replace(/-/g, " "));

                    return (
                        <li key={routeTo}>
                            <span className="separator">●</span>
                            {isLast ? (
                                <span className="current">{displayName}</span>
                            ) : (
                                <Link to={routeTo}>{displayName}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
