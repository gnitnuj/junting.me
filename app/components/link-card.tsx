import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LinkCard({ title, eyebrow, description, href }: { title: string; eyebrow: string; description: string; href: string }) {
  return <Link href={href} className="link-card"><div><p className="card-eyebrow">{eyebrow}</p><h2>{title}</h2><p className="card-description">{description}</p></div><ArrowUpRight className="card-arrow" aria-hidden="true" size={22} /></Link>;
}
