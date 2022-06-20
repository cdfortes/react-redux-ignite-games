import { Game } from '../components/Game'
import { GameList, Games } from './styles'

export default function Home() {
  return (
    <GameList initial="hidden" animate="show">
      <div className="searched">
        <h2>Searched Games</h2>
        <Games>
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
        </Games>

        <h2>Upcoming Games</h2>
        <Games>
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
        </Games>
        <h2>Popular Games</h2>
        <Games>
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
        </Games>
        <h2>New Games</h2>
        <Games>
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
          <Game />
        </Games>
      </div>
    </GameList>
  )
}
