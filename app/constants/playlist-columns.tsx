import { GridColDef } from "@mui/x-data-grid";

export const PlaylistColumns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    sortable: false,
    width: 500,
  },
  {
    field: "artist",
    headerName: "Artist",
    sortable: false,
    width: 500,
  },
  {
    field: "album",
    headerName: "Album",
    sortable: false,
    width: 500,
  },
];
