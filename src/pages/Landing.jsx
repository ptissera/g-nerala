import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import theme from "../../theme";
import SelectPlayers from "../components/SelectPlayers";
import PlayerInput from "../components/PlayerInput";
import Constants from "expo-constants";
import usePlayers from "../hooks/usePlayers";
import Button from "../components/Button";
import { Formik, useField } from 'formik'
import {playerNamesValidationSchema} from '../validationSchemas/playerNames'
import { useNavigation } from 'expo-router'

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

const FormikInputValue = ({name, disabled, ...props}) => {
  const [field, meta, helpers] = useField(name)
  field.disabled = disabled
  return (
      <>
          <PlayerInput
              error={meta.error}
              value={field.value}
              onChangeText={value => helpers.setValue(value)}
              {...props}
          />
      </>
  )
}

export default function Landing() {
  const navigation = useNavigation()
  const totalPlayers = 7;
  const {
    players,
    choosePlayers,
    totalPlayersSelected,
    handlerSelectionTotalPlayers,
  } = usePlayers(totalPlayers);

  const playerNames = () =>
    players.map((player, index) => (
      <FormikInputValue
        name ={`player${index + 1}`}
        key ={index}
        disabled={totalPlayersSelected > index  }
        editable={totalPlayersSelected > index }
        style={totalPlayersSelected < index + 1 ? { backgroundColor: "gray" } : {}}
      />
    ));

  return (
    <View>
      <StatusBar style="light" />
      <View style={styles.container}>
      <Formik
       validationSchema={playerNamesValidationSchema}
       initialValues={{
         player1: '',
         player2: '',
         player3: '',
         player4: '',
         player5: '',
         player6: '',
         player7: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log("a VERRRRRRRRRR",values,totalPlayersSelected);
       }}
     >
       {({ handleSubmit }) => (
        <>
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
            onPress={handleSubmit}
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            title="    Comenzar    "
          />
        </View>
        </>
        )}
     </Formik>
      </View>
    </View>
  );
}
