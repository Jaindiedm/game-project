import { useParams, Link } from "react-router-dom";
import { Heading, Text, Spinner, Box, Button, Image, Flex, Container, Badge, SimpleGrid } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";


const GameDetailPage = () => {
    const { id } = useParams();
    const { data: game, isLoading, error } = useGameDetails(id);

    if (isLoading) return (
        <Flex justify="center" align="center" minH="50vh">
            <Spinner size="xl" />
        </Flex>
    );
    if (error || !game) return <Text mt={4} textAlign="center">Failed to load game details.</Text>;

    return (
        <Box w="100%" minH="100vh">
            {/* Hero Banner Section */}
            <Box position="relative" w="100%" h={{ base: "60vh", md: "85vh" }} overflow="hidden">
                <Image 
                    src={game.background_image} 
                    w="100%" 
                    h="100%" 
                    objectFit="cover" 
                    alt={game.name}
                />
                <Box 
                    position="absolute" 
                    top={0} left={0} right={0} bottom={0} 
                    bgGradient="linear(to-b, blackAlpha.700 0%, transparent 40%, blackAlpha.900 100%)" 
                />
                
                {/* Back Button positioned over the banner */}
                <Box position="absolute" top={5} left={{ base: 4, md: 8 }} zIndex={10}>
                    <Link to="/">
                        <Button 
                            variant="solid" 
                            colorScheme="whiteAlpha" 
                            bg="whiteAlpha.200"
                            _hover={{ bg: "whiteAlpha.400" }}
                            backdropFilter="blur(10px)"
                        >
                            &larr; Back to Games
                        </Button>
                    </Link>
                </Box>

                {/* Game Title on the Banner */}
                <Flex 
                    position="absolute" 
                    bottom={0} left={0} right={0} 
                    px={{ base: 4, md: 8 }} 
                    pb={8} 
                    direction="column" 
                    align="flex-start"
                >
                    <Heading size="3xl" color="white" mb={2} textShadow="2px 2px 8px rgba(0,0,0,0.8)">
                        {game.name}
                    </Heading>
                    <Flex gap={3} flexWrap="wrap">
                        {game.parent_platforms?.map(({ platform }) => (
                            <Badge key={platform.id} colorScheme="gray" px={2} py={1} borderRadius="md" opacity={0.8}>
                                {platform.name}
                            </Badge>
                        ))}
                    </Flex>
                </Flex>
            </Box>

            {/* Content Section */}
            <Container maxW="container.xl" py={10}>
                <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
                    {/* Main Description */}
                    <Box gridColumn={{ lg: "span 2" }}>
                        <Heading size="lg" mb={4}>About</Heading>
                        <Text fontSize="lg" lineHeight="1.8" color="gray.300">
                            {game.description_raw || "No description available."}
                        </Text>
                    </Box>

                    {/* Meta Information / Sidebar */}
                    <Box bg="gray.800" p={6} borderRadius="xl" border="1px solid" borderColor="gray.700" h="fit-content">
                        <SimpleGrid columns={2} spacing={4}>
                            <Box>
                                <Text color="gray.500" fontWeight="bold" mb={1}>Metacritic</Text>
                                <Badge colorScheme={game.metacritic > 75 ? 'green' : game.metacritic > 60 ? 'yellow' : 'red'} fontSize="md" px={2} borderRadius="md">
                                    {game.metacritic || 'N/A'}
                                </Badge>
                            </Box>
                            <Box>
                                <Text color="gray.500" fontWeight="bold" mb={1}>Rating</Text>
                                <Text fontWeight="bold" fontSize="lg">{game.rating_top ? `${game.rating} / ${game.rating_top}` : 'N/A'}</Text>
                            </Box>
                            <Box>
                                <Text color="gray.500" fontWeight="bold" mb={1}>Released</Text>
                                <Text fontWeight="bold">{game.released || 'Unknown'}</Text>
                            </Box>
                            <Box>
                                <Text color="gray.500" fontWeight="bold" mb={1}>Genres</Text>
                                <Text fontWeight="bold">
                                    {game.genres?.map(g => g.name).join(', ') || 'None'}
                                </Text>
                            </Box>
                        </SimpleGrid>

                        {game.website && (
                            <Button 
                                as="a" 
                                href={game.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                colorScheme="blue" 
                                size="lg"
                                w="100%"
                                mt={8}
                                _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                                transition="all 0.2s"
                            >
                                Visit Official Website
                            </Button>
                        )}
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default GameDetailPage;
