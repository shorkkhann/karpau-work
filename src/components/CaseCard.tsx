"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

type Case = {
  id: number;
  title: string;
  client: string;
  year: string;
  tag: string[];
  covers: string[];
  caseUrl?: string;
  caseLabel?: string;
};

export default function CaseCard({ item }: { item: Case }) {
  const [coverIndex, setCoverIndex] = useState(0);
  const [clicks, setClicks] = useState(0);

  function handleCoverClick() {
    const nextIndex = (coverIndex + 1) % item.covers.length;
    setCoverIndex(nextIndex);
    setClicks((c) => c + 1);
  }

  const showLink = clicks >= item.covers.length && !!item.caseUrl;

  return (
    <div className="group relative flex flex-col gap-2 rounded-xl border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <div onClick={handleCoverClick} className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 cursor-pointer">
        {item.covers.map((src, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-400 ease-in-out" style={{ opacity: i === coverIndex ? 1 : 0 }}>
            <Image src={src} alt={`${item.title} — cover ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        ))}

        {item.caseUrl && (
          <a href={item.caseUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[5px] transition-opacity duration-400 ease-in-out" style={{ opacity: showLink ? 1 : 0, pointerEvents: showLink ? "auto" : "none" }}>
            <span className="rounded-lg bg-white/90 px-6 py-3 text-sm font-medium text-neutral-900 shadow-lg transition-colors hover:bg-white">
              {item.caseLabel ?? "View Project"}
            </span>
          </a>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{item.title}</span>
        <span className="text-xs text-neutral-400">{item.year}</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-neutral-500">{item.client}</span>
        {item.tag.map((t) => (
          <Fragment key={t}>
            <span className="text-xs text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-xs text-neutral-400">{t}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}