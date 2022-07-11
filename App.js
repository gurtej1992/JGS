import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import BooksScreen from './screens/BooksScreen';
import DailyTaskScreen from './screens/DailyTaskScreen';
import MusicScreen from './screens/MusicScreen';
import { GlobalStyles } from './constants/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

function LandingNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    activeColor={GlobalStyles.colors.primaryRed}
    barStyle={{ backgroundColor: GlobalStyles.colors.primaryYellow }}
    screenOptions={{
      headerShown:true,
      inactiveColor: "black",
      activeColor: GlobalStyles.colors.primaryRed
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Books" component={BooksScreen} options={{
        tabBarLabel: 'Books',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book-open-variant" color={color} size={26} />
        ),
      }} />
       <Tab.Screen name="Tasks" component={DailyTaskScreen} options={{
        tabBarLabel: 'Tasks',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="playlist-edit" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Music" component={MusicScreen} options={{
        tabBarLabel: 'Music',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="music" color={color} size={26} />
        ),
      }} />
     <Tab.Screen name="News" component={NewsScreen} options={{
        tabBarLabel: 'News',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={26} />
        ),
      }} />
      
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        
      }} initialRouteName={"Welcome"}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="LandingNav" component={LandingNav} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
