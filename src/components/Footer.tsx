import { Box, SimpleGrid, Stack, Text, HStack, IconButton, Divider, Image, useColorModeValue } from "@chakra-ui/react";
import { BsTwitter, BsGithub, BsDiscord, BsYoutube } from "react-icons/bs";
import logo from "../assets/gamehub_logo.png";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");
  const linkHoverColor = useColorModeValue("gray.900", "white");
  const dividerColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Box bg={bg} color={textColor} mt={20} py={10} px={{ base: 6, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mb={10} maxW="1200px" mx="auto">
        <Stack spacing={6}>
          <HStack>
            <Image src={logo} boxSize="40px" objectFit="contain" />
            <Text fontSize="2xl" fontWeight="900" color={headingColor} letterSpacing="tight">
              Game<Text as="span" color="#4ECDC4">Hub</Text>
            </Text>
          </HStack>
          <Text fontSize="sm" lineHeight={1.6}>
            Your ultimate destination for discovering, tracking, and exploring the best games across all platforms. Level up your gaming experience.
          </Text>
        </Stack>

        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={2}>Explore</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Top Rated</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>New Releases</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Upcoming Games</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Genres & Categories</Text>
        </Stack>

        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={2}>Platforms</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>PC Master Race</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>PlayStation 5</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Xbox Series X</Text>
          <Text as="a" href="#" fontSize="sm" cursor="pointer" _hover={{ color: linkHoverColor, textDecoration: "underline" }}>Nintendo Switch</Text>
        </Stack>

        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={2}>Community</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Twitter" icon={<BsTwitter />} size="md" variant="ghost" colorScheme="gray" borderRadius="full" />
            <IconButton aria-label="Discord" icon={<BsDiscord />} size="md" variant="ghost" colorScheme="gray" borderRadius="full" />
            <IconButton aria-label="YouTube" icon={<BsYoutube />} size="md" variant="ghost" colorScheme="gray" borderRadius="full" />
            <IconButton aria-label="GitHub" icon={<BsGithub />} size="md" variant="ghost" colorScheme="gray" borderRadius="full" />
          </HStack>
        </Stack>
      </SimpleGrid>

      <Divider borderColor={dividerColor} mb={6} />

      <Text fontSize="sm" textAlign="center">
        © {new Date().getFullYear()} Game Hub. All rights reserved. Powered by RAWG.
      </Text>
    </Box>
  );
};

export default Footer;
