import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/style";
import { Ionicons } from "@expo/vector-icons";

export default function PageHeader({
  rightButtonAction,
  title,
  navigation,
  rightIcon,
  backButton,
}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: GlobalStyles.colors.primaryRed, height: 90 }}
    >
      <View style={styles.header}>
        {backButton ? (
          <Ionicons
            name="chevron-back"
            size={28}
            onPress={goBack}
            style={styles.icon}
          />
        ) : (
          <MaterialIcons
            name="menu"
            size={28}
            onPress={openMenu}
            style={styles.icon}
          />
        )}

        <View>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        {rightIcon != null ? (
          <MaterialIcons
            name={rightIcon}
            size={28}
            onPress={rightButtonAction}
            style={styles.icon}
          />
        ) : (
          <View />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.primaryRed,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
  },
  headerText: {
    alignSelf: "center",
    margin: "auto",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    letterSpacing: 1,
  },
  icon: {
    color: "white",
  },
});
