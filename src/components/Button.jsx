import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: theme.colors.button,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: theme.fontWeights.bold,
    letterSpacing: 0.25,
    color: theme.colors.textPrimary,
  },
});
const Button = ({ onPress, title, textStyle, buttonStyle = {} }) => {
  const [clicked, setClicked] = useState(false)
  const textStyles = { ...styles.text, ...textStyle };
  const buttonStyles = { ...styles.button, ...buttonStyle };
  const buttonStyleSelected = { ...styles.button, ...buttonStyle,  ...{backgroundColor: buttonStyle.backgroundColorSelected ?? theme.colors.buttonSelected}};
  return (
    <Pressable style={clicked?buttonStyleSelected : buttonStyles} onPress={onPress} onPressIn={()=>setClicked(true)} onPressOut={()=>setClicked(false)}>
      <Text style={textStyles}>{title}</Text>
    </Pressable>
  );
};
export default Button;
