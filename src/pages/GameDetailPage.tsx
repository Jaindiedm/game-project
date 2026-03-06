import { useParams, Link } from "react-router-dom";
import { Heading, Text, Spinner, Box, Button, Image } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import getCroppedImageUrl from "../services/image-url";

const GameDetailPage = () => {
    const { id } = useParams();
    const { data: game, isLoading, error } = useGameDetails(id);

    if (isLoading) return <Spinner mt={4} />;
    if (error || !game) return <Text mt={4}>Failed to load game details.</Text>;

    return (
        <Box padding={5}>
            <Link to="/">
                <Button mb={5}>&larr; Back to Games</Button>
            </Link>
            <Heading>{game.name}</Heading>
            <Image src={getCroppedImageUrl(game.background_image)} borderRadius={10} my={5} maxH="400px" objectFit="cover" />
            <Text mt={4}>{game.description_raw}</Text>
            {game.website && (
                <Button mt={5} as="a" href={game.website} target="_blank" colorScheme="blue">
                    Visit Official Website
                </Button>
            )}
        </Box>
    );
};

export default GameDetailPage;
