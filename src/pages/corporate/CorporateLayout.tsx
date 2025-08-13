import React from "react";
import { Link } from "react-router-dom";
import type { CorporateLayoutProps } from "../../types/CorporateLayoutProps"

function CorporateLayout({ children, activePage }: CorporateLayoutProps) {
    const pages = [
        { name: "Hakkımızda", path: "/corporate/about" },
        { name: "Kalite Politikamız", path: "/corporate/qualitypolicy " },
        { name: "Gizlilik Politikası", path: "/corporate/privacy" },
        { name: "Kullanım Koşulları", path: "/corporate/terms" },
    ];

    return (
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 my-12">
            <div className="w-full lg:w-1/4">
                <div className="text-2xl font-medium py-5 mb-5 lg:mb-10">Kurumsal</div>
                <div className="border border-black lg:border-none lg:min-w-[200px]">
                    <div className="flex flex-col gap-2 max-h-[180px] lg:max-h-none overflow-auto">
                        {pages.map((page) => (
                            <Link
                                key={page.path}
                                to={page.path}
                                className={`px-4 py-2 lg:p-0 font-light hover:underline ${activePage === page.name ? "font-medium" : ""
                                    }`}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/4">{children}</div>
        </div>
    );
}

export default CorporateLayout;
