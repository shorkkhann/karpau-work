const skills = ["Blender", "After Effects", "Substance Painter", "Unity", "Premiere Pro", "DaVinci Resolve", "Photoshop", "Illustrator", "Figma", "Python", "Three JS"];

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">About</h2>

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">I'm Maksim Karpau, a professional 3D Motion Designer specializing in creating compelling visuals using Blender and Adobe After Effects. I have over 5 years of experience in creating high-quality digital content for brands, startups, and creative agencies. I focus on product animation, video explainers, and motion graphics for marketing campaigns.</p>

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">Beyond creative execution, I develop custom automation pipelines using Python and Blender API, and handle 3D web integrations through interactive Three.js workflows.</p>

      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Tools</span>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-md border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}