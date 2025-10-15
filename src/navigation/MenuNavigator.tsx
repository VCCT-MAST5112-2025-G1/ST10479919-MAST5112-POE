import React, {useRef} from "react";
import { Animated } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectMenu from "../screens/MenuSelectScreen";
import MenuScreen from "../screens/MenuScreen";
import { useFocusEffect } from "@react-navigation/native";


export type MenuStackList = {
    SelectMenu: undefined;
    Menu: { selectedType: "Starter" | "Main" | "Dessert" };
}

const Stack = createNativeStackNavigator<MenuStackList>();

export default function MenuNavigator() {

    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#212121"
                },
            }}
        >
            <Stack.Screen name="SelectMenu" component={SelectMenu} />
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
    );
}