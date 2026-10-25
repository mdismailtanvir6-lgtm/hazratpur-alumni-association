"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems } from "@/config/layout/navbar/navbar.config";
import { ChevronDown } from "lucide-react";

const NavbarLinks = () => {
  const pathname = usePathname();

  // Match exact routes and nested routes.
  const isPathActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <ul className="flex items-center gap-1">
      {navbarItems.map((item) => {
        const isActive = item.href ? isPathActive(item.href) : false;

        // Keep the parent active when a child route is active.
        const isParentActive = item.children?.some((child) =>
          isPathActive(child.href),
        );

        const linkClass = (active) =>
          `flex items-center gap-1 rounded-lg px-4 py-2.5
           text-sm font-medium
           transition-[background-color,color,box-shadow,transform]
           duration-200 ease-out
           ${
             active
               ? "bg-primary/[0.08] text-primary shadow-sm"
               : "text-foreground/80 hover:bg-primary/[0.06] hover:text-primary"
           }`;

        if (item.children) {
          return (
            <li key={item.title} className="group relative list-none">
              {/* Dropdown trigger */}
              <button
                type="button"
                aria-haspopup="true"
                className={linkClass(isParentActive)}
              >
                {item.title}

                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className="
                    ml-0.5 opacity-60
                    transition-[transform,opacity]
                    duration-200 ease-out
                    group-hover:rotate-180
                    group-hover:opacity-100
                    group-focus-within:rotate-180
                  "
                />
              </button>

              {/* Dropdown panel */}
              <div
                className="
                  invisible pointer-events-none
                  absolute left-0 top-full z-50 w-56 pt-2.5
                  translate-y-1 opacity-0
                  transition-[opacity,transform,visibility]
                  duration-200 ease-out
                  group-hover:visible group-hover:pointer-events-auto
                  group-hover:translate-y-0 group-hover:opacity-100
                  group-focus-within:visible
                  group-focus-within:pointer-events-auto
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100
                "
              >
                <ul
                  className="
                    overflow-hidden rounded-xl
                    border border-border/70
                    bg-background/95 p-1.5
                    shadow-lg shadow-black/6
                    backdrop-blur-md space-y-1
                  "
                >
                  {item.children.map((child) => {
                    // Child links use exact matching.
                    const isChildActive = pathname === child.href;

                    return (
                      <li key={child.href} className="list-none">
                        <Link
                          href={child.href}
                          className={`
                            relative flex items-center
                            rounded-lg px-3.5 py-2.5
                            text-sm
                            transition-[background-color,color,padding]
                            duration-200 ease-out
                            ${
                              isChildActive
                                ? "bg-primary/8 font-semibold text-primary"
                                : "text-foreground/80 hover:bg-primary/6 hover:pl-4 hover:text-primary"
                            }
                          `}
                        >
                          {child.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        }

        return (
          <li key={item.href} className="list-none">
            <Link href={item.href} className={linkClass(isActive)}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
