import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Property = { id: number; name: string; image: string; location: string; url: string };

export default function PropertyCarousel({ properties }: { properties: Property[] }) {
  return (
    <section className="stays" aria-labelledby="stay-heading">
      <div className="section-heading">
        <h2 id="stay-heading">Places to stay</h2>
      </div>
      <div className="property-rail">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={property.url}
            className="property-card"
          >
            <div className="relative property-image">
              <Image
                src={property.image}
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="property-copy">
              <h3>{property.name}</h3>
              <p>View on Airbnb</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
