import Image from "next/image";

export default function page() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="leading-loose text-justify text-sm">
          Front-end developer and UI/UX designer with 4 years of specialized
          experience, highly skilled in React, Next.js, Figma, Tailwind, and
          Git. I have worked remotely and on a project basis with Ani Baran as a
          front-end developer and UI designer. Additionally, I have full-time
          experience as a front-end developer and UI designer at Dezafzar Data
          Ban Sabalan Sarir. I completed my internship at the APA Center of
          Mohaghegh Ardabili University and hold a recognized Front-end
          Development certificate from Quera. Currently, I am working full-time
          at Diyan (formerly Ani Baran) while pursuing a master’s degree in
          Software Engineering.
        </div>
        <div className="mt-4">
          <div className="flex justify-between py-2 border-t border-black/20">
            <div>Date of Birth</div>
            <div>2001-12-31</div>
          </div>
          <div className="flex justify-between py-2 border-t border-black/20">
            <div>born</div>
            <div>2001-12-31</div>
          </div>
          <div className="flex justify-between py-2 border-y border-black/20">
            <div>born</div>
            <div>2001-12-31</div>
          </div>
        </div>
        <div className="mt-4">
          <div> ***contact info***</div>
        </div>
        <div className="mt-4">
          <div> ***ejducation***</div>
        </div>
        <div className="mt-4">
          <div> ***languages***</div>
        </div>
      </div>
      <Image
        className="w-full h-[70vh] object-cover"
        src="/me.jpg"
        alt="Amir"
        width={300}
        height={300}
      />
    </div>
  );
}
