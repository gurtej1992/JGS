import { ActivityIndicator, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/style";

function Indicator() {
  return (
    <View style={styles.spinnerView}>
      <ActivityIndicator
        size={"large"}
        style={styles.indicator}
        color={GlobalStyles.colors.primaryRed}
      />
    </View>
  );
}
export default Indicator;
const styles = StyleSheet.create({
  spinnerView: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
  },
});
