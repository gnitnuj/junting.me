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
      className="block p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 hover:scale-[1.02]"
    >
      <h2 className="font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </Link>
  );
}
