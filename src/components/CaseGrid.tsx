import CaseCard from "@/components/CaseCard";

const cases = [
  { id: 1, 
    title: "Sports Memorabilia", 
    client: "Top Tier Authentics",
    year: "2024",
    tag: ["3D", "Motion", "Automation"],
    covers: ["/cases/01/cover.jpg", "/cases/01/cover_2.jpg", "/cases/01/cover_3.jpg"],
    caseUrl: "https://behance.net/shorkkhann",
    caseLabel:"View on Behance" },
  
    { id: 2,
    title: "Modern Tech Aesthetic",
    client: "Digital Product",
    year: "2026",
    tag: ["3D", "Motion"],
    covers: ["/cases/02/cover.jpg", "/cases/02/cover_2.jpg", "/cases/02/cover_3.jpg", "/cases/02/cover_4.jpg"],
    caseUrl: "https://shorkkhann.gumroad.com/",
    caseLabel:"View on Gumroad" },
    
    { id: 3,
    title: "SI Pro Picks Motion Assets",
    client: "Sports Illustrated",
    year: "2025",
    tag: ["3D", "Motion"],
    covers: ["/cases/02/cover.jpg", "/cases/02/cover_2.jpg", "/cases/02/cover_3.jpg", "/cases/02/cover_4.jpg"]},

    { id: 4,
    title: "Sci-Fi Dragonfly Cinematic",
    client: "Personal Project",
    year: "2022",
    tag: ["3D", "Motion"],
    covers: ["/cases/04/cover.webp", "/cases/04/cover_2.webp", "/cases/04/cover_3.webp", "/cases/04/cover_4.webp"],
    caseUrl: "https://www.behance.net/gallery/140895233/Sci-Fi-Robotic-DragonFly",
    caseLabel:"View on Behance" },

    { id: 5,
    title: "Authenticity Certificate Explainer",
    client: "Studio Auctions",
    year: "2025",
    tag: ["3D", "Motion"],
    covers: ["/cases/05/cover.webp", "/cases/05/cover_2.webp", "/cases/05/cover_3.webp", "/cases/05/cover_4.webp"],},

    { id: 6,
    title: "Drift 3.0",
    client: "NFT Race Crew",
    year: "2022",
    tag: ["3D", "Motion"],
    covers: ["/cases/06/cover.webp", "/cases/06/cover_2.webp", "/cases/06/cover_3.webp", "/cases/06/cover_4.webp", "/cases/06/cover_5.webp"],
    caseUrl: "https://www.behance.net/gallery/156317255/NFT-Drift-Cars-Animation",
    caseLabel:"View on Behance" },
];

export default function CaseGrid() {
  return (
    <section id="work" className="flex flex-col gap-6">
      <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">Work</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {cases.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}