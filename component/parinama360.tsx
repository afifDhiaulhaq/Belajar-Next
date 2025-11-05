"use client";

import { useEffect, useRef } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default function Panorama360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    const initViewer = async () => {
      const { Viewer } = await import("photo-sphere-viewer");
      const { MarkersPlugin } = await import(
        "photo-sphere-viewer/dist/plugins/markers"
      );

      if (containerRef.current && !viewerRef.current) {
        const viewer = new Viewer({
          container: containerRef.current,
          panorama: "asset/360image-3.jpg",
          caption: "Panorama 360° - Demo",
          loadingTxt: "Memuat panorama...",
          navbar: ["autorotate", "move", "fullscreen"], // 🚫 tanpa zoom
          mousewheel: false,
          defaultZoomLvl: 50,
          minFov: 50,
          maxFov: 50,
          moveSpeed: 1.2,
          plugins: [[MarkersPlugin, { visible: true }]],
        });

        viewerRef.current = viewer;
        const markersPlugin = viewer.getPlugin(MarkersPlugin);

        viewer.once("ready", () => {
          console.log("✅ Panorama siap tanpa zoom & dot interaktif.");

          if (markersPlugin) {
            // Tambahkan dot dengan data lengkap
            markersPlugin.addMarker({
              id: "dot-lampu",
              longitude: -0.6,
              latitude: -0.05,
              html: `
                <div class="dot-wrapper" title="Klik untuk info">
                  <div class="dot-marker"></div>
                  <div class="dot-tooltip">
                    <div class="tooltip-title">Kursi Meja Makan</div>
                    <div class="tooltip-desc">Kursi makan elegan dengan kenyamanan tinggi.<br/>
                  <strong>Material:</strong> Kayu solid mahoni & busa lembut premium.<br/>
                  <strong>Fitur:</strong> Ergonomis, anti gores, dan tahan lama.<br/>
                  Finishing halus dengan warna natural walnut.</div>
                  </div>
                </div>
              `,
              anchor: "center center",
              scale: [1, 1],
            });

            markersPlugin.on("select-marker", (e: any) => {
              if (e?.marker?.id)
                console.log("🟢 Marker diklik:", e.marker.id);
            });
          }
        });
      }
    };

    initViewer();
    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <style>{`
        .dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Dot utama */
        .dot-marker {
          width: 16px;
          height: 16px;
          background: #00bfff;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.6);
          cursor: pointer; /* jadi pointer */
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .dot-marker:hover {
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(0, 191, 255, 0.9);
        }

        /* Tooltip */
        .dot-tooltip {
          display: none;
          position: absolute;
          bottom: 24px; /* posisikan tepat di atas dot */
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
          text-align: center;
          white-space: nowrap;
          min-width: 150px;
          z-index: 100;
          pointer-events: none;
        }

        /* Tooltip muncul saat hover */
        .dot-wrapper:hover .dot-tooltip {
          display: block;
          animation: fadeIn 0.2s ease-in;
        }

        .tooltip-title {
          font-weight: bold;
          margin-bottom: 4px;
        }

        .tooltip-desc {
          font-size: 11px;
          line-height: 1.3;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "500px",
          position: "relative",
          zIndex: 10,
        }}
      />
    </>
  );
}
