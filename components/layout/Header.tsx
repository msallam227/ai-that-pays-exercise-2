"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, Settings } from "lucide-react";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/checklist": { title: "Checklist", subtitle: "Track every detail of your perfect day" },
  "/guests": { title: "Guests", subtitle: "Manage your guest list & RSVPs" },
  "/seating-chart": { title: "Seating Chart", subtitle: "Arrange your reception tables" },
  "/budget": { title: "Budget", subtitle: "Keep your wedding finances in check" },
  "/vendors": { title: "Wedding Vendors", subtitle: "Manage your vendor contacts & contracts" },
  "/registry": { title: "Registry", subtitle: "Build your dream gift registry" },
  "/wedding-website": { title: "Wedding Website", subtitle: "Your personal wedding page" },
  "/dj-dashboard": { title: "DJ Dashboard", subtitle: "Music, playlists & do-not-play list" },
  "/bride-organization": { title: "Bride Organization", subtitle: "Your personal bridal command center" },
};

export default function Header() {
  const pathname = usePathname();
  const page = pageTitles[pathname] ?? { title: "Dashboard", subtitle: "Welcome back" };

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-[#fdfaf6]/80 backdrop-blur-sm border-b border-[#f0e6d8] sticky top-0 z-30">
      {/* Page title */}
      <div>
        <h1
          className="text-xl font-semibold text-[#3d2c2c] leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {page.title}
        </h1>
        <p className="text-xs text-[#a08070] font-light">{page.subtitle}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#a08070] bg-[#faf3e4] hover:bg-[#f5e8d4] rounded-xl transition-colors">
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline text-xs">Search…</span>
        </button>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[#faf3e4] hover:bg-[#f5e8d4] text-[#a08070] transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#d4708d] border-2 border-[#fdfaf6]" />
        </button>

        {/* Settings */}
        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#faf3e4] hover:bg-[#f5e8d4] text-[#a08070] transition-colors">
          <Settings className="w-4 h-4" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#edbdcc] to-[#e0b978] flex items-center justify-center shadow-sm ml-1">
          <span
            className="text-sm font-semibold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            S
          </span>
        </div>
      </div>
    </header>
  );
}
