import Link from "next/link";

export default function LinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, #fff8e7 0%, #ffffff 100%)',
        border: '2px solid #c17767',
        borderRadius: '16px'
      }}
    >
      <h2 className="font-semibold" style={{color: '#2d1810'}}>{title}</h2>
      <p className="text-sm mt-1" style={{color: '#8b4513'}}>{description}</p>
    </Link>
  );
}
