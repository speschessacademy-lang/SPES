"use client";

import { useMemo, useState } from "react";
import achievementsDoc from "@/content/achievements.json";

type AchievementItem = {
  src: string;
  alt?: string;
};

export default function AchievementsSection() {
  const items = useMemo<AchievementItem[]>(
    () => ((achievementsDoc as { items: AchievementItem[] }).items ?? []),
    []
  );
  const INITIAL_VISIBLE = 10;
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems = useMemo(
    () => (showAll ? items : items.slice(0, INITIAL_VISIBLE)),
    [items, showAll]
  );
  const hasMore = items.length > INITIAL_VISIBLE && !showAll;

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const go = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + items.length) % items.length;
    setLightboxIndex(next);
  };

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold text-[#7F55B1] mb-2">OUR JOURNEY</div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">Achievements</h2>
          <p className="text-[#6E5A8E] max-w-3xl mx-auto">Highlights from tournaments, training camps, and proud moments.</p>
        </div>

        {visibleItems.length > 0 ? (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 [column-fill:_balance]">
            {visibleItems.map((item, idx) => (
              <button
                key={idx}
                className="mb-4 w-full overflow-hidden rounded-xl border border-[#EADFF3] bg-white focus:outline-none focus:ring-2 focus:ring-[#9B7EBD]"
                onClick={() => openLightbox(idx)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt || `Achievement ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02] break-inside-avoid"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center text-[#6E5A8E]">Add images via the admin to populate this gallery.</div>
        )}

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center rounded-full border border-[#7F55B1] px-6 py-3 text-[#7F55B1] font-semibold hover:bg-[#7F55B1] hover:text-white transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-[92vw]" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[lightboxIndex].src}
              alt={items[lightboxIndex].alt || `Achievement ${lightboxIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 shadow-md"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={() => go(-1)}
              className="absolute top-1/2 -translate-y-1/2 -left-3 bg-white/90 text-black rounded-full w-10 h-10 shadow-md"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              className="absolute top-1/2 -translate-y-1/2 -right-3 bg-white/90 text-black rounded-full w-10 h-10 shadow-md"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


