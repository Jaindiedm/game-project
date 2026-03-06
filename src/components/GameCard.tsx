import { Card, HStack, Image } from "@chakra-ui/react"
import type { Game } from "../hooks/useGame"
import { CardBody, Heading } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.id}`}>
      <Card _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in' }} cursor="pointer">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
        </CardBody>
      </Card>
    </Link>
  )
}

export default GameCard;