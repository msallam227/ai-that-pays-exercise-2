export interface Song {
  id: string;
  title: string;
  artist: string;
}

export interface Moment {
  id: string;
  label: string;
  emoji: string;
  description: string;
  isCustom?: boolean;
  songs: Song[];
  playlistName: string;
  djNotes: string;
}
