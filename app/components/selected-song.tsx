'use client'
import { useEffect, useState } from 'react';
import { Playlist } from '../constants/playlist';
import { Song } from '../interfaces/song';
import { Box } from '@mui/material';

export default function SelectedSong() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  useEffect(() => {
    setSelectedSong(Playlist[Math.floor(Math.random() * Playlist.length)]);
  });

  return (
    <Box className="mx-3">
      {selectedSong !== null ?
        <i>
          {selectedSong.title} by {selectedSong.artist}
        </i>
        : <div></div>
      }
    </Box>
  )
}