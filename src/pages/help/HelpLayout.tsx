import React from "react";
import { Link } from "react-router-dom";

type HelpLayoutProps = {
  children: React.ReactNode;
  activePage: string;
};

function HelpLayout({ children, activePage }: HelpLayoutProps) {
  const pages = [
    { name: "Returns & Exchanges", path: "/help/returns-exchanges" },
    { name: "FAQ", path: "/help/faq" },
    { name: "Cargo Tracking", path: "/help/cargo-tracking" },
    { name: "Contact", path: "/help/contact" },
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 my-12">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4">
        <div className="text-2xl font-medium py-5 mb-5 lg:mb-10">Help</div>
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

      {/* Right Content */}
      <div className="w-full lg:w-3/4">{children}</div>
    </div>
  );
}

export default HelpLayout;
