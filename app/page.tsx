import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import LinkCard from "./components/link-card";
import SocialIcon from "./components/social-icon";
import PropertyCarousel from "./components/property-carousel";

export default function Home() {
  const properties = [
    { id: 1, name: "West Village Apartment", image: "/ny-carousel.jpeg", location: "West Village, New York", url: "https://airbnb.com/h/wvnyc1br" },
    { id: 2, name: "Seattle Home", image: "/sea-carousel.jpeg", location: "Seattle, Washington", url: "https://airbnb.com/h/valentineplace" },
    { id: 3, name: "Los Angeles Tiny Home", image: "/la-carousel.avif", location: "Los Angeles, California", url: "https://airbnb.com/h/leimert-park-guesthouse" },
  ];

  return (
    <main className="site-shell">
      <div className="page-content">
        <header className="intro">
          <p className="intro-kicker">HELLO, I&apos;M</p>
          <div className="relative avatar">
            <Image src="/JunFabio.jpg" alt="Portrait of Junting" fill className="object-cover" priority />
          </div>
          <h1>Junting Lu</h1>
          <p className="intro-copy">Building thoughtful things across engineering, management, and real estate.</p>
        </header>

        <nav className="socials" aria-label="Social links">
          <SocialIcon href="https://github.com/gnitnuj" icon={<Github size={20} />} />
          <SocialIcon href="https://linkedin.com/in/junting" icon={<Linkedin size={20} />} />
          <SocialIcon href="mailto:junting.lu@gmail.com" icon={<Mail size={20} />} />
          <SocialIcon href="https://instagram.com/whatsajunting" icon={<Instagram size={20} />} />
        </nav>

        <section className="link-section" aria-label="Get in touch">
          <LinkCard eyebrow="A LITTLE MORE" title="About me" description="What&apos;s a Junting?" href="https://whatsajunt.ing/about" />
          <LinkCard eyebrow="LET&apos;S CONNECT" title="Book a chat" description="Get on my calendar" href="https://calendar.app.google/enxs2Q7YpHACnBBAA" />
        </section>

        <PropertyCarousel properties={properties} />
        <footer>Made with curiosity · Seattle, WA</footer>
      </div>
    </main>
  );
}
