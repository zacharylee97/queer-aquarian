"use client";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Playlist } from "../../constants/playlist";
import { MobilePlaylistColumns } from "../../constants/playlist-columns";

export default function MobilePlaylistTable() {
  return (
    <Box sx={{ height: "85vh", width: "100%", marginTop: "1.25em" }}>
      <DataGrid
        sx={{
          color: "white",
          [`& .MuiTablePagination-root`]: {
            color: "white",
          },
        }}
        rows={Playlist}
        columns={MobilePlaylistColumns}
        initialState={{
          sorting: {
            sortModel: [{ field: "artist", sort: "asc" }],
          },
          columns: {
            columnVisibilityModel: {
              artist: false,
            },
          },
        }}
        getRowId={(row) => `${row.title} ${row.artist}`}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
