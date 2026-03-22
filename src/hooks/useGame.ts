import type { GameQuery } from "../store";
import useData from "./useData";


export interface Platform {
  id: number;
  name: string;
  slug: string;

}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform} [];
  metacritic: number;
  rating_top: number;
  rating?: number;
  released?: string;
  genres?: { name: string }[];
  description_raw?: string;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>("games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }, [gameQuery]);
};


export default useGames;