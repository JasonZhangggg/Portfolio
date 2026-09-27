import { type CSSProperties, type ReactNode } from "react";
import { experience, links, profile } from "@/content/profile";
import { Greeting } from "./components/greeting";
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
  return (
    <main className="page">
      <Greeting name={profile.name.split(" ")[0]} />

      <section className="prose">
        <p className="reveal" style={i(2)}>
          I&apos;m a software engineer at <A href="https://www.capitalone.com">Capital One</A>,
          building scalable systems for card settlement processing.
        </p>
        <p className="reveal" style={i(3)}>
          Before that, I interned at <A href="https://nianticlabs.com">Niantic</A>, building
          real-time camera tracking on top of SLAM maps, and at{" "}
          <A href="https://www.llnl.gov">Lawrence Livermore National Lab</A>, applying machine
          learning to research problems. Lately, I&apos;m most interested in two things:
          building scalable systems, and designing AI-driven workflows.
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
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
