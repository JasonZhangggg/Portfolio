"use client";

import { useEffect, useState } from "react";

// Starts on "Hello" so the server-rendered page already reads correctly.
const WORDS = ["Hello", "你好", "Hola", "Bonjour", "Ciao"];

const TYPE_MS = 110;
const DELETE_MS = 60;
const HOLD_MS = 2200; // full word on screen
const GAP_MS = 350; // empty, before typing the next word

export function Greeting({ name }: { name: string }) {
  const [text, setText] = useState(WORDS[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number;
    let word = 0;
    let chars = Array.from(WORDS[0]);
    let length = chars.length;

    const wait = (ms: number, next: () => void) => {
      timer = window.setTimeout(next, ms);
    };

    const erase = () => {
      if (length > 0) {
        length -= 1;
        setText(chars.slice(0, length).join(""));
        wait(DELETE_MS, erase);
      } else {
        word = (word + 1) % WORDS.length;
        chars = Array.from(WORDS[word]);
        wait(GAP_MS, type);
      }
    };

    const type = () => {
      if (length < chars.length) {
        length += 1;
        setText(chars.slice(0, length).join(""));
        wait(TYPE_MS, type);
      } else {
        wait(HOLD_MS, erase);
      }
    };

    // Let the page finish loading in before the first delete.
    wait(HOLD_MS + 600, erase);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <h1 className="greeting reveal" style={{ "--i": 0 } as React.CSSProperties}>
      <span className="sr-only">Hello, I&apos;m {name}.</span>
      <span className="highlight" aria-hidden>
        <span className="typed">{text}</span>
        , I&apos;m {name}.
      </span>
    </h1>
  );
}
