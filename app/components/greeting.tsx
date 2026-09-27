"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Rolls through a few greetings and lands on the last one.
const WORDS = ["你好", "Hola", "Bonjour", "Ciao", "Hello"];
// Each step holds a little longer, so the roll decelerates into "Hello".
const HOLDS = [550, 600, 650, 750];
const LAST = WORDS.length - 1;

export function Greeting({ name }: { name: string }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [widths, setWidths] = useState<number[] | null>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timers = useRef<number[]>([]);
  const running = useRef(false);

  const play = useCallback((fromStart: boolean) => {
    if (running.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIndex(LAST);
      return;
    }
    running.current = true;
    let current = fromStart ? 0 : LAST;
    let elapsed = 0;

    const steps = fromStart ? HOLDS.map((h, n) => [n + 1, h]) : WORDS.map((_, n) => [n, 500]);
    steps.forEach(([next, hold], n) => {
      elapsed += hold;
      timers.current.push(
        window.setTimeout(() => {
          setPrev(current);
          setIndex(next);
          current = next;
          if (n === steps.length - 1) running.current = false;
        }, elapsed),
      );
    });
  }, []);

  useEffect(() => {
    // Measure once fonts are in so the slot width matches each word exactly.
    document.fonts.ready.then(() => {
      setWidths(measureRefs.current.map((el) => el?.getBoundingClientRect().width ?? 0));
    });
    // Wait for the page's load-in before rolling.
    timers.current.push(window.setTimeout(() => play(true), 350));
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, [play]);

  return (
    <h1 className="greeting" aria-label={`Hello, I'm ${name}.`}>
      <span
        className="greeting-slot"
        aria-hidden
        style={widths ? { width: widths[index] } : undefined}
        onPointerEnter={(e) => e.pointerType === "mouse" && play(false)}
        onClick={() => play(false)}
      >
        {prev !== null && prev !== index && (
          <span key={`out-${prev}-${index}`} className="greeting-word is-exiting">
            {WORDS[prev]}
          </span>
        )}
        <span key={`in-${index}`} className="greeting-word is-entering">
          {WORDS[index]}
        </span>
      </span>
      <span className="greeting-rest reveal" aria-hidden style={{ "--i": 0 } as React.CSSProperties}>
        , I&apos;m {name}.
      </span>

      <span className="greeting-measure" aria-hidden>
        {WORDS.map((w, n) => (
          <span key={w} ref={(el) => void (measureRefs.current[n] = el)}>
            {w}
          </span>
        ))}
      </span>
    </h1>
  );
}
