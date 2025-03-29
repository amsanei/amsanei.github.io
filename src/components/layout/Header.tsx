import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="size-8 bg-white text-black font-bold flex justify-center items-center rounded">
          11
        </div>
        <div>Amir Mohammad Sanei</div>
      </div>
      <div className="flex gap-4">
        {LINKS.map((link) => (
          <div key={link.id}>
            <Link href={link.href} className=" text-sm letter tracking-widest">
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
