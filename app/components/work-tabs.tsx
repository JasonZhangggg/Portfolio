"use client";

import { useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Role } from "@/content/profile";

export function WorkTabs({ roles }: { roles: Role[] }) {
  const [active, setActive] = useState(0);
  const [clip, setClip] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelsRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState<number | null>(null);

  // The highlight is a styled copy of the tab list, clipped to the active
  // row. Moving the clip sweeps the active color between rows.
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const update = () => {
      const tab = tabRefs.current[active];
      if (!tab) return;
      const top = tab.offsetTop;
      const left = tab.offsetLeft;
      const right = wrap.offsetWidth - (left + tab.offsetWidth);
      const bottom = wrap.offsetHeight - (top + tab.offsetHeight);
      setClip(`inset(${top}px ${right}px ${bottom}px ${left}px)`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [active]);

  // Panels share a grid cell for the crossfade; size the cell to the active
  // one so the spacing below the section matches the rest of the page.
  useLayoutEffect(() => {
    const panels = panelsRef.current;
    const panel = panelRefs.current[active];
    if (!panels || !panel) return;
    const update = () => {
      const border = panels.offsetHeight - panels.clientHeight;
      setHeight(panel.offsetHeight + border);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(panel);
    return () => ro.disconnect();
  }, [active]);

  const onKeyDown = (e: KeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + roles.length) % roles.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="work">
      <div className="tabs-wrap" ref={wrapRef}>
        <div className="tabs" role="tablist" aria-label="Work history" onKeyDown={onKeyDown}>
          {roles.map((role, n) => (
            <button
              key={`${role.company}-${role.period}`}
              ref={(el) => void (tabRefs.current[n] = el)}
              type="button"
              role="tab"
              id={`tab-${n}`}
              aria-selected={n === active}
              aria-controls={`panel-${n}`}
              tabIndex={n === active ? 0 : -1}
              className="tab"
              onClick={() => setActive(n)}
            >
              {role.company}
            </button>
          ))}
        </div>
        <div
          className="tabs tabs-highlight"
          aria-hidden
          data-ready={clip !== null}
          style={clip ? { clipPath: clip } : undefined}
        >
          {roles.map((role) => (
            <span key={`${role.company}-${role.period}`} className="tab">
              {role.company}
            </span>
          ))}
        </div>
      </div>

      {/* Panels share one grid cell, so the height is the tallest and never jumps. */}
      <div
        className="panels"
        ref={panelsRef}
        data-measured={height !== null}
        style={height !== null ? { height } : undefined}
      >
        {roles.map((role, n) => (
          <div
            key={`${role.company}-${role.period}`}
            ref={(el) => void (panelRefs.current[n] = el)}
            id={`panel-${n}`}
            role="tabpanel"
            aria-labelledby={`tab-${n}`}
            className="panel"
            data-active={n === active}
            inert={n !== active}
          >
            <p className="panel-head">
              <span className="panel-title">{role.title}</span>
              <span className="panel-period">{role.period}</span>
            </p>
            <p className="panel-summary">{role.summary}</p>
            {role.url && (
              <a href={role.url} target="_blank" rel="noopener noreferrer" className="panel-link">
                {new URL(role.url).hostname.replace(/^www\./, "")}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
