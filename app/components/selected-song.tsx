import { Playlist } from '../constants/playlist';

export default function SelectedSong() {
  const selectedSong = Playlist[Math.floor(Math.random() * Playlist.length)];

  return (
    <i>
      {selectedSong.title} by {selectedSong.artist}
    </i>
  )
}