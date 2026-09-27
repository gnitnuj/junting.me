import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="link-card">
      <div>
        <h2>{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <ArrowUpRight className="card-arrow" aria-hidden="true" size={18} />
    </Link>
  );
}
