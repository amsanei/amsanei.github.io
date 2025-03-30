"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center sticky top-0 z-40 py-4 bg-[#F8F8F8]">
      <div className="flex gap-2 items-center">
        <div className="size-8 bg-white text-black font-bold flex justify-center items-center rounded">
          11
        </div>
        <div>{pathname === "/about" ? "amsanei" : "Amir Mohammad Sanei"}</div>
      </div>
      <div className="flex gap-4">
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
