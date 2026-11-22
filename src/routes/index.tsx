import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowUpRight, Download, Github, ScanLine, Camera, Cpu, Layers, Code2, Smartphone } from "lucide-react";
import { profile, skills, featured, projects, socials } from "@/content/portfolio";

const title = `${profile.name} — ${profile.role}`;
const description = profile.tagline;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = [Code2, Smartphone, Layers, Camera, ScanLine, Cpu];
const nav = ["about", "skills", "work", "projects", "github", "contact"];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
      <p className="font-mono text-sm text-accent">// {label}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  useReveal();
  const gh = `https://github.com/${profile.githubUser}`;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-mono text-sm font-medium">
            <span className="text-gradient">GJ</span>.dev
          </a>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className="capitalize transition-colors hover:text-accent">{n}</a>
            ))}
          </div>
          <a href={gh} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-accent">
            <Github className="size-5" />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-[100svh] items-center px-5 pt-24">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="animate-rise font-mono text-sm text-accent">Hello, I'm</p>
              <h1 className="animate-rise mt-3 text-5xl font-bold leading-[1.02] tracking-tight [animation-delay:.1s] md:text-7xl">
                {profile.name}
              </h1>
              <p className="animate-rise text-gradient mt-3 text-3xl font-semibold [animation-delay:.2s] md:text-5xl">{profile.role}</p>
              <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground [animation-delay:.3s]">{profile.tagline}</p>
              <div className="animate-rise mt-9 flex flex-wrap gap-3 [animation-delay:.4s]">
                <a href="#work" className="bg-gradient-brand shadow-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                  View work <ArrowUpRight className="size-4" />
                </a>
                <a href={gh} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors hover:text-accent">
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </div>
            <div className="animate-rise relative mx-auto w-56 [animation-delay:.5s] md:w-64">
              <div className="bg-gradient-brand absolute -inset-6 rounded-[3rem] opacity-30 blur-3xl" />
              <div className="glass animate-float relative aspect-[9/19] rounded-[2.5rem] p-3">
                <div className="flex h-full flex-col rounded-[2rem] bg-background/80 p-4 font-mono text-xs">
                  <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-muted" />
                  <p className="text-accent">@Composable</p>
                  <p>fun <span className="text-primary">Scanner</span>() {"{"}</p>
                  <p className="pl-3 text-muted-foreground">CameraX.bind()</p>
                  <p className="pl-3 text-muted-foreground">OpenCV.detect()</p>
                  <p className="pl-3 text-muted-foreground">MLKit.read()</p>
                  <p>{"}"}</p>
                  <div className="relative mt-auto aspect-[3/4] rounded-xl border border-accent/50">
                    <div className="bg-gradient-brand absolute inset-x-2 top-1/2 h-0.5 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" label="about" title="About me">
          <div className="glass max-w-3xl space-y-4 p-7 text-lg text-muted-foreground md:p-10">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="skills" label="skills" title="Technical skills">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((s, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <div key={s.name} className="glass group p-5 transition-all hover:-translate-y-1 hover:shadow-glow md:p-7">
                  <Icon className="size-7 text-accent transition-transform group-hover:scale-110" />
                  <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{s.note}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="work" label="featured project" title="Featured work">
          <div className="glass shadow-glow relative overflow-hidden p-7 md:p-12">
            <div className="bg-gradient-brand absolute -right-24 -top-24 size-72 rounded-full opacity-20 blur-3xl" />
            <ScanLine className="size-10 text-accent" />
            <h3 className="mt-5 text-4xl font-bold md:text-5xl">{featured.title}</h3>
            <p className="text-gradient text-xl font-semibold">{featured.subtitle}</p>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{featured.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">{t}</span>
              ))}
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {featured.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="bg-gradient-brand mt-1.5 size-1.5 shrink-0 rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={featured.download} className="bg-gradient-brand shadow-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                <Download className="size-4" /> Download APK
              </a>
              <a href={featured.link} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors hover:text-accent">
                <Github className="size-4" /> View on GitHub
              </a>
            </div>
          </div>
        </Section>

        <Section id="projects" label="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="glass group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
                <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-accent" />
                </a>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
                <p className="mt-4 font-mono text-xs text-accent">{p.tech.join(" · ")}</p>
                {p.download && (
                  <a href={p.download} className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm text-accent transition-colors hover:border-accent/60">
                    <Download className="size-4" /> Download APK
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="github" label="github" title="On GitHub">
          <a href={gh} target="_blank" rel="noreferrer" className="glass group flex flex-col items-start gap-5 p-7 transition-all hover:shadow-glow sm:flex-row sm:items-center">
            <div className="bg-gradient-brand grid size-16 place-items-center rounded-2xl text-primary-foreground">
              <Github className="size-8" />
            </div>
            <div className="flex-1">
              <p className="text-2xl font-semibold">@{profile.githubUser}</p>
              <p className="text-muted-foreground">Code, experiments and open-source work.</p>
            </div>
            <ArrowUpRight className="size-6 text-accent transition-transform group-hover:rotate-45" />
          </a>
        </Section>

        <Section id="contact" label="contact" title="Let's connect">
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="bg-gradient-brand shadow-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground">
                {s.label} <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
