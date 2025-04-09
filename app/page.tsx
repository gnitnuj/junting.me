import type React from "react";
import Image from "next/image";
import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import LinkCard from "./components/link-card";
import SocialIcon from "./components/social-icon";

export default function Home() {
  // Sample property data - replace with your actual properties
  const properties = [
    {
      id: 1,
      name: "Beachfront Villa",
      image: "/placeholder.svg?height=400&width=600",
      location: "Malibu, California",
      url: "https://airbnb.com/property1",
    },
    {
      id: 2,
      name: "Mountain Cabin",
      image: "/placeholder.svg?height=400&width=600",
      location: "Aspen, Colorado",
      url: "https://airbnb.com/property2",
    },
    {
      id: 3,
      name: "Downtown Loft",
      image: "/placeholder.svg?height=400&width=600",
      location: "New York City, NY",
      url: "https://airbnb.com/property3",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-purple-50">
      <div className="max-w-md w-full mx-auto py-16">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500 ring-offset-2">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
          <p className="text-gray-600 text-center mt-2">
            Web Developer & Designer | Creating digital experiences
          </p>
        </div>

        {/* Property Carousel */}
        {/* <PropertyCarousel properties={properties} /> */}

        <div className="space-y-4">
          <LinkCard
            title="My Portfolio"
            description="Check out my latest projects and work"
            href="https://example.com/portfolio"
          />
          <LinkCard
            title="My Blog"
            description="Read my thoughts on design and development"
            href="https://example.com/blog"
          />
          <LinkCard
            title="Free Resources"
            description="Download free design resources and code snippets"
            href="https://example.com/resources"
          />
          <LinkCard
            title="Book a Call"
            description="Let's chat about your next project"
            href="https://calendly.com"
          />
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} />
          <SocialIcon
            href="https://instagram.com"
            icon={<Instagram size={20} />}
          />
          <SocialIcon href="https://github.com" icon={<Github size={20} />} />
          <SocialIcon
            href="https://linkedin.com"
            icon={<Linkedin size={20} />}
          />
          <SocialIcon
            href="mailto:hello@example.com"
            icon={<Mail size={20} />}
          />
        </div>
      </div>
    </main>
  );
}
