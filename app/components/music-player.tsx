import { Box, Typography } from "@mui/material";
import dynamic from 'next/dynamic'

const SelectedSong = dynamic(() => import('./selected-song'), {
  loading: () => <p>Loading...</p>,
})

export default function MusicPlayer() {
  return (
    <Box className="m-3">
      <Typography variant="h6">
        <b>
          <u>
            Now Playing
          </u>
          :{" "}
        </b>
        <SelectedSong></SelectedSong>
      </Typography>
    </Box>
  )
}