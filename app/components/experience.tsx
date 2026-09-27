"use client";

import { useState, type CSSProperties } from "react";
import { Plus } from "lucide-react";
import type { Role } from "@/content/profile";

export function Experience({ roles, offset }: { roles: Role[]; offset: number }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (n: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });

  return (
    <ul className="roles">
      {roles.map((role, n) => {
        const isOpen = open.has(n);
        const id = `role-${n}`;
        return (
          <li
            key={`${role.company}-${role.period}`}
            className="role reveal"
            data-open={isOpen}
            style={{ "--i": offset + n } as CSSProperties}
          >
            <button
              type="button"
              className="role-head"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => toggle(n)}
            >
              <span className="role-name">
                <span className="role-company">{role.company}</span>
                <span className="role-title">{role.title}</span>
              </span>
              <span className="role-period">{role.period}</span>
              <Plus className="role-icon" size={14} strokeWidth={1.75} aria-hidden />
            </button>
            <div className="role-body" id={id} inert={!isOpen}>
              <div className="role-body-inner">
                <p>
                  {role.summary}
                  {role.url && (
                    <>
                      {" "}
                      <a href={role.url} target="_blank" rel="noopener noreferrer">
                        {new URL(role.url).hostname.replace(/^www\./, "")}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
