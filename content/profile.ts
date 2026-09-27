// Single source of truth for the portfolio. Updating a role or a link
// only ever happens in this file.

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
  url?: string;
};

export type Link = { label: string; href: string };

export const profile = {
  name: "Jason Zhang",
  role: "Software Engineer",
  tagline: "Software engineer working on payments, machine learning and computer vision.",
  email: "mailtojason.zhang@gmail.com",
};

// Newest first.
export const experience: Role[] = [
  {
    company: "Capital One",
    title: "Associate Software Engineer",
    period: "2026 – Now",
    summary: "Software engineering on the Card Settlements team.",
    url: "https://www.capitalone.com",
  },
  {
    company: "Niantic",
    title: "Computer Vision Intern",
    period: "2025",
    summary:
      "Built an end-to-end capture and mapping pipeline that synced IMU and camera input, using SLAM for camera extrinsics and feature maps. Developed a real-time tracker that localizes live camera input against those maps, and automated capture-to-cloud processing on AWS.",
    url: "https://nianticlabs.com",
  },
  {
    company: "Ohio State University",
    title: "Machine Learning Researcher",
    period: "2024 – 2025",
    summary:
      "Researched deep learning for 3D object detection and tracking in autonomous driving, exploring VGGT as a backbone to improve accuracy, robustness and real-time performance.",
    url: "https://cse.osu.edu",
  },
  {
    company: "Lawrence Livermore National Lab",
    title: "Software Engineering Intern",
    period: "2024",
    summary:
      "Refactored a research codebase around OOP with inter-step visualization, and built a trainer with hooks for dead-neuron detection that led to a new residual architecture with lower loss.",
    url: "https://www.llnl.gov",
  },
  {
    company: "Lawrence Livermore National Lab",
    title: "Defense Science & Technology Intern",
    period: "2023",
    summary:
      "Optimized laser powder bed fusion parameters for complex geometries using photodiode-based machine learning.",
    url: "https://www.llnl.gov",
  },
  {
    company: "Carnegie Mellon University",
    title: "Research Intern",
    period: "2021 – 2022",
    summary:
      "Built an NLP pipeline to extract and classify tables and their metadata from PDFs, integrated with a cloud database and custom search.",
    url: "https://www.cmu.edu",
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
