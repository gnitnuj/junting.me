import Link from "next/link";
import { ArrowUpRight, CodeXml } from "lucide-react";

function DoorMark() {
  return (
    <svg width="24" height="30" viewBox="0 0 56 72" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      {/* Doorway mark from Far Far Away Holdings. */}
      <path d="M8 68V28a20 20 0 0 1 40 0v40M17 68V29a11 11 0 0 1 22 0v39M3 68h50M32 44v6" />
    </svg>
  );
}

const sites = [
  {
    title: "Software consulting",
    domain: "juluco.dev",
    href: "https://juluco.dev/",
    icon: <CodeXml size={22} strokeWidth={1.6} />,
    tone: "lilac",
  },
  {
    title: "Places & spaces",
    domain: "farfaraway.holdings",
    href: "http://farfaraway.holdings/",
    icon: <DoorMark />,
    tone: "sage",
  },
];

export default function ProfessionalLinks() {
  return (
    <section className="professional-links" aria-labelledby="work-heading">
      <div className="section-heading">
        <h2 id="work-heading">My work</h2>
      </div>
      <div className="professional-list">
        {sites.map(({ title, domain, href, icon, tone }) => (
          <Link key={domain} href={href} className={`professional-card professional-card--${tone}`}>
            <span className={`site-icon site-icon--${tone}`} aria-hidden="true">
              {icon}
            </span>
            <div className="site-copy">
              <h3>{title}</h3>
              <p>{domain}</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
