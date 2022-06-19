import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { StyledGame } from './styles'

export const Game = () => {
  return (
    <StyledGame>
      <Link to={`/game/1`}>
        <motion.h3 layoutId={`title Vampire: The Masquerade - Bloodlines 2`}>
          Vampire: The Masquerade - Bloodlines 2
        </motion.h3>
        <p>2022-12-31</p>
        <motion.img
          layoutId={`image Vampire: The Masquerade - Bloodlines 2`}
          src={`https://media.rawg.io/media/resize/640/-/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg`}
          alt="Vampire: The Masquerade - Bloodlines 2"
        />
      </Link>
    </StyledGame>
  )
}
