import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import LinkCard from "./components/link-card";
import SocialIcon from "./components/social-icon";
import ProfessionalLinks from "./components/professional-links";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="page-content">
        <header className="intro">
          <div className="relative avatar">
            <Image src="/JunFabio.jpg" alt="Portrait of Junting" fill sizes="64px" className="object-cover" priority />
          </div>
          <h1>Junting Lu</h1>
          <p className="intro-copy">Code, keys, and curiosity.</p>
        </header>

        <nav className="socials" aria-label="Social links">
          <SocialIcon label="GitHub" href="https://github.com/gnitnuj" icon={<Github size={20} />} />
          <SocialIcon label="LinkedIn" href="https://linkedin.com/in/junting" icon={<Linkedin size={20} />} />
          <SocialIcon label="Email Junting" href="mailto:hello@whatsajunt.ing" icon={<Mail size={20} />} />
          <SocialIcon label="Instagram" href="https://instagram.com/whatsajunting" icon={<Instagram size={20} />} />
        </nav>

        <section className="link-section" aria-label="Personal links">
          <LinkCard title="About me" description="A little more about me." href="https://whatsajunt.ing/about" />
          <LinkCard title="Book a chat" description="Get on my calendar" href="https://calendar.app.google/enxs2Q7YpHACnBBAA" />
        </section>

        <ProfessionalLinks />
        <footer>Seattle, WA</footer>
      </div>
    </main>
  );
}
