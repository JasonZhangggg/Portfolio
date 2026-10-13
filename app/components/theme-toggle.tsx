"use client";

import { useEffect, useId } from "react";

type Theme = "light" | "dark";

const BG: Record<Theme, string> = { light: "#fcfcfc", dark: "#111111" };

const current = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  // Keep the browser chrome in step with a manual choice.
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute("content", BG[theme]));
}

export function ThemeToggle() {
  const mask = useId();

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

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) {
      apply(next);
      return;
    }

    // Spread the new theme out from the toggle until it covers the farthest corner.
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(() => apply(next)).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button type="button" className="theme-toggle" aria-label="Toggle dark mode" onClick={toggle}>
      <svg
        className="theme-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        aria-hidden
      >
        <mask id={mask}>
          <rect width="24" height="24" fill="white" />
          <circle className="theme-bite" cx="17" cy="7" r="7" fill="black" />
        </mask>
        <circle className="theme-core" cx="12" cy="12" r="9" fill="currentColor" stroke="none" mask={`url(#${mask})`} />
        <g className="theme-rays">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </g>
      </svg>
    </button>
  );
}
