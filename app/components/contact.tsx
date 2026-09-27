"use client";

import { useEffect, useState, type CSSProperties, type SVGProps } from "react";
import { ArrowUpRight, Check, Copy, FileText, Mail } from "lucide-react";
import type { Link } from "@/content/profile";

// Lucide dropped brand marks, so these are drawn to match its 24px / 1.75 stroke style.
function GitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const ICONS = { Email: Mail, LinkedIn, GitHub, Resume: FileText } as const;
const iconProps = { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": true } as const;

export function Contact({ links, offset }: { links: Link[]; offset: number }) {
  return (
    <ul className="contacts">
      {links.map((link, n) => {
        const Icon = ICONS[link.label as keyof typeof ICONS] ?? ArrowUpRight;
        const external = link.href.startsWith("http");
        return (
          <li
            key={link.label}
            className="contact reveal"
            style={{ "--i": offset + n } as CSSProperties}
          >
            <a
              className="contact-link"
              href={link.href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon className="contact-icon" {...iconProps} />
              <span className="contact-label">{link.label}</span>
              <span className="contact-handle">{link.handle}</span>
              {external && <ArrowUpRight className="contact-arrow" {...iconProps} width={14} height={14} />}
            </a>
            {link.label === "Email" && <CopyButton value={link.handle} />}
          </li>
        );
      })}
    </ul>
  );
}

// The async Clipboard API can be blocked (permissions, embedded frames);
// fall back to the legacy selection-based copy before giving up.
async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const el = document.createElement("textarea");
    el.value = value;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      className="copy"
      data-copied={copied}
      aria-label={copied ? "Email copied" : "Copy email address"}
      onClick={() => copyText(value).then((ok) => ok && setCopied(true))}
    >
      <Copy className="copy-icon copy-idle" {...iconProps} width={14} height={14} />
      <Check className="copy-icon copy-done" {...iconProps} width={14} height={14} />
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
