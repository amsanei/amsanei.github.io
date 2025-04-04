"use client";
import React, { useState } from "react";
import Image from "next/image";

type GalleryProps = {
  cover: {
    src: string;
    alt: string;
    description?: string;
  };
};

export default function Gallery({ cover }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Image
        onClick={() => setIsOpen(true)}
        src={cover.src}
        alt={cover.alt}
        width={300}
        height={300}
        className="w-full cursor-pointer"
      />
      {isOpen && (
        <div className="z-50 fixed inset-0 w-screen h-screen bg-black/20 backdrop-blur-lg ">
          <div onClick={() => setIsOpen(false)} className="fixed top-4 start-4 cursor-pointer">
            <svg
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
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </div>
          <div className="grid place-content-center h-screen md:w-2/3 mx-auto">
            <Image
              src={cover.src}
              alt={cover.alt}
              width={1000}
              height={1000}
              className="w-full shadow"
            />
            {cover.description && 
            
            <div className="text-center mt-4 bg-white/70 py-2 px-2">
              {cover.description}
            </div>
            }
          </div>
        </div>
      )}
    </>
  );
}
