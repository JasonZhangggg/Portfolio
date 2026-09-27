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
          I&apos;m an associate software engineer at{" "}
          <A href="https://www.capitalone.com">Capital One</A>, working on{" "}
          <mark style={i(0)}>card settlements</mark>.
        </p>
        <p className="reveal" style={i(3)}>
          Before that, I interned at <A href="https://nianticlabs.com">Niantic</A>, building{" "}
          <mark style={i(1)}>real-time camera tracking</mark> on top of SLAM maps, and at{" "}
          <A href="https://www.llnl.gov">Lawrence Livermore National Lab</A>, applying machine
          learning to research problems. Most of what I&apos;ve built sits somewhere between{" "}
          <mark style={i(2)}>computer vision and machine learning</mark>.
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
