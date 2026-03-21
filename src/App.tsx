import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GenreSelector from "./components/GenreSelector";
import HeroCarousel from "./components/HeroCarousel";
import FeaturedGames from "./components/FeaturedGames";
import Footer from "./components/Footer";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";
import ChatBot from "./components/ChatBot";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <HeroCarousel />
      
      {/* Centered Overlapping Featured Section */}
      <Box px={{ base: 4, md: 8 }}>
        <FeaturedGames />
      </Box>

      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <Flex marginBottom={5} marginTop={5}>
              <Show below="lg">
                <Box marginRight={5}>
                  <GenreSelector
                    selectedGenre={gameQuery.genre}
                    onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                  />
                </Box>
              </Show>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>

            <GameHeading gameQuery={gameQuery} />
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <ChatBot />
      </Grid>
      <Footer />
    </>
  );
}

export default App;
