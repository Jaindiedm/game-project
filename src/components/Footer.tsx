import { Box, SimpleGrid, Stack, Text, HStack, Divider, Image, useColorModeValue } from "@chakra-ui/react";
import logo from "../assets/gamehub_logo.png";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.400");
  const headingColor = useColorModeValue("gray.900", "white");
  const dividerColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Box bg={bg} color={textColor} mt={20} py={10} px={{ base: 6, md: 10 }}>
      <SimpleGrid columns={1} spacing={10} mb={10} maxW="1200px" mx="auto">
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
      </SimpleGrid>

      <Divider borderColor={dividerColor} mb={6} />

      <Text fontSize="sm" textAlign="center">
        © {new Date().getFullYear()} Game Hub. All rights reserved. Powered by RAWG.
      </Text>
    </Box>
  );
};

export default Footer;
