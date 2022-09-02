import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles } from "../constants/style";

export default function ItemView({ data, onPress }) {
  const [item, setItem] = useState(data);
  function onClick() {
    onPress(item);
  }
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#FFF",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: {
    color: GlobalStyles.colors.accent700,
  },
});
