"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

const UserProfileMenu = () => {
  const user = {
    name: "SHARIFUL ISLAM",
    avatar: "/user-avatar.jpg",
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-md hover:bg-primary/10 transition-colors"
      >
        <div className="avatar">
          <div className="w-9 h-9 rounded-full ring-2 ring-primary/20 overflow-hidden relative">
            <Image
              src={
                user.avatar ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt={user.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>
        <p className="hidden lg:block font-semibold text-sm text-foreground tracking-tight">
          {user.name}
        </p>
        <ChevronDown className="w-4 h-4 text-foreground/70" />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-50 menu p-2 shadow-xl bg-background rounded-md w-56 mt-2 border border-border"
      >
        <li className="menu-title px-4 py-2 text-xs text-foreground/50 border-b border-border mb-1">
          Signed in as{" "}
          <span className="font-semibold block text-foreground truncate">
            {user.name}
          </span>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 py-2.5 rounded-md font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <User className="w-4 h-4 text-primary" /> ড্যাশবোর্ড
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex items-center gap-2 py-2.5 rounded-md font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Settings className="w-4 h-4 text-foreground/70" /> সেটিংস
          </Link>
        </li>
        <div className="my-2 border-t border-border"></div>
        <li>
          <button
            onClick={() => console.log("Logout clicked")}
            className="flex items-center gap-2 py-2.5 rounded-md text-error font-medium hover:bg-error/10 w-full text-left transition-colors"
          >
            <LogOut className="w-4 h-4" /> লগআউট
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileMenu;
