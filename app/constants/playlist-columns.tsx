import { GridColDef } from "@mui/x-data-grid";

export const PlaylistColumns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Title',
    width: 550,
  },
  {
    field: 'artist',
    headerName: 'Artist',
    width: 550,
  },
  {
    field: 'album',
    headerName: 'Album',
    width: 550,
  },
];