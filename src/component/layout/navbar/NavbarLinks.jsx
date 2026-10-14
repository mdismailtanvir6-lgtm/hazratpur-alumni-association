
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems } from "@/config/layout/navbar/navbar.config";
import { ChevronDown } from "lucide-react";

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="menu menu-horizontal px-1 items-center gap-1">
      {navbarItems.map((item, index) => {
        const isActive = item.href && pathname === item.href;
        const isParentActive = item.children?.some(
          (child) => pathname === child.href,
        );

        if (item.children) {
          return (
            <li key={index} className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className={`flex items-center gap-1 font-medium rounded-md py-2 px-4 transition-colors ${
                  isParentActive
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {item.title}
                <ChevronDown className="w-4 h-4 opacity-70" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 menu p-2 shadow-xl bg-background rounded-md w-52 mt-1 border border-border"
              >
                {item.children.map((child, cIndex) => {
                  const isChildActive = pathname === child.href;
                  return (
                    <li key={cIndex}>
                      <Link
                        href={child.href}
                        className={`rounded-md py-2.5 px-3 transition-colors ${
                          isChildActive
                            ? "bg-accent/15 font-semibold text-accent"
                            : "text-foreground hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {child.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }

        return (
          <li key={index}>
            <Link
              href={item.href}
              className={`font-medium px-4 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-accent/15 text-accent font-semibold shadow-xs"
                  : "text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
