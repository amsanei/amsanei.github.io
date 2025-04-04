"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="  sticky top-0 z-40 py-4 bg-[#F8F8F8]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="size-8 bg-white text-black font-bold flex justify-center items-center rounded">
            11
          </div>
          <div>{pathname === "/about" ? "amsanei" : "Amir Mohammad Sanei"}</div>
        </div>
        <svg
          onClick={() => setMobileNav((prev) => !prev)}
          className="md:hidden cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>

        <div className="gap-4 hidden md:flex">
          {LINKS.map((link) => (
            <div key={link.id}>
              <Link
                href={link.href}
                className={`text-sm letter tracking-widest ${
                  pathname === link.href
                    ? "text-black"
                    : "text-black/40 hover:text-black transition-colors"
                }`}
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`gap-4 flex flex-col ${
          mobileNav ? "opacity-100" : "opacity-0"
        } transition-opacity fixed px-4 py-1 rounded shadow bg-white border border-black/20 end-4`}
      >
        {!mobileNav && <div className="w-full h-full absolute z-50"></div>}
        {LINKS.map((link) => (
          <div key={link.id}>
            <Link
              href={link.href}
              className={`text-sm letter tracking-widest ${
                pathname === link.href
                  ? "text-black"
                  : "text-black/40 hover:text-black transition-colors"
              }`}
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
}

const LINKS = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "About", href: "/about" },
  { id: 3, text: "Skills", href: "/skills" },
  { id: 4, text: "Projects", href: "/projects" },
];
