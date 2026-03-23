import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import useData from "../hooks/useData";
import type { Game } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const TopRatedGames = () => {
  const { data, isLoading, error } = useData<Game>("games", {
    params: { ordering: "-rating", page_size: 10 },
  });

  const headingColor = useColorModeValue("gray.800", "white");
  const scrollbarThumbColor = useColorModeValue("rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.2)");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  if (!isLoading && (!data || data.length === 0)) return null;

  return (
    <Box padding={{ base: "20px", md: "40px" }} mb={10}>
      <Heading as="h2" size="xl" mb={6} color={headingColor}>
        Top Rated Games
      </Heading>
      
      <Box 
        overflowX="auto" 
        pb={4}
        css={{
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: scrollbarThumbColor,
            borderRadius: '4px',
          },
        }}
      >
        <HStack spacing={6} align="stretch" pb={4}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <Box key={skeleton} minW={{ base: "280px", md: "320px" }}>
                <GameCardContainer>
                  <GameCardSkeleton />
                </GameCardContainer>
              </Box>
            ))}
          
          {data?.map((game) => (
            <Box key={game.id} minW={{ base: "280px", md: "320px" }}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default TopRatedGames;
