import { StyleSheet,  View } from 'react-native';
import Landing from "../src/pages/Landing";
import theme from "../theme";

export default function Page() {
  return (
    <View style={styles.container}>
       <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});