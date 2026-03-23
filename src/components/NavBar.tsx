import { HStack, Image, Button, Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "../assets/gamehub_logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding={{ base: "10px 16px", md: "15px 32px" }} justifyContent="space-between" width="100%">
        <Link to="/">
            <HStack>
                <Image src={logo} boxSize={{ base: "40px", md: "50px" }} borderRadius={6} objectFit="contain" />
                <Text fontSize="2xl" fontWeight="900" letterSpacing="tight" display={{ base: "none", md: "block" }}>
                  Game<Text as="span" color="#4ECDC4">Hub</Text>
                </Text>
            </HStack>
        </Link>
        <Box flex={1} px={{ base: 2, md: 8 }} display="flex" justifyContent="center">
            <SearchInput />
        </Box>
        <HStack gap={{ base: 2, md: 4 }}>
            <Link to="/games">
                <Button flexShrink={0} bg="#4ECDC4" color="black" fontWeight="bold" borderRadius="8px" size={{ base: "sm", md: "md" }} _hover={{ bg: "#3dbbb2" }}>
                    Browse
                    <Text as="span" display={{ base: "none", md: "inline" }} ml={1}>Games</Text>
                </Button>
            </Link>
            <ColorModeSwitch />
        </HStack>
    </HStack>
  )
}

export default NavBar