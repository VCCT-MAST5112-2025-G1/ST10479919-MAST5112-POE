import React, {useRef} from "react";
import { Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from 'react-native-screens'
import HomeScreen from "../screens/HomeScreen";
import AddMenu from '../screens/AddMenu'
import { Text, View } from "react-native";
import MenuNavigator from "./MenuNavigator";

export type RootTabParamList = {
    Home: undefined;
    SelectMenu: undefined;
    Add: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {

    const fadeAnimation = useRef(new Animated.Value(1)).current;

    enableScreens(true)
    return (
        <Tab.Navigator 
        screenListeners={( { navigation }) => ({
            tabPress: (e) => {
                Animated.sequence([
                    Animated.timing(fadeAnimation, { toValue: 0, duration: 150, useNativeDriver: true }),
                    Animated.timing(fadeAnimation, { toValue: 1, duration: 150, useNativeDriver: true}),
                ]).start()
            }
        })}
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#212121",
                borderTopColor: "#2F2F2F",
            },
            tabBarActiveTintColor: "#F8BD06",
            tabBarInactiveTintColor: "#FFFFFF",
            sceneStyle: {
                backgroundColor: "#212121"

            }
        }}>


            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Text style={{ color, fontSize: size }}>家</Text>
                    )
                }}
            />

            <Tab.Screen
                name="Add"
                component={AddMenu}
                options={{
                    title: "Add Items",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Text style={{ color, fontSize: size }}>+</Text>
                    )
                }}
            />

            <Tab.Screen
                name="SelectMenu"
                component={MenuNavigator}
                options={{
                    title: "Menu",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Text style={{ color, fontSize: size }}>☰</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}