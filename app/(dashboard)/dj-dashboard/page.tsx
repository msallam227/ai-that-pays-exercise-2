"use client";

import { useState } from "react";
import { Music2, ListMusic, StickyNote, Plus, Disc3 } from "lucide-react";
import { DEFAULT_MOMENTS } from "@/lib/dj-moments";
import MomentCard from "@/components/dj/MomentCard";
import type { Moment } from "@/types/dj";

export default function DJDashboardPage() {
  const [moments, setMoments] = useState<Moment[]>(DEFAULT_MOMENTS);

  const updateMoment = (updated: Moment) =>
    setMoments((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));

  const totalSongs = moments.reduce((sum, m) => sum + m.songs.length, 0);
  const momentsWithNotes = moments.filter((m) => m.djNotes.trim()).length;
  const momentsConfigured = moments.filter((m) => m.songs.length > 0).length;

  return (
    <div className="max-w-3xl mx-auto space-y-7">

      {/* Page intro */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className="text-2xl font-semibold text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Music Timeline
          </h2>
          <p className="text-sm text-[#a08070] mt-1">
            Curate the perfect soundtrack for every moment of your wedding day.
          </p>
        </div>

        {/* Add custom moment — Phase 3 */}
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#faedf1] text-[#d4708d] text-sm font-medium cursor-not-allowed opacity-60 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          Custom Moment
        </button>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          icon={<Disc3 className="w-5 h-5 text-[#d4708d]" />}
          value={String(totalSongs)}
          label="Songs Added"
          bg="bg-[#faedf1]"
        />
        <StatCard
          icon={<ListMusic className="w-5 h-5 text-[#b8852e]" />}
          value={`${momentsConfigured} / ${moments.length}`}
          label="Moments Filled"
          bg="bg-[#faf3e4]"
        />
        <StatCard
          icon={<StickyNote className="w-5 h-5 text-[#5c8f5c]" />}
          value={String(momentsWithNotes)}
          label="DJ Notes"
          bg="bg-[#e8f0e8]"
        />
      </div>

      {/* DJ info banner */}
      <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#faf3e4] to-[#fdf6f8] border border-[#f0e6d8]">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e0b978] to-[#d4708d] flex items-center justify-center flex-shrink-0 shadow-sm">
          <Music2 className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            DJ: Marcus Lee
          </p>
          <p className="text-xs text-[#a08070] truncate">
            marcuslee@djpro.com · +1 (555) 849-2210
          </p>
        </div>
        <button
          disabled
          className="text-xs text-[#c0a090] border border-[#f0e6d8] px-3 py-1.5 rounded-lg cursor-not-allowed opacity-60"
        >
          Edit
        </button>
      </div>

      {/* Moments list */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c0a090]">
            Wedding Moments · {moments.length}
          </p>
          <p className="text-[11px] text-[#c0a090]">Click a moment to expand</p>
        </div>

        <div className="space-y-3">
          {moments.map((moment, i) => (
            <MomentCard
              key={moment.id}
              moment={moment}
              index={i}
              onUpdate={updateMoment}
            />
          ))}
        </div>
      </div>

      {/* Add custom moment — bottom CTA (Phase 3) */}
      <button
        disabled
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-dashed border-[#edbdcc] text-[#d4b8c0] text-sm cursor-not-allowed"
      >
        <Plus className="w-4 h-4" />
        Add a custom moment — available in Phase 3
      </button>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  bg,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  bg: string;
}) {
  return (
    <div className={`${bg} rounded-2xl px-4 py-4 flex items-center gap-3`}>
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p
          className="text-xl font-semibold text-[#3d2c2c] leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {value}
        </p>
        <p className="text-[11px] text-[#a08070]">{label}</p>
      </div>
    </div>
  );
}
