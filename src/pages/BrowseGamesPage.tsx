import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import Footer from "../components/Footer";
import useGameQueryStore from "../store";

const BrowseGamesPage = () => {
  const { gameQuery, setGenre, setPlatform, setSortOrder } = useGameQueryStore();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        mt={10}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={setGenre}
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
                    onSelectGenre={setGenre}
                  />
                </Box>
              </Show>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={setPlatform}
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={setSortOrder}
              />
            </Flex>

            <GameHeading gameQuery={gameQuery} />
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default BrowseGamesPage;
