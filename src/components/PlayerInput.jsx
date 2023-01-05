import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginBottom: 10,
    backgroundColor: "#fefefe",
    flex: 1,
  },
  index: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 0.05,
  },
  textIndex: {
    color: theme.colors.textPrimary,
    fontSize: 25,
  },
  error: {
    borderColor: "red",
  },
});

const PlayerInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [styles.textInput, style, error && styles.error];
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={styles.index}>
        <Text style={styles.textIndex}>{props.index}</Text>
      </View>
      <TextInput style={inputStyle} {...props} />
    </View>
  );
};

export default PlayerInput;
