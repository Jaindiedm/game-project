import { Box, Image, Text, HStack, Button, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import useData from "../hooks/useData";
import type { Game } from "../hooks/useGame";

const FeaturedGames = () => {
  const { data: games, isLoading, error } = useData<Game>("games", {
    params: { ordering: "-metacritic", page_size: 4 },
  });

  if (error) return null;
  if (isLoading || !games || games.length === 0) return null;

  return (
    <Box 
      width="100%" 
      maxW="1200px" 
      mx="auto" 
      mt={{ base: "-40px", md: "-100px" }} 
      position="relative" 
      zIndex={2} 
      bg="#151515" 
      borderRadius="24px" 
      padding={{ base: "20px", md: "40px" }} 
      mb={10}
      boxShadow="0 -10px 40px rgba(0,0,0,0.5)"
    >
      {games.map((game, index) => {
        const isOdd = index % 2 !== 0;
        const rating = Math.round(game.rating || 0);
        const description = game.description_raw || `Swing into action and face the greatest challenges yet in a thrilling battle to save the world. Developed by top-tier studios, this sequel brings intense dynamics, engaging combat, and an emotional story that pushes heroes to their limits.`;

        const imageBox = (
          <Box flex="3" height={{ base: "200px", md: "280px" }} overflow="hidden" borderRadius="16px">
            <Image
              src={game.background_image}
              alt={game.name}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
              style={{ display: "block", cursor: "pointer" }}
            />
          </Box>
        );

        const textBox = (
          <Box
            flex="2"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontSize="lg" color="gray.400" mb={1}>
              {game.genres?.[0]?.name || "Featured Title"}
            </Text>
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white" lineHeight={1.1} mb={4}>
              {game.name}
            </Text>
            <Text fontSize="sm" color="gray.300" noOfLines={4} lineHeight={1.6}>
              {description}
            </Text>
            
            <HStack mt={8} justify="space-between" align="flex-end">
              <Button size="sm" variant="outline" borderColor="#4ECDC4" color="#4ECDC4" _hover={{ bg: "rgba(78, 205, 196, 0.1)" }}>
                More
              </Button>
              <VStack align="flex-end" spacing={0}>
                <Text fontSize="xs" color="gray.400">1 year</Text>
                <HStack spacing="2px" my={1}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} color={star <= rating ? "yellow.400" : "gray.600"} boxSize="10px" />
                  ))}
                </HStack>
                <Text fontSize="xs" color="gray.500">({game.metacritic || 85})</Text>
              </VStack>
            </HStack>
          </Box>
        );

        return (
          <Box
            key={game.id}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "40px" }}
            mb={index === games.length - 1 ? 0 : { base: 10, md: 16 }}
          >
            {isOdd ? (
              <>
                {textBox}
                {imageBox}
              </>
            ) : (
              <>
                {imageBox}
                {textBox}
              </>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default FeaturedGames;
