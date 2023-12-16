"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Playlist } from "../constants/playlist";

const MobilePlaylistColumns: GridColDef[] = [
  {
    field: "song",
    headerName: "Song",
    valueGetter: (params) => `${params.row.title} by ${params.row.artist}`,
    width: 500,
  },
  {
    field: "artist",
    headerName: "Artist",
    width: 500,
  },
];

export default function MobilePlaylistTable() {
  return (
    <Box sx={{ height: "max-content", width: "100%", marginTop: "1.25em" }}>
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
