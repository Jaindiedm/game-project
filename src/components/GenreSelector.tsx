import { Button, Menu, MenuButton, MenuItem, MenuList, Image, HStack } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, error } = useGenres();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedGenre?.name || "Genres"}
            </MenuButton>
            <MenuList overflowY="auto" maxHeight="60vh">
                {data.map((genre) => (
                    <MenuItem
                        key={genre.id}
                        onClick={() => onSelectGenre(genre)}
                    >
                        <HStack>
                            <Image
                                boxSize="24px"
                                borderRadius={6}
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <span>{genre.name}</span>
                        </HStack>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default GenreSelector;
