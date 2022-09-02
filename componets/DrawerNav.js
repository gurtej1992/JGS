import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import ProfileScreen from "../screens/ProfileScreen";
import MyTabs from "./TabNav";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
          }}
          style={styles.profileImg}
        />
        <Text style={styles.txtName}>Rajat Jain</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={({ color }) => (
            <Ionicons
              name="log-out-outline"
              size={30}
              style={styles.icon}
              color={color}
            />
          )}
          label="Logout"
          labelStyle={{ marginLeft: -20 }}
          onPress={() => props.navigation.navigate("Welcome")}
        />
      </DrawerContentScrollView>
    </View>
  );
}
export default function LandingNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primaryRed,
        },
        drawerActiveBackgroundColor: GlobalStyles.colors.primaryRedLight,
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          marginLeft: -20,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons
              name="home-outline"
              size={30}
              style={styles.icon}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="person-outline"
              size={30}
              style={styles.icon}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  header: {
    flex: 0.35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primaryRed,
  },
  profileImg: {
    marginTop: 40,
    width: 110,
    height: 110,
    borderColor: GlobalStyles.colors.primaryYellow,
    borderWidth: 5,
    borderRadius: 55,
  },
  txtName: {
    marginTop: 10,
    color: "white",
    fontSize: 25,
    fontFamily: Platform.OS === "ios" ? "AvenirNextCondensed-Medium" : "Roboto",
  },
});
