import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import AddPlayerForm from "./components/AddPlayer/AddPlayerForm";

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const [highScore, setHighScore] = useState();
  const nextPlayerId = useRef(4);

  useEffect(() => {
    const scores = players.map(player => player.score);
    setHighScore(Math.max(...scores));
  }, [players]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player;
    }));
  };

  const handleAddPlayer = (name) => {
    nextPlayerId.current += 1;
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId.current
      }
    ]);
  }

  return (
    <div className="scoreboard">
      <Header
        players={players}
      />
      {/* Players list */}
      {players.map(player => {
        return (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            removePlayer={handleRemovePlayer}
            changeScore={handleScoreChange}
            isHighScore={player.score === highScore && highScore !== 0}
          />
        );
      })}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
}

export default App;
