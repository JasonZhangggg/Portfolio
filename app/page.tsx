import { type CSSProperties, type ReactNode } from "react";
import { experience, links, profile } from "@/content/profile";
import { Greeting } from "./components/greeting";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./components/brand-icons";
import { Experience } from "./components/experience";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function A({ href, label, children }: { href: string; label?: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

const link = (label: string) => links.find((l) => l.label === label)!;

const footerLinks = [
  { label: "Email", Icon: Mail },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "GitHub", Icon: GithubIcon },
  { label: "Resume", Icon: FileText },
];

export default function Home() {
  return (
    <main className="page">
      <Greeting name={profile.name.split(" ")[0]} />

      <section className="prose">
        <p className="reveal" style={i(2)}>
          I&apos;m currently a software engineer at <A href="https://www.capitalone.com">Capital One</A>,
          building the core systems that process credit card settlements.
        </p>
        <p className="reveal" style={i(3)}>
          Before that, I interned at <A href="https://nianticlabs.com">Niantic</A>, building
          real-time camera tracking on top of SLAM maps, and at{" "}
          <A href="https://www.llnl.gov">Lawrence Livermore National Lab</A>, applying machine
          learning to research problems. Lately, I&apos;ve been interested in building scalable systems and AI workflows.
        </p>
      </section>

      <section aria-labelledby="work">
        <h2 id="work" className="section-title reveal" style={i(4)}>
          Work
        </h2>
        <Experience roles={experience} offset={5} />
      </section>

      <section aria-labelledby="connect">
        <h2 id="connect" className="section-title reveal" style={i(5 + experience.length)}>
          Connect
        </h2>
        <p className="prose reveal" style={i(6 + experience.length)}>
          The best way to reach me is by <A href={link("Email").href}>email</A>. You can also
          find me on <A href={link("LinkedIn").href}>LinkedIn</A> and{" "}
          <A href={link("GitHub").href}>GitHub</A>, or take a look at my{" "}
          <A href={link("Resume").href}>resume</A>.
        </p>
      </section>

      <footer className="footer reveal" style={i(7 + experience.length)}>
        <span>{new Date().getFullYear()}</span>
        <nav className="footer-icons" aria-label="Contact">
          {footerLinks.map(({ label, Icon }) => (
            <A key={label} href={link(label).href} label={label}>
              <Icon size={16} strokeWidth={1.75} aria-hidden />
            </A>
          ))}
        </nav>
      </footer>
    </main>
  );
}
