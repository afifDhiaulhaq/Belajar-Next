"use client";
import React, { useState } from "react";

interface PortfolioItem {
  title: string;
  slug: string;
  image: string;
}

const galleryData: Record<string, string[]> = {
  residential: [
    "https://picsum.photos/id/1011/400/300",
    "https://picsum.photos/id/1012/400/300",
    "https://picsum.photos/id/1013/400/300",
    "https://picsum.photos/id/1014/400/300",
  ],
  retail: [
    "https://picsum.photos/id/1021/400/300",
    "https://picsum.photos/id/1022/400/300",
    "https://picsum.photos/id/1023/400/300",
  ],
  other: [
    "https://picsum.photos/id/1031/400/300",
    "https://picsum.photos/id/1032/400/300",
    "https://picsum.photos/id/1033/400/300",
  ],
};

const PortfolioSection: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    { title: "Residential", slug: "residential", image: "/asset/image1.png" },
    { title: "Retail", slug: "retail", image: "/asset/image2.png" },
    { title: "Other", slug: "other", image: "/asset/image4.png" },
  ];

  const [open, setOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (slug: string) => {
    setSelectedSlug(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSlug(null);
    setSelectedImage(null);
  };

  const handleSelectImage = (src: string) => {
    setSelectedImage(src);
  };

  const imagesToShow = selectedSlug ? galleryData[selectedSlug] || [] : [];

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Project
        </h2>
      </div>

      {/* GRID CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item) => (
          <div
            key={item.slug}
            onClick={() => handleOpen(item.slug)}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div
              className="bg-cover bg-center flex flex-col justify-end p-6 aspect-[3/4] transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="relative text-white text-lg font-bold">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="
              relative bg-white rounded-lg shadow-xl p-6 
              w-[90%] max-w-6xl mx-auto overflow-y-auto max-h-[90vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            {/* Judul */}
            <h3 className="text-2xl font-semibold mb-6 text-center capitalize">
              {selectedSlug} Gallery
            </h3>

            {/* Grid Gambar di Modal */}
            {imagesToShow.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {imagesToShow.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectImage(src)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition 
                      ${selectedImage === src
                        ? "border-blue-500"
                        : "border-transparent hover:border-blue-300"
                      }`}
                  >
                    {/* Ukuran gambar mengikuti card utama */}
                    <div
                      className="aspect-[3/4] bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                Tidak ada gambar untuk kategori ini.
              </p>
            )}

            {/* Preview Gambar yang Dipilih */}
            {selectedImage && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Gambar terpilih:</p>
                <img
                  src={selectedImage}
                  alt="selected"
                  className="mx-auto rounded-md max-h-64 object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
