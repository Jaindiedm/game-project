import { HStack, Image, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import logo from "../assets/gamehub_logo.png"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding="10px" gap={4}>
        <Link to="/">
            <Image src={logo} boxSize="50px" borderRadius={6} objectFit="cover" />
        </Link>
        <SearchInput />
        <Link to="/games">
            <Button colorScheme="teal" variant="outline" whiteSpace="nowrap">Browse Games</Button>
        </Link>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar