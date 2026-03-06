import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import type { Platform } from "../hooks/useGame"

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props ) => {
    const {data, error, isLoading} = usePlatforms();

    if (error) return null;
    if (isLoading) return <Button isDisabled>Loading platforms...</Button>;
    if (!data || data.length === 0) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector