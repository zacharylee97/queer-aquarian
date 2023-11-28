'use client';
import { styled, TableCell, tableCellClasses, TableRow, TableContainer, Paper, Table, TableHead, TableBody } from "@mui/material";
import { Playlist } from "../constants/playlist";

export default function PlaylistTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer className="mt-3" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="playlist">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Artist</StyledTableCell>
            <StyledTableCell align="right">Album</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Playlist.map((song) => (
            <StyledTableRow
              key={song.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {song.title}
              </TableCell>
              <TableCell align="right">{song.artist}</TableCell>
              <TableCell align="right">{song.album}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}