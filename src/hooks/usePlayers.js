import { useMemo, useState } from "react";

const usePlayers = (totalPlayers) => {
  const players = Array.from({ length: totalPlayers }, (_, i) => i + 1)
    .map((item) => ({ label: `  ${item}  `, index: item }));

  const [totalPlayersSelected, setTotalPlayersSelected] = useState(0);

  const handlerSelectionTotalPlayers = (total) => {
    setTotalPlayersSelected(total);
  };

  return {
    choosePlayers: players.filter((item) => item.index > 1),
    players,
    totalPlayersSelected,
    handlerSelectionTotalPlayers,
  };
};

export default usePlayers;
