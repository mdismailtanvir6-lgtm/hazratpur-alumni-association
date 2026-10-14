"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarItems } from "@/config/layout/navbar/navbar.config";
import { Menu, X, ChevronDown } from "lucide-react";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const drawer = isOpen && (
    <div className="fixed inset-0 z-9999 lg:hidden">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer panel */}
      <aside
        id="mobile-navigation"
        className="absolute inset-y-0 left-0 flex h-dvh w-4/5 max-w-sm flex-col overflow-y-auto bg-background text-foreground p-6 shadow-2xl animate-in slide-in-from-left duration-300 border-r border-border"
      >
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <span className="text-lg font-bold text-primary flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-accent rounded-full"></span>
            মেইন মেনু
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-primary/10 text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex-1 space-y-2">
          {navbarItems.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSubmenu((current) =>
                        current === item.title ? null : item.title,
                      )
                    }
                    aria-expanded={openSubmenu === item.title}
                    className="flex w-full items-center justify-between rounded-md p-3 font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {item.title}

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === item.title
                          ? "rotate-180 text-accent"
                          : ""
                      }`}
                    />
                  </button>

                  {openSubmenu === item.title && (
                    <ul className="ml-3 mt-1 space-y-1 border-l-2 border-accent/40 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-primary/15 font-semibold text-primary border-l-2 border-primary -ml-4.25 pl-3.75"
                                : "text-foreground/80 hover:bg-primary/10 hover:text-foreground"
                            }`}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  target={
                    item.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    item.href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md p-3 font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primary/15 font-semibold text-primary border-l-4 border-accent"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );

  return (
    <>
      <div className="flex items-center lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {drawer && createPortal(drawer, document.body)}
    </>
  );
};

export default MobileDrawer;
