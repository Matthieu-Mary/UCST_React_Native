import { View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import SideMenu from "./components/Header/SideMenu";

export default function App() {

  const [visibleMenu, setVisibleMenu] = useState(false);

  const showMenu = () => {
    setVisibleMenu(true);
    console.log(visibleMenu)
  }
 
  const hideMenu = () => {
    setVisibleMenu(false);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Navbar showMenu={showMenu}  visibleMenu={visibleMenu} />
        {visibleMenu ?? <SideMenu hideMenu={hideMenu}/>}
        <View style={s.app}>
          <Home />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
