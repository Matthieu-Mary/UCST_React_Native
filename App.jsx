import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./pages/About/About";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";
import Home from "./pages/Home/Home";
import { s } from "./App.style";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <NavigationContainer>
          <Drawer.Navigator
            useLegacyImplementation={true}
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              headerStyle: {
                backgroundColor:"green",

              },
              drawerStyle: {
                backgroundColor: "#e9b167"
              },
              drawerActiveBackgroundColor: "#2c506b", 
              drawerActiveTintColor: "floralwhite",
              drawerInactiveTintColor: "#2c506b",
              drawerLabelStyle: {
                marginLeft: -20,
                fontFamily: "Roboto",
                fontSize: 16,
              },
            }}
          >
            <Drawer.Screen
              name="Accueil"
              component={Home}
              options={{
                drawerIcon: ({color}) => (
                  <Ionicons name="md-home" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="A propos"
              component={About}
              options={{
                drawerIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="information"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Chats"
              component={Cats}
              options={{
                drawerIcon: ({color}) => (
                  <MaterialCommunityIcons name="cat" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Chiens"
              component={Dogs}
              options={{
                drawerIcon: ({color}) => (
                  <MaterialCommunityIcons name="dog" size={24} color={color} />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
