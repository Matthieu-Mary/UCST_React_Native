import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView useLegacyImplementation={true} {...props}>
        <Text style={{textAlign: "center", fontSize: 24, paddingBottom: 12, marginBottom: 10, fontWeight: "bold", color:"#2c506b", textDecorationLine: "underline"}}>Un Coeur Sans Toit</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
