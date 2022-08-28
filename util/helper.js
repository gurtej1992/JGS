import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Alert } from "react-native";
export const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export function showAlert(title, message) {
  Alert.alert(title, message, [
    {
      text: "Okay",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
  ]);
}
