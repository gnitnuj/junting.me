import Link from "next/link";

export default function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return <Link href={href} className="social-icon">{icon}</Link>;
}
