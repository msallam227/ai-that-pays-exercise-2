"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CheckSquare,
  Users,
  LayoutGrid,
  Wallet,
  Store,
  Gift,
  Globe,
  Music2,
  Crown,
  Heart,
  LogOut,
} from "lucide-react";
import { signOut } from "@/app/actions/auth";

const navGroups = [
  {
    label: "Planning",
    items: [
      { label: "Checklist", href: "/checklist", icon: CheckSquare },
      { label: "Guests", href: "/guests", icon: Users },
      { label: "Seating Chart", href: "/seating-chart", icon: LayoutGrid },
      { label: "Budget", href: "/budget", icon: Wallet },
      { label: "Wedding Vendors", href: "/vendors", icon: Store },
      { label: "Registry", href: "/registry", icon: Gift },
    ],
  },
  {
    label: "Special",
    items: [
      { label: "Wedding Website", href: "/wedding-website", icon: Globe },
      { label: "DJ Dashboard", href: "/dj-dashboard", icon: Music2 },
      { label: "Bride Organization", href: "/bride-organization", icon: Crown },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-[#fdfaf6] border-r border-[#f0e6d8] z-40">

      {/* Brand */}
      <div className="px-6 pt-7 pb-5 border-b border-[#f0e6d8]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#edbdcc] to-[#d4a054] flex items-center justify-center shadow-sm">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className="text-lg font-semibold text-[#3d2c2c] tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Forever Planned
          </span>
        </div>
        <p className="text-xs text-[#a08070] font-light tracking-wider uppercase">
          Sarah &amp; James · June 2026
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5 overflow-y-auto space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c0a090] mb-2 px-2">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 group
                        ${
                          isActive
                            ? "bg-[#faedf1] text-[#c05070] font-medium shadow-sm"
                            : "text-[#7a5c5c] hover:bg-[#fdf6f8] hover:text-[#c05070]"
                        }`}
                    >
                      <Icon
                        className={`w-4 h-4 flex-shrink-0 transition-colors
                          ${isActive ? "text-[#d4708d]" : "text-[#c0a090] group-hover:text-[#d4708d]"}`}
                      />
                      <span>{label}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d4708d]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Countdown footer */}
      <div className="px-6 py-5 border-t border-[#f0e6d8]">
        <div className="bg-gradient-to-r from-[#faedf1] to-[#faf3e4] rounded-xl px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-[#c0a090] mb-1">
            Days Until Your Day
          </p>
          <p
            className="text-2xl font-semibold text-[#c05070]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            247
          </p>
          <p className="text-[11px] text-[#a08070] mt-0.5">June 14, 2026</p>
        </div>

        {/* Sign Out */}
        <form action={signOut}>
          <button
            type="submit"
            className="mt-3 w-full flex items-center gap-2 px-3 py-2 text-sm text-[#7a5c5c] hover:text-[#c05070] transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
