import { type CSSProperties, type ReactNode } from "react";
import { experience, links, profile } from "@/content/profile";
import { Experience } from "./components/experience";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {children}
    </a>
  );
}

const link = (label: string) => links.find((l) => l.label === label)!;

export default function Home() {
  const letters = profile.name.split("");

  return (
    <main className="page">
      <header className="header">
        <h1 className="name" aria-label={profile.name}>
          {letters.map((ch, n) => (
            <span key={n} className="letter" style={i(n)} aria-hidden>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>
        <p className="subtitle reveal" style={i(1)}>
          {profile.role}
        </p>
      </header>

      <section className="prose">
        <p className="reveal" style={i(2)}>
          Hello, I&apos;m Jason. I&apos;m an associate software engineer at{" "}
          <A href="https://www.capitalone.com">Capital One</A>, working on card settlements.
        </p>
        <p className="reveal" style={i(3)}>
          Before that I studied computer science and engineering at Ohio State, where I did
          machine learning research on 3D perception for self-driving cars. Along the way I
          interned at <A href="https://nianticlabs.com">Niantic</A>,{" "}
          <A href="https://www.llnl.gov">Lawrence Livermore</A> and{" "}
          <A href="https://www.cmu.edu">Carnegie Mellon</A>, mostly working on computer vision
          and machine learning.
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
          Reach me by <A href={link("Email").href}>email</A>, or find me on{" "}
          <A href={link("LinkedIn").href}>LinkedIn</A> and{" "}
          <A href={link("GitHub").href}>GitHub</A>. My <A href={link("Resume").href}>resume</A>{" "}
          has the longer version.
        </p>
      </section>

      <footer className="footer reveal" style={i(7 + experience.length)}>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
