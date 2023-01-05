import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../../theme";
const center = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};
const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: theme.colors.textPrimary,
    ...center,
    fontWeight: theme.fontWeights.bold,
  },
  selectContainer: {
    margin: 4,
    padding: 10,
    borderRadius: 5,
  },
  unselected: {
    backgroundColor: theme.colors.button,
  },
  selected: {
    backgroundColor: theme.colors.buttonSelected,
    color: "yellow",
  },
  containerSelector: {
    flexDirection: "row",
    ...center,
  },
  container: {
    marginBottom: 20
  }
});

export default function SelectPlayers({ onSelect, players }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  useEffect(() => {
    selectHandler(players[0].index);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: theme.colors.textPrimary, ...center}}>
        Seleccione candidad de jugadores:
      </Text>

      <View style={styles.containerSelector}>
        {players.map((item) => {
          return (
            <Pressable
              key={item.index}
              style={[
                styles.selectContainer,
                item.index === userOption ? styles.selected : styles.unselected,
              ]}
              onPress={() => selectHandler(item.index)}
            >
              <Text style={styles.option}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
