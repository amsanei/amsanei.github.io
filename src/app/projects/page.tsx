import Gallery from "@/components/ui/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      {DATA.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse md:grid md:grid-cols-3 gap-4 border-t border-y-black/20 py-4"
        >
          <div className="col-span-2 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="font-bold mb-2 text-2xl">{item.title}</h2>
              <div className="flex gap-2">
                {item.role.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 text-sm bg-white px-1 rounded"
                  >
                    {role === "Designer" ? (
                      <svg
                        className="size-5"
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
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                          d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="size-5"
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
                          strokeLinejoin="round"
                          strokeWidth="1.3"
                          d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                        />
                      </svg>
                    )}
                    {role}
                  </div>
                ))}
              </div>
            </div>
            <p>{item.description}</p>
            <div className="mt-auto flex justify-between items-center">
              <div className="flex gap-2 mt-2">
                {item.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-white inline px-2 text-sm py-1 rounded"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <Link
                href={item.link}
                className="flex items-center gap-1 uppercase text-blue-600 text-sm"
                target="_blank"
              >
                <svg
                  className="size-4"
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
                    strokeLinejoin="round"
                    strokeWidth="1.3"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>

                <span>Visit</span>
              </Link>
            </div>
          </div>
          <div className="w-full object-cover border border-black/20">
            <Gallery
              cover={{ src: item.image, alt: item.title }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const DATA = [
  {
    id: 1,
    title: "Diyan Website",
    role: ["Designer", "Developer"],
    description: "Landing page, Contact page, Download page, Blog and more",
    image: "/diyan.jpg",
    link: "https://diyan.ir/",
    tags: ["alpine.js", "tailwind", "html"],
  },
  {
    id: 2,
    title: "Diyan Web App",
    role: ["Designer", "Developer"],
    description:
      "The Diyan Intelligent Load Announcement System is a communication bridge between drivers and transportation companies. Utilizing modern technologies and artificial intelligence, it revolutionizes the connection between drivers and transport companies.",
    image: "/diyan-app.jpg",
    link: "https://app.diyan.ir/",
    tags: ["react", "next.js", "tailwind", "PWA", "html"],
  },
  {
    id: 3,
    title: "File Ban Website",
    role: ["Designer", "Developer"],
    description: "Multi Antivirus Web App",
    image: "/filebaan.jpg",
    link: "https://multiav.cert.ir/",
    tags: ["react", "nextjs", "html", "css"],
  },
  {
    id: 4,
    title: "Lyric Hub",
    role: ["Developer"],
    description: "A website for translated song lyrics in Persian.",
    image: "/lyrichub.jpg",
    link: "https://lyrichub.ir/",
    tags: ["WordPress"],
  },
];
