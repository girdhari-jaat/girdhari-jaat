// Edit everything shown on the site here. Only add facts that are true.
export const profile = {
  name: "Girdhari Jaat",
  role: "Android Developer",
  tagline: "Building fast, native Android apps with Kotlin and Jetpack Compose — from camera pipelines to on-device ML.",
  about: [
    "I'm an Android developer focused on modern, native app development with Kotlin and Jetpack Compose.",
    "I enjoy working close to the hardware — camera capture, image processing and on-device machine learning — and turning it into clean, usable apps.",
  ],
  githubUser: "girdhari-jaat",
};

export const skills = [
  { name: "Kotlin", note: "Primary language" },
  { name: "Android", note: "Native SDK" },
  { name: "Jetpack Compose", note: "Declarative UI" },
  { name: "CameraX", note: "Camera pipelines" },
  { name: "OpenCV", note: "Image processing" },
  { name: "ML Kit", note: "On-device ML" },
];

export const featured = {
  title: "ApnaScan",
  subtitle: "Document & ID Scanner",
  description: "An Android app for scanning documents and ID cards, built with Kotlin and Jetpack Compose on top of CameraX, OpenCV and ML Kit.",
  tech: ["Kotlin", "Jetpack Compose", "CameraX", "OpenCV", "ML Kit"],
  link: "https://github.com/girdhari-jaat",
};

// Add more projects here: { title, description, tech, link }
export const projects: { title: string; description: string; tech: string[]; link: string }[] = [
  {
    title: "ApnaScan",
    description: "Document & ID scanner for Android.",
    tech: ["Kotlin", "CameraX", "OpenCV"],
    link: "https://github.com/girdhari-jaat",
  },
  {
    title: "Portfolio",
    description: "This site — React, TypeScript and Tailwind, deployed on GitHub Pages.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/girdhari-jaat/girdhari-jaat.github.io",
  },
];

// Only add links you actually own.
export const socials = [{ label: "GitHub", href: "https://github.com/girdhari-jaat" }];
