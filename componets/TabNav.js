import BooksScreen from "../screens/BooksScreen";
import DailyTaskScreen from "../screens/DailyTaskScreen";
import MusicScreen from "../screens/MusicScreen";
import HomeScreen from "../screens/HomeScreen";
import { GlobalStyles } from "../constants/style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NewsScreen from "../screens/NewsScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      activeColor={GlobalStyles.colors.primaryRed}
      barStyle={{ backgroundColor: GlobalStyles.colors.primaryYellow }}
      screenOptions={{
        inactiveColor: "black",
        activeColor: GlobalStyles.colors.primaryRed,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarLabel: "Books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={DailyTaskScreen}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-edit"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarLabel: "Music",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
