"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Property = {
  id: number;
  name: string;
  image: string;
  location: string;
  url: string;
};

export default function PropertyCarousel({
  properties,
}: {
  properties: Property[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Stay</h2>

      <div className="relative h-64 overflow-hidden rounded-3xl">
        {properties.map((property, index) => (
          <Link
            key={property.id}
            href={property.url}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-3xl">
                <h3 className="font-semibold">{property.name}</h3>
                <p className="text-sm">{property.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Previous property"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Next property"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-600 w-5" : "bg-purple-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
