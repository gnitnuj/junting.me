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
      className="w-10 h-10 flex items-center justify-center rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
      style={{
        background: 'linear-gradient(135deg, #d4a574 0%, #c17767 100%)',
        color: '#fff8e7'
      }}
    >
      {icon}
    </Link>
  );
}
