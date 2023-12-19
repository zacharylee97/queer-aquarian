import { Song } from "../interfaces/song";
import { Kpop } from "./kpop";
import { Pop } from "./pop";

export const Playlist: Song[] = [...Kpop, ...Pop];
