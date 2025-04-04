import Image from "next/image";
import Link from "next/link";

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-t border-black/20">
      <div className="text-black/60 text-sm">{label}</div>
      <div>{value}</div>
    </div>
  );
}

export default function page() {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="leading-loose text-justify text-sm">
          <div className="flex flex-col gap-2 mb-4">
            <div className="font-bold text-4xl">Amir Mohammad Sanei</div>
            <div className="flex gap-2 items-center">
              <div>Designer && Developer</div>
              <div className="bg-green-200 px-2 rounded-full">
                Open To Work
              </div>
            </div>
          </div>
          <div>
            With over four years of experience in front-end development and
            UI/UX design, my journey in programming began at the age of 15 with
            C. Over the years, I have honed my skills, specializing in React and
            Next.js, and have grown into a proficient front-end developer and
            designer, dedicated to creating seamless and visually compelling
            user experiences.
          </div>
        </div>
        <div className="mt-4">
          <DataRow label="Date of Birth" value="2001-01-30" />
          <DataRow
            label="Degree"
            value="Master's degree in software engineering (studying)"
          />
          <DataRow label="Location" value="Iran - Moghan" />
          <DataRow label="Email" value="am.sanei79@gmail.com" />
        </div>
        <div className="mt-8">
          <div className="text-xl font-bold">Works</div>
          <div className="flex flex-col gap-4 mt-2">
            {WORKS.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 items-center justify-between border p-2 border-black/10"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-white p-2 size-14 rounded-full flex justify-center items-center">
                    <Image
                      src={item.logo}
                      alt={item.title + " logo"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className="text-sm text-black/60">{item.duration}</div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <div className="mt-8">
          <div className="text-xl font-bold">Education</div>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="border border-black/20 flex flex-col gap-8 items-center p-4 relative">
              <div className="font-bold mb-2">
                Bachelor Degree in Software Engineering
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <div className="text-black/40 text-sm">Graduated from</div>
                  <div>Mohaghegh Ardebili</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-black/40 text-sm">in</div>
                  <div>2024</div>
                </div>
              </div>
            </div>
            <div className="border border-black/20 flex flex-col gap-8 items-center p-4 relative">
              <div className="font-bold mb-2">
                Master's degree in software engineering
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <div className="text-black/40 text-sm">Studying in</div>
                  <div>Azad Ardebil</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-black/40 text-sm">From</div>
                  <div>2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-xl font-bold">Languages</div>
          <div className="mt-2 flex flex-col">
            {LANGUAGES.map((item) => (
              <DataRow key={item.id} label={item.title} value={item.level} />
            ))}
          </div>
        </div>
      </div>
      <Image
        className="w-full h-[50vh] md:h-[84vh] object-cover md:sticky md:top-20"
        src="/me.jpg"
        alt="Amir"
        width={300}
        height={300}
      />
    </div>
  );
}

const WORKS = [
  {
    id: 1,
    logo: "/apa.png",
    title: "Mohaghegh Ardebil APA Center",
    duration: "1 Year And 6 mounth",
  },
  { id: 2, logo: "/anibaran.svg", title: "Ani Baran", duration: "1 Year" },
  { id: 3, logo: "/diyan.svg", title: "Diyan", duration: "8 Mounth" },
  {
    id: 4,
    logo: "/hesetazegi.jpg",
    title: "Hese Tazegi",
    duration: "2 Mounth",
  },
];

const LANGUAGES = [
  { id: 1, title: "Azari", level: "Native" },
  { id: 2, title: "Farsi", level: "Advanced" },
  { id: 3, title: "English", level: "Advanced" },
];
