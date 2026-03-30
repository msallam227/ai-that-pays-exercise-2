"use client";

import { useState } from "react";
import {
  ChevronDown,
  Music2,
  ListMusic,
  StickyNote,
  Plus,
  Trash2,
  GripVertical,
} from "lucide-react";
import type { Moment, Song } from "@/types/dj";

interface Props {
  moment: Moment;
  index: number;
  onUpdate: (updated: Moment) => void;
}

export default function MomentCard({ moment, index, onUpdate }: Props) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"songs" | "playlist" | "notes">("songs");

  const addSong = (song: Song) =>
    onUpdate({ ...moment, songs: [...moment.songs, song] });

  const removeSong = (id: string) =>
    onUpdate({ ...moment, songs: moment.songs.filter((s) => s.id !== id) });

  const updatePlaylistName = (name: string) =>
    onUpdate({ ...moment, playlistName: name });

  const updateNotes = (notes: string) =>
    onUpdate({ ...moment, djNotes: notes });

  const tabs = [
    { key: "songs" as const, label: "Songs", icon: Music2 },
    { key: "playlist" as const, label: "Playlist", icon: ListMusic },
    { key: "notes" as const, label: "DJ Notes", icon: StickyNote },
  ];

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden
        ${
          open
            ? "border-[#edbdcc] shadow-md shadow-[#f5d9e3]/40 bg-white"
            : "border-[#f0e6d8] bg-white hover:border-[#edbdcc] hover:shadow-sm"
        }`}
    >
      {/* Card Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
      >
        <GripVertical className="w-4 h-4 text-[#d4c4bc] flex-shrink-0 cursor-grab" />

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="w-7 h-7 rounded-full bg-[#faf3e4] flex items-center justify-center text-[11px] font-semibold text-[#b8852e]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xl">{moment.emoji}</span>
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold text-[#3d2c2c] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {moment.label}
          </p>
          <p className="text-xs text-[#a08070] mt-0.5 truncate">{moment.description}</p>
        </div>

        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          {moment.songs.length > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-[#faedf1] text-[#c05070] text-[10px] font-medium">
              {moment.songs.length} song{moment.songs.length !== 1 ? "s" : ""}
            </span>
          )}
          {moment.djNotes && (
            <span className="px-2 py-0.5 rounded-full bg-[#faf3e4] text-[#b8852e] text-[10px] font-medium">
              Note
            </span>
          )}
          {moment.isCustom && (
            <span className="px-2 py-0.5 rounded-full bg-[#e8f0e8] text-[#447044] text-[10px] font-medium">
              Custom
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[#c0a090] flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded body */}
      {open && (
        <div className="border-t border-[#f5eee8]">
          {/* Tabs */}
          <div className="flex gap-1 px-5 pt-4 pb-0">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-xs font-medium transition-colors
                  ${
                    activeTab === key
                      ? "bg-[#fdf6f8] text-[#c05070] border border-b-0 border-[#f5d9e3]"
                      : "text-[#a08070] hover:text-[#c05070] hover:bg-[#fdf6f8]/60"
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="px-5 py-5 bg-[#fdf6f8]/40 border-t border-[#f5d9e3]">
            {activeTab === "songs" && (
              <SongsTab songs={moment.songs} onAdd={addSong} onRemove={removeSong} />
            )}
            {activeTab === "playlist" && (
              <PlaylistTab
                songs={moment.songs}
                playlistName={moment.playlistName}
                onUpdateName={updatePlaylistName}
              />
            )}
            {activeTab === "notes" && (
              <NotesTab notes={moment.djNotes} onUpdate={updateNotes} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Songs Tab ── */

function SongsTab({
  songs,
  onAdd,
  onRemove,
}: {
  songs: Song[];
  onAdd: (song: Song) => void;
  onRemove: (id: string) => void;
}) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Song title is required.");
      return;
    }
    onAdd({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title: title.trim(),
      artist: artist.trim(),
    });
    setTitle("");
    setArtist("");
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="space-y-3">
      {/* Song list */}
      {songs.length > 0 ? (
        <ul className="space-y-2">
          {songs.map((song, i) => (
            <li
              key={song.id}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border border-[#f0e6d8] group"
            >
              <span className="text-[11px] font-semibold text-[#d4a054] w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#3d2c2c] truncate">{song.title}</p>
                {song.artist && (
                  <p className="text-[11px] text-[#a08070] truncate">{song.artist}</p>
                )}
              </div>
              <button
                onClick={() => onRemove(song.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg hover:bg-[#faedf1] text-[#d4b8c0] hover:text-[#c05070]"
                aria-label="Remove song"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center py-7 rounded-xl border border-dashed border-[#edbdcc] bg-white/60">
          <Music2 className="w-7 h-7 text-[#edbdcc] mb-2" />
          <p className="text-xs text-[#c0a090]">No songs added yet</p>
        </div>
      )}

      {/* Add song form */}
      <div className="rounded-xl border border-[#f0e6d8] bg-white p-3 space-y-2">
        <p className="text-[11px] font-medium text-[#a08070] uppercase tracking-wider">
          Add a song
        </p>
        <input
          type="text"
          placeholder="Song title *"
          value={title}
          onChange={(e) => { setTitle(e.target.value); setError(""); }}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 rounded-lg border border-[#f0e6d8] bg-[#fdfaf6] text-xs text-[#3d2c2c] placeholder:text-[#c0a090] focus:outline-none focus:border-[#edbdcc] focus:ring-1 focus:ring-[#edbdcc]/30"
        />
        <input
          type="text"
          placeholder="Artist (optional)"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 rounded-lg border border-[#f0e6d8] bg-[#fdfaf6] text-xs text-[#3d2c2c] placeholder:text-[#c0a090] focus:outline-none focus:border-[#edbdcc] focus:ring-1 focus:ring-[#edbdcc]/30"
        />
        {error && <p className="text-[11px] text-[#c05070]">{error}</p>}
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#faedf1] hover:bg-[#f5d9e3] text-[#c05070] text-xs font-medium transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Song
        </button>
      </div>
    </div>
  );
}

/* ── Playlist Tab ── */

function PlaylistTab({
  songs,
  playlistName,
  onUpdateName,
}: {
  songs: Song[];
  playlistName: string;
  onUpdateName: (name: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[11px] font-medium text-[#a08070] uppercase tracking-wider mb-1.5">
          Playlist Name
        </label>
        <input
          type="text"
          placeholder='e.g. "Ceremony Vibes"'
          value={playlistName}
          onChange={(e) => onUpdateName(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-[#f0e6d8] bg-white text-xs text-[#3d2c2c] placeholder:text-[#c0a090] focus:outline-none focus:border-[#edbdcc] focus:ring-1 focus:ring-[#edbdcc]/30"
        />
      </div>

      <div>
        <p className="text-[11px] font-medium text-[#a08070] uppercase tracking-wider mb-2">
          Tracklist
        </p>
        {songs.length > 0 ? (
          <ul className="space-y-1.5">
            {songs.map((song, i) => (
              <li
                key={song.id}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white border border-[#f0e6d8]"
              >
                <span className="text-[11px] font-semibold text-[#d4a054] w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[#3d2c2c] truncate">{song.title}</p>
                  {song.artist && (
                    <p className="text-[11px] text-[#a08070] truncate">{song.artist}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 rounded-xl border border-dashed border-[#edbdcc] bg-white/60">
            <ListMusic className="w-6 h-6 text-[#edbdcc] mb-1.5" />
            <p className="text-xs text-[#c0a090]">Add songs in the Songs tab</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Notes Tab ── */

function NotesTab({
  notes,
  onUpdate,
}: {
  notes: string;
  onUpdate: (notes: string) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-medium text-[#a08070] uppercase tracking-wider">
          Notes for DJ
        </label>
        <span className="text-[11px] text-[#c0a090]">{notes.length} chars</span>
      </div>
      <textarea
        placeholder={'e.g. "Fade in slowly", "Wait for cue from officiant"'}
        value={notes}
        onChange={(e) => onUpdate(e.target.value)}
        rows={4}
        className="w-full px-3 py-3 rounded-xl border border-[#f0e6d8] bg-white text-xs text-[#3d2c2c] placeholder:text-[#c0a090] focus:outline-none focus:border-[#edbdcc] focus:ring-1 focus:ring-[#edbdcc]/30 resize-none leading-relaxed"
      />
      {notes && (
        <p className="text-[11px] text-[#5c8f5c] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5c8f5c] inline-block" />
          Note saved
        </p>
      )}
    </div>
  );
}
