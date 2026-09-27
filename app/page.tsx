import { Fragment, type CSSProperties, type ReactNode } from "react";
import { experience, links, profile, type Role } from "@/content/profile";

const i = (n: number) => ({ "--i": n }) as CSSProperties;

const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

function External({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

function Company({ role }: { role: Role }) {
  return role.url ? <External href={role.url}>{role.company}</External> : <>{role.company}</>;
}

// "a, b and c" with React nodes.
function joinList(items: ReactNode[]) {
  return items.map((item, n) => (
    <Fragment key={n}>
      {n > 0 && (n === items.length - 1 ? " and " : ", ")}
      {item}
    </Fragment>
  ));
}

function roleClause(role: Role) {
  const title = role.title.toLowerCase();
  return (
    <>
      {article(title)} {title} at <Company role={role} />
    </>
  );
}

export default function Home() {
  const [current, ...previous] = experience;
  const link = (label: string) => links.find((l) => l.label === label);
  const email = link("Email");
  const elsewhere = links.filter((l) => l.label !== "Email" && l.label !== "Resume");
  const resume = link("Resume");
  const field = profile.education.degree.replace(/^B\.S\.\s*(in\s+)?/, "").toLowerCase();

  const greeting = `Hello, I'm ${profile.firstName}.`;

  return (
    <main className="page">
      <h1 className="greeting">
        {greeting.split(" ").map((word, n) => (
          <span key={n} className="word" style={i(n)}>
            {word}{" "}
          </span>
        ))}
      </h1>

      <div className="prose">
        <p className="reveal" style={i(4)}>
          I&apos;m a software engineer based in {profile.location}, focused on machine
          learning and computer vision.
        </p>

        {current && (
          <p className="reveal" style={i(5)}>
            Right now I&apos;m {roleClause(current)}
            {current.location && <>, in {current.location}</>}.
            {current.summary && <> {current.summary}</>}
            {previous.length > 0 && (
              <>
                {" "}Before that, I was {joinList(previous.map((r) => roleClause(r)))}
                {previous.length === 1 && previous[0].summary && (
                  <>, working on {lowerFirst(previous[0].summary)}</>
                )}
                .
              </>
            )}
          </p>
        )}

        <p className="reveal" style={i(6)}>
          I studied {field} at {profile.education.school}.
        </p>

        <p className="reveal" style={i(7)}>
          The best way to reach me is by{" "}
          {email && <External href={email.href}>email</External>}. You can also find me on{" "}
          {joinList(elsewhere.map((l) => <External key={l.label} href={l.href}>{l.label}</External>))}
          {resume && (
            <>
              , or read my <External href={resume.href}>resume</External>
            </>
          )}
          .
        </p>
      </div>
    </main>
  );
}

function lowerFirst(s: string) {
  return (s[0].toLowerCase() + s.slice(1)).replace(/\.$/, "");
}
