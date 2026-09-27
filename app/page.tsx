import { experience, profile } from "@/content/profile";

export default function Home() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <ul>
        {experience.map((role) => (
          <li key={role.company}>
            {role.title}, {role.company}
          </li>
        ))}
      </ul>
    </main>
  );
}
