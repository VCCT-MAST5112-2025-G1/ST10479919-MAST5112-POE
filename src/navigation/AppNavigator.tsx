import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from 'react-native-screens'
import MenuScreen from '../screens/MenuScreen'
import AddMenu from '../screens/AddMenu'

export type RootStackParamList = {
    Menu: undefined;
    Add: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    enableScreens(true)
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} options={{ title: "Menu" }} />
            <Stack.Screen name="Add" component={AddMenu} options={{ title: "Add items" }} />
        </Stack.Navigator>
    )
}