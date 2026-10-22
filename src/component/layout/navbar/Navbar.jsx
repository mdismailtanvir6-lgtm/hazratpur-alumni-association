import React from "react";
import { brandLogo, brandName } from "@/config/layout/navbar/navbar.config";
import Image from "next/image";
import Link from "next/link";

// Split subcomponents
import NavbarLinks from "./NavbarLinks";
import UserProfileMenu from "./UserProfileMenu";
import ThemeToggle from "./ThemeToggle";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12">
        <div className="navbar min-h-20 px-0 justify-between">
          {/* Brand Logo & Name (Start) */}
          <div className="navbar-start w-auto flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0 p-1 rounded-full border border-transparent group-hover:border-accent/40 transition-all duration-300">
                <Image
                  src={brandLogo}
                  fill
                  alt="logo"
                  sizes="60px" 
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  
                />
              </div>
              <p className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors leading-tight max-w-60 md:max-w-65">
                {brandName}
              </p>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <NavbarLinks />
          </div>

          {/* Right Section: Theme Toggle, User Profile & Mobile Trigger (End) */}
          <div className="navbar-end w-auto flex items-center gap-3">
            <ThemeToggle />
            <UserProfileMenu />
            <MobileDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
