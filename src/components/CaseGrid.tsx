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