"use client";

import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

const BG: Record<Theme, string> = { light: "#fcfcfc", dark: "#111111" };

// Same sun, moon and reveal as the receipt splitter's toggle.
const RAYS = [
  "M12 3v2.25",
  "M18.36 5.64l-1.59 1.59",
  "M21 12h-2.25",
  "M18.36 18.36l-1.59-1.59",
  "M12 18.75V21",
  "M7.23 16.77l-1.59 1.59",
  "M5.25 12H3",
  "M7.23 7.23 5.64 5.64",
];
const MOON =
  "M21.75 15A9.72 9.72 0 0 1 18 15.75c-5.39 0-9.75-4.37-9.75-9.75 0-1.33.27-2.6.75-3.75A9.75 9.75 0 0 0 3 11.25C3 16.64 7.37 21 12.75 21a9.75 9.75 0 0 0 9-6Z";

const REVEAL_MS = 600;
const PLAY_MS = 900;

// Every icon draws a 1.2px stroke on screen, whatever its size.
const stroke = (size: number) => (1.2 * 24) / size;

const current = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  // Keep the browser chrome in step with a manual choice.
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute("content", BG[theme]));
}

// While set, CSS turns off every transition but the toggle's icons, so no color is mid-fade when the new theme shows.
const setFlipping = (on: boolean) => document.documentElement.toggleAttribute("data-theme-flip", on);

// The circle that covers the viewport from x, y: its radius is the distance to the farthest corner.
const coverRadius = (x: number, y: number) =>
  Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

// A tap during a reveal is ignored, so a quick double tap flips once.
let revealing = false;

export function ThemeToggle() {
  const button = useRef<HTMLButtonElement>(null);

  // Until the visitor picks a theme, keep following the system.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      apply(media.matches ? "dark" : "light");
    };
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  // Hovering or pressing replays the icon's own motion: the sun's rays fan in, the moon wiggles.
  useEffect(() => {
    const host = button.current;
    if (!host) return;
    let timer: number | undefined;
    const play = (e: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (e.type === "pointerenter" && e.pointerType !== "mouse") return;
      host.removeAttribute("data-play");
      void host.offsetWidth;
      host.setAttribute("data-play", "");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => host.removeAttribute("data-play"), PLAY_MS);
    };
    host.addEventListener("pointerenter", play);
    host.addEventListener("pointerdown", play);
    return () => {
      window.clearTimeout(timer);
      host.removeEventListener("pointerenter", play);
      host.removeEventListener("pointerdown", play);
    };
  }, []);

  const toggle = () => {
    if (revealing) return;
    const next: Theme = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof document.startViewTransition !== "function") {
      setFlipping(true);
      apply(next);
      // Style recalculation runs on the next frame; the mark must outlive it or the colors start fading.
      requestAnimationFrame(() => requestAnimationFrame(() => setFlipping(false)));
      return;
    }

    // The new theme spreads from the button's center.
    const box = button.current!.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    setFlipping(true);
    const transition = document.startViewTransition(() => apply(next));
    revealing = true;
    void transition.finished
      .catch(() => {})
      .finally(() => {
        revealing = false;
        setFlipping(false);
      });
    transition.ready.then(
      () =>
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${coverRadius(x, y)}px at ${x}px ${y}px)`] },
          { duration: REVEAL_MS, easing: "cubic-bezier(0.32, 0.72, 0, 1)", pseudoElement: "::view-transition-new(root)" },
        ),
      () => {},
    );
  };

  return (
    <button
      ref={button}
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      onClick={toggle}
    >
      <span className="theme-face">
        <svg
          className="theme-icon theme-sun"
          width={19}
          height={19}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke(19)}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="3.75" />
          {RAYS.map((d, n) => (
            <path key={d} className="ray" style={{ "--d": `${n * 50}ms` } as React.CSSProperties} d={d} />
          ))}
        </svg>
        <svg
          className="theme-icon theme-moon"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke(18)}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d={MOON} />
        </svg>
      </span>
    </button>
  );
}
