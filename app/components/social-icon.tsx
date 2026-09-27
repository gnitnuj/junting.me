import Link from "next/link";

export default function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return <Link href={href} className="social-icon" aria-label={label}><span aria-hidden="true">{icon}</span></Link>;
}
