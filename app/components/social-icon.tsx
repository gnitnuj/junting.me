import Link from "next/link";

export default function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-purple-600 hover:text-purple-800"
    >
      {icon}
    </Link>
  );
}
