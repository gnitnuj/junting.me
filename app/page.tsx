import type React from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import LinkCard from "./components/link-card";
import SocialIcon from "./components/social-icon";
import PropertyCarousel from "./components/property-carousel";

export default function Home() {
  const properties = [
    {
      id: 1,
      name: "West Village Apartment",
      image: "/ny-carousel.jpeg?height=400&width=600",
      location: "West Village, New York",
      url: "https://airbnb.com/h/wvnyc1br",
    },
    {
      id: 2,
      name: "Seattle Home",
      image: "/sea-carousel.jpeg?height=400&width=600",
      location: "Seattle, Washington",
      url: "https://airbnb.com/h/valentineplace",
    },
    {
      id: 3,
      name: "Los Angeles Tiny Home",
      image: "/la-carousel.avif?height=400&width=600",
      location: "Los Angeles, California",
      url: "https://airbnb.com/h/leimert-park-guesthouse",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-purple-50">
      <div className="max-w-md w-full mx-auto py-16">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500 ring-offset-2">
            <Image
              src="/JunFabio.jpg?height=200&width=200"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Junting</h1>
          <p className="text-gray-600 text-center mt-2">
            Engineering | Management | Real Estate
          </p>
        </div>

        <div className="flex justify-center space-x-4 py-8">
          <SocialIcon
            href="https://github.com/gnitnuj"
            icon={<Github size={20} />}
          />
          <SocialIcon
            href="https://linkedin.com/in/junting"
            icon={<Linkedin size={20} />}
          />
          <SocialIcon
            href="mailto:junting.lu@gmail.com"
            icon={<Mail size={20} />}
          />
          <SocialIcon
            href="https://instagram.com/whatsajunting"
            icon={<Instagram size={20} />}
          />
        </div>

        <div className="space-y-4  py-8">
          <LinkCard
            title="About"
            description="What's a Junting?"
            href="https://whatsajunt.ing/about"
          />
          <LinkCard
            title="Chat"
            description="Get on my calendar"
            href="https://calendar.app.google/enxs2Q7YpHACnBBAA"
          />
          <LinkCard
            title="Code"
            description="My build-your-own -x repo"
            href="https://github.com/gnitnuj/build-my-own-x/"
          />
        </div>

        <PropertyCarousel properties={properties} />
      </div>
    </main>
  );
}
