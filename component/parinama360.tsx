"use client";

import { useEffect, useRef } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { Viewer } from "photo-sphere-viewer";

export default function Panorama360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (containerRef.current && !viewerRef.current) {
      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama: "/360image-2.jpg",
        navbar: ["autorotate", "zoom", "move", "fullscreen"], // navbar valid
        defaultLong: 0, // horizontal awal
        defaultLat: 0,  // vertical awal
        // size: { width: "100%", height: "500px" },
      });
    }

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
}
