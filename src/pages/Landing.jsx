import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import theme from "../../theme";
import SelectPlayers from "../components/SelectPlayers";
import PlayerInput from "../components/PlayerInput";
import Constants from "expo-constants";
import usePlayers from "../hooks/usePlayers";
import Button from "../components/Button";

const center = {
  alignItems: "center",
  justifyContent: "center",
};
const styles = StyleSheet.create({
  container: {
    ...center,
    paddingTop: Constants.statusBarHeight + 10,
  },
  header: {
    ...center,
    flex: 0,
    marginBottom: 40,
  },
  body: {
    flex: 1,
  },
  button: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.button,
    backgroundColorSelected: theme.colors.buttonSelected
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 1.5
  },
});

export default function Landing() {
  const totalPlayers = 7;
  const {
    players,
    choosePlayers,
    totalPlayersSelected,
    handlerSelectionTotalPlayers,
  } = usePlayers(totalPlayers);
  const playerNames = () =>
    players.map((player, index) => (
      <PlayerInput
        key={player.index}
        {...player}
        style={totalPlayersSelected < index + 1 ? { backgroundColor: "gray" } : {}}
      />
    ));

  return (
    <View>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 40, color: theme.colors.textPrimary }}>
            Anotador
          </Text>
          <Text
            style={{
              fontSize: 45,
              fontWeight: "700",
              color: theme.colors.textSecondary,
            }}
          >
            Generala
          </Text>
        </View>
        <View style={styles.body}>
          <SelectPlayers
            onSelect={handlerSelectionTotalPlayers}
            players={choosePlayers}
          />
          <Text
            style={{
              fontSize: 20,
              color: theme.colors.textPrimary,
              marginBottom: 5,
            }}
          >
            Ingrese nombre o inicial de los jugadores
          </Text>
          {playerNames()}
        </View>
        <View style={{ flex: 0 }}>
          <Button
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            title="    Comenzar    "
          />
        </View>
      </View>
    </View>
  );
}
