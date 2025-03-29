"use client";

import { useRef, useState } from "react";

const INTRO_TEXT = (
  <>
    👋🏻Hey! This is Amir, Welcome to my personal website.
    <br />
    Im working on a simple terminal with some basic commedns.
    <br />
    It will be ready soon :)
  </>
);

export default function Terminal() {
  const [display, setDisplay] = useState(INTRO_TEXT);
  const [fullScreen, setFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (inputRef.current?.value) {
        case "clear":
          setDisplay(<></>);
          break;
        default:
          print(
            <p className="text-red-600 block font-bold">terminal is not ready! use clear commend for clearing screen.</p>
          );
      }

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const print = (value: React.JSX.Element) => {
    setDisplay((prev) => (
      <>
        {prev}
        {value}
      </>
    ));
  };
  return (
    <div
      className={` bg-black ${
        fullScreen
          ? "h-screen w-screen fixed inset-0"
          : "relative h-[60vh] mt-4"
      }   text-white p-2 terminal`}
    >
      <div className=" w-full flex justify-between border-b border-b-white/20">
        <div>Terminal</div>
        <div>
          <div
            onClick={() => setFullScreen((prev) => !prev)}
            className="cursor-pointer size-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ai ai-FullScreen"
            >
              <path d="M2 7V2h5" />
              <path d="M22 7V2h-5" />
              <path d="M7 22H2v-5" />
              <path d="M17 22h5v-5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-4">{display}</div>
      <input
        onKeyDownCapture={submitInput}
        ref={inputRef}
        type="text"
        className="px-2 py-3 border-t border-t-white/20 absolute bottom-0 left-0 w-full outline-none"
        placeholder="Type Your input"
      />
    </div>
  );
}

const PAGES = ["home", "projects", "about", "contact", "resume"];
