// Single source of truth for the portfolio. Every design reads from here,
// so updating a role or a link only ever happens in this file.

export type Role = {
  company: string;
  title: string;
  location?: string;
  period: string;
  summary?: string;
  url?: string;
};

export type Link = { label: string; href: string };

export const profile = {
  name: "Jason Zhang",
  firstName: "Jason",
  location: "Portland, Oregon",
  tagline: "Software engineer focused on machine learning and computer vision.",
  email: "mailtojason.zhang@gmail.com",
  education: {
    school: "The Ohio State University",
    degree: "B.S. Computer Science and Engineering",
  },
};

// TODO: confirm titles, dates and summaries against LinkedIn
// (linkedin.com/in/jasonzhang-pdx/details/experience). Newest first.
export const experience: Role[] = [
  {
    company: "Google",
    title: "Software Engineer",
    location: "Boulder, CO",
    period: "Dates TBD",
    url: "https://about.google",
  },
  {
    company: "Niantic Spatial",
    title: "Computer Vision Intern",
    period: "Dates TBD",
    summary: "Computer vision for spatial computing.",
    url: "https://www.nianticspatial.com",
  },
];

export const links: Link[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jasonzhang-pdx/" },
  { label: "GitHub", href: "https://github.com/JasonZhangggg" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1Bz5FL15ggsrPFi1-UWeZ0HRecDpihovq/view?usp=sharing",
  },
];
