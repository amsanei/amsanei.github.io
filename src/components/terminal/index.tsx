"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_TEXT = (
  <>
    Hey! This is Amir, Welcome to my personal website.
    <br />
    Im working on a simple terminal with some basic commedns.
    <br />
    It will be ready soon :)
    <br />
    try <span className="italic">clear</span> for clearing screen
  </>
);

type TerminalType = {
  id: number;
  title: string;
};

export default function Terminal() {
  const [terminals, setTerminals] = useState<TerminalType[]>([]);
  const [display, setDisplay] = useState(INTRO_TEXT);
  const [fullScreen, setFullScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef.current]);

  const submitInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      switch (inputRef.current?.value) {
        case "clear":
          setDisplay(<></>);
          break;
        default:
          print(
            <p className="text-red-600 block font-bold">
              ERROR: Invalid command. Type "help" for the current list of
              implemented commands.
            </p>
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

  const newTerminal = (title: string) => {
    setTerminals((prev) => [...prev, { id: prev.length + 1, title: title }]);
  };

  const destroyTerminal = (id: number) => {
    setTerminals((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div
      className={` bg-black ${
        fullScreen
          ? "h-screen w-screen fixed inset-0 z-50"
          : "relative h-[70vh] mt-4"
      }   text-white p-2 terminal isolate`}
    >
      {terminals.length === 0 && (
        <div className="grid place-content-center absolute z-50 inset-0 bg-white/10 backdrop-blur w-full h-full">
          <div className="border p-2">
            <div className="border-b pb-2 mb-2">
              <div className="flex items-center gap-2">
                <svg
                className="size-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 1h-2v2H9v2H7v2H5v2H3v2H1v2h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3h-2V1zm0 2v2h2v2h2v2h2v2h2v2h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3v-2h2V9h2V7h2V5h2V3h2zm0 4h-2v6h2V7zm0 8h-2v2h2v-2z"
                    fill="currentColor"
                  />
                </svg>
                <div>Alert</div>
              </div>
            </div>
            <div>
              <div>No Active Terminal found. create one</div>
              <button
                className="border px-2 cursor-pointer mt-4"
                onClick={() => newTerminal("Terminal")}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <div className=" w-full flex justify-between border-b border-b-white/20">
        <div className="flex ">
          {terminals.length > 0 &&
            terminals.map((item, index) => (
              <div
                key={index}
                className="border border-white/20 border-b-0 px-2 py-1 flex  gap-4 items-center"
              >
                <div className="text-sm">{item.title}</div>
                <svg
                  onClick={() => destroyTerminal(item.id)}
                  className="size-3 cursor-pointer"
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
            ))}

          {/* <div
            onClick={() => newTerminal("Terminal")}
            className="border border-b-0 border-s-0 flex items-center justify-center px-2 cursor-pointer border-white/20"
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
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </div> */}
        </div>
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
