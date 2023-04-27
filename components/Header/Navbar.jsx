
import { Image, View, Text, TouchableOpacity } from "react-native";
import logo from "../../assets/logo2.png";
import { s } from "./Navbar.style";
import { Feather } from "@expo/vector-icons";

export default function Navbar({showMenu}) {
  return (
    <View style={s.navbar}>
      <Image source={logo} style={s.img} />
      <Text style={s.headerText}>Un Coeur Sans Toit</Text>
      <TouchableOpacity style={s.btnMenu} onPress={showMenu}>
        <Feather name="menu" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}
