"use client";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

const footerMenus = [
  { title: "FAQ", path: "/faq" },
  { title: "Terms & Condition", path: "/terms" },
];

const socialLinks = [
  { Icon: IconBrandTiktok, title: "tiktok", path: "https://tiktok.com" },
  { Icon: IconBrandYoutube, title: "youtube", path: "https://youtube.com" },
  {
    Icon: IconBrandInstagram,
    title: "instagram",
    path: "https://instagram.com",
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-4xl px-3">
      <nav className="flex flex-col items-center justify-center gap-4 border-t py-6 md:flex-row md:justify-between">
        <ul className="flex items-center gap-6 text-base">
          {footerMenus.map((menu, idx) => (
            <li key={idx}>
              <Link href={menu.path}>{menu.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <li key={idx}>
              <Link
                href={social.path}
                rel="noopener noreferrer"
                target="_blank"
              >
                <social.Icon className="size-4 md:size-5" />
                <span className="sr-only">{social.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
