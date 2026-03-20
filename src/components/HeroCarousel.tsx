import { useState, useEffect } from "react";
import { Box, HStack, Image, Text, Button, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import useData from "../hooks/useData";
import type { Game } from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

const HeroCarousel = () => {
  const { data, isLoading, error } = useData<Game>("games", {
    params: { ordering: "-metacritic", page_size: 10 },
  });

  const games = data?.filter(game => game.background_image).slice(0, 5) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!games || games.length === 0 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [games, isHovered]);

  if (error) return null;
  if (isLoading || !games || games.length === 0) return <Box height={{ base: "500px", lg: "700px" }} bg="gray.800" />;

  const game = games[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      position="relative"
      height={{ base: "500px", lg: "700px" }}
      overflow="hidden"
      borderRadius="20px"
      marginBottom="24px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box transition="opacity 0.5s ease" opacity={1} width="100%" height="100%">
        <Image
          src={game.background_image || getCroppedImageUrl("")}
          fallbackSrc={getCroppedImageUrl("")}
          objectFit="cover"
          width="100%"
          height="100%"
          position="absolute"
        />
      </Box>

      <Box
        position="absolute"
        inset={0}
        background="linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.15) 100%)"
      />

      <Box position="absolute" bottom="80px" left={0} padding="40px">
        <Text fontSize="6xl" fontWeight={900} color="white" maxW="600px" lineHeight={1.1}>
          {game.name}
        </Text>
        <HStack gap={3} marginTop={4}>
          <Button variant="outline" borderColor="white" color="white" borderRadius="6px" size="md" _hover={{ bg: "whiteAlpha.200" }}>
            Watch Trailer
          </Button>
          <Button bg="#4ECDC4" color="black" fontWeight="bold" borderRadius="6px" size="md" _hover={{ bg: "#3dbbb2" }}>
            More →
          </Button>
        </HStack>
      </Box>

      <IconButton
        position="absolute"
        left="12px"
        top="40%"
        transform="translateY(-50%)"
        aria-label="Previous slider"
        icon={<ChevronLeftIcon />}
        bg="rgba(0,0,0,0.5)"
        color="white"
        borderRadius="full"
        size="md"
        border="none"
        onClick={handlePrev}
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
      />

      <IconButton
        position="absolute"
        right="12px"
        top="40%"
        transform="translateY(-50%)"
        aria-label="Next slider"
        icon={<ChevronRightIcon />}
        bg="rgba(0,0,0,0.5)"
        color="white"
        borderRadius="full"
        size="md"
        border="none"
        onClick={handleNext}
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
      />

      <Box
        position="absolute"
        bottom="100px"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        gap={2}
      >
        {games.map((_, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            width={index === currentIndex ? "24px" : "8px"}
            height="8px"
            borderRadius={index === currentIndex ? "20px" : "full"}
            bg={index === currentIndex ? "#4ECDC4" : "rgba(255,255,255,0.4)"}
            transition="width 0.3s"
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroCarousel;
