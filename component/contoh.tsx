import HeroSpotlight from "./heroFocusMaterial";

const materials = [
  {
    name: "Kayu",
    thumbnail: "asset/kayu.jpg",
    focusBox: { x: 15, y: 50, width: 25, height: 15 },
  },
  {
    name: "Marmer",
    thumbnail: "asset/marmer.jpg",
    focusBox: { x: 40, y: 40, width: 30, height: 20 },
  },
  {
    name: "Besi",
    thumbnail: "asset/besi.jpg",
    focusBox: { x: 70, y: 70, width: 35, height: 15 },
  },
];

export default function KitchenPage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Dapur Material Viewer</h1>
      <HeroSpotlight
        heroImage="asset/dapur.jpg"
        materials={materials}
      />
    </div>
  );
}
