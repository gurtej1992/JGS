import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

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

export const setToken = (token) => {
  return SecureStore.setItemAsync("secure_token", token);
};

export const getToken = () => {
  return SecureStore.getItemAsync("secure_token");
};
export const removeToken = () => {
  return SecureStore.deleteItemAsync("secure_token");
};

// setToken('#your_secret_token');
// getToken().then(token => console.log(token));
