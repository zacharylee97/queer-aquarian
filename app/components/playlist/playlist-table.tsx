"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PlaylistColumns } from "../../constants/playlist-columns";
import { Playlist } from "../../constants/playlist";

export default function PlaylistTable() {
  return (
    <Box sx={{ height: "631px", width: "100%", marginTop: "1.25em" }}>
      <DataGrid
        sx={{
          color: "white",
          [`& .MuiTablePagination-root`]: {
            color: "white",
          },
        }}
        rows={Playlist}
        columns={PlaylistColumns}
        initialState={{
          sorting: {
            sortModel: [{ field: "artist", sort: "asc" }],
          },
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        getRowId={(row) => `${row.title} ${row.artist}`}
        pageSizeOptions={[10, 25, 50, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
