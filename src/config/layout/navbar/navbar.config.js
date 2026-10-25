// config/layout/navbar/navbar.config.js

export const brandLogo = "/logo.jpeg";

export const brandName =
  "হযরতপুর আহমদিয়া দাখিল মাদরাসা অ্যালামনাই অ্যাসোসিয়েশন";

export const navbarItems = [
  {
    title: "মূলপাতা",
    href: "/",
  },
  {
    title: "পরিচিতি",
    children: [
      {
        title: "আমাদের সম্পর্কে",
        href: "/about",
      },
      {
        title: "লক্ষ্য ও উদ্দেশ্য",
        href: "/about/mission-vision",
      },
      {
        title: "গঠনতন্ত্র ও নীতিমালা",
        href: "/about/constitution",
      },
    ],
  },
  {
    title: "কমিটিসমূহ",
    children: [
      {
        title: "বর্তমান কমিটি",
        href: "/committees/current",
      },
      {
        title: "সাবেক কমিটি",
        href: "/committees/former",
      },
    ],
  },
  {
    title: "এলামনাই ডিরেক্টরি",
    href: "/alumni-directory",
  },
  {
    title: "কার্যক্রম ও প্রকল্প",
    href: "/projects",
  },
  {
    title: "ইভেন্ট",
    href: "/events",
  },
  {
    title: "অনুদান",
    href: "/donate",
  },
];
