import { useState } from "react";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";

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
      return player
    }));
  };

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      )}
    </div>
  );
}

export default App;
