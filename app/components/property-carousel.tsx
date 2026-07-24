import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Property = { id: number; name: string; image: string; location: string; url: string };

export default function PropertyCarousel({ properties }: { properties: Property[] }) {
  return <section className="stays" aria-labelledby="stay-heading"><div className="section-heading"><div><p className="section-kicker">A PLACE TO LAND</p><h2 id="stay-heading">Stay awhile</h2></div><span>03 homes</span></div><div className="property-rail">{properties.map((property) => <Link key={property.id} href={property.url} className="property-card"><div className="relative property-image"><Image src={property.image} alt={property.name} fill className="object-cover" /></div><div className="property-copy"><p>{property.location}</p><div><h3>{property.name}</h3><ArrowUpRight size={18} /></div></div></Link>)}</div></section>;
}
