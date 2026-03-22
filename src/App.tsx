import { Box } from "@chakra-ui/react";
import HeroCarousel from "./components/HeroCarousel";
import FeaturedGames from "./components/FeaturedGames";
import Footer from "./components/Footer";
import "./index.css";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <HeroCarousel />
      
      {/* Centered Overlapping Featured Section */}
      <Box px={{ base: 4, md: 8 }}>
        <FeaturedGames />
      </Box>

      <ChatBot />
      <Footer />
    </>
  );
}

export default App;

