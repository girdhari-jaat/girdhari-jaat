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
  description:
    "A fast, offline-first Android document scanner built with native Kotlin and Jetpack Compose on top of CameraX, OpenCV, ML Kit and Google AI Edge LiteRT. Capture, correct, annotate and export print-quality PDFs — all on the device.",
  tech: ["Kotlin", "Jetpack Compose", "CameraX", "OpenCV", "ML Kit", "LiteRT"],
  points: [
    "Offline-first: no INTERNET permission in the app manifest",
    "Non-destructive editing — crops, rotations and 9 filters stored as metadata",
    "PDF export with page sizes, DPI, password protection and watermarks",
    "English, Urdu, Sindhi and Hindi with full right-to-left layout mirroring",
  ],
  link: "https://github.com/girdhari-jaat/ApnaScan-Download",
  download: "https://github.com/girdhari-jaat/ApnaScan-Download/releases/download/v1.0.0/ApnaScan.apk",
  release: "https://github.com/girdhari-jaat/ApnaScan-Download/releases/tag/v1.0.0",
};

// Add more projects here: { title, description, tech, link }
export const projects: { title: string; description: string; tech: string[]; link: string; download?: string }[] = [
  {
    title: "ApnaScan",
    description: "Offline document & ID card scanner for Android — CameraX capture, OpenCV edge detection, annotation studio and PDF export.",
    tech: ["Kotlin", "Jetpack Compose", "CameraX", "OpenCV", "ML Kit"],
    link: "https://github.com/girdhari-jaat/ApnaScan-Download",
    download: "https://github.com/girdhari-jaat/ApnaScan-Download/releases/download/v1.0.0/ApnaScan.apk",
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
