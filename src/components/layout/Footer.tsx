import Link from "next/link";


export default function Footer() {
  return (
    <footer className="flex justify-center">
    <div className="flex gap-4">
      {LINKS.map((link) => (
        <div key={link.id}>
          <Link href={link.href} className="uppercase text-sm">
            / {link.text}
          </Link>
        </div>
      ))}
    </div>
  </footer>
  )
}
const LINKS = [
    { id: 1, text: "home", href: "/" },
    { id: 2, text: "about", href: "/about" },
    { id: 3, text: "skills", href: "/skills" },
    { id: 4, text: "projects", href: "/projects" },
  ];