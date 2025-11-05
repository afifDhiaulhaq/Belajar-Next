"use client";
import React, { useState } from "react";

interface FocusBox {
  x: number; // persen posisi kiri
  width: number; // persen lebar
}

interface Material {
  name: string;
  thumbnail: string;
  focusBox: FocusBox;
}

interface HeroSpotlightProps {
  heroImage: string;
  materials: Material[];
}

const HeroSpotlight: React.FC<HeroSpotlightProps> = ({ heroImage, materials }) => {
  const [selected, setSelected] = useState<Material | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Hero Container */}
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
        {/* Hero Image */}
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />

        {/* Bayangan kiri & kanan full height */}
        {selected && (
          <>
            {/* Kiri */}
            <div
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                transition: "left 0.5s ease, width 0.5s ease",
                left: 0,
                width: `${selected.focusBox.x}%`,
              }}
            />
            {/* Kanan */}
            <div
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                transition: "left 0.5s ease, width 0.5s ease",
                left: `${selected.focusBox.x + selected.focusBox.width}%`,
                width: `${100 - (selected.focusBox.x + selected.focusBox.width)}%`,
              }}
            />
          </>
        )}
      </div>

      {/* Material Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
        {materials.map((mat) => (
          <div
            key={mat.name}
            className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-300 transition"
            onClick={() => setSelected(mat)}
          >
            <img
              src={mat.thumbnail}
              alt={mat.name}
              className="w-full h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSpotlight;
