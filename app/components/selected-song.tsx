'use client'
import { useEffect, useState } from 'react';
import { Playlist } from '../constants/playlist';
import { Song } from '../interfaces/song';
import { Typography } from '@mui/material';

export default function SelectedSong() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  useEffect(() => {
    setSelectedSong(Playlist[Math.floor(Math.random() * Playlist.length)]);
  });

  return (
    <Typography className="ml-1" variant="h6">
      {selectedSong !== null ?
        <i>
          {selectedSong.title} by {selectedSong.artist}
        </i>
        : <div></div>
      }
    </Typography>
  )
}