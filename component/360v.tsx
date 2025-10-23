"use client";

import dynamic from "next/dynamic";
import React from "react";

// Jika menggunakan react-360-view
const React360Viewer = dynamic(() => import("react-360-view"), { ssr: false });

// 🔹 Definisikan props
interface Section360Props {
  title: string;
  amount: number;
  path: string;
  fileName: string;
}

const Section360: React.FC<Section360Props> = ({ title, amount, path, fileName }) => {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="w-full">
        <React360Viewer
          amount={amount}
          imagePath={path}
          fileName={fileName}
        />
      </div>
    </section>
  );
};

export default Section360;
