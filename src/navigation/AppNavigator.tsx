import React, {useRef} from "react";
import { Animated, StyleSheet } from "react-native";
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
const HomeIcon = ({ focused, color }: { focused: boolean; color: string }) => (
    <View style={styles.iconContainer}>
        <Text style={[styles.asciiIcon, { color }]}>
            {focused ? 
                "╔═══╗\n║ • ║\n╚═══╝" : 
                "┌───┐\n│   │\n└───┘"
            }
        </Text>
    </View>
);

const AddIcon = ({ focused, color }: { focused: boolean; color: string }) => (
    <View style={styles.iconContainer}>
        <Text style={[styles.asciiIcon, { color }]}>
            {focused ? 
                "╭───╮\n│ + │\n╰───╯" : 
                "┌───┐\n│ + │\n└───┘"
            }
        </Text>
    </View>
);

const MenuIcon = ({ focused, color }: { focused: boolean; color: string }) => (
    <View style={styles.iconContainer}>
        <Text style={[styles.asciiIcon, { color }]}>
            {focused ? 
                "≡≡≡≡≡\n≡ ≡ ≡\n≡≡≡≡≡" : 
                "•••••\n• • •\n•••••"
            }
        </Text>
    </View>
);

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
                height: 70,
                paddingBottom: 12,
                paddingTop: 8,
            },
            tabBarActiveTintColor: "#F8BD06",
            tabBarInactiveTintColor: "#888888",
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
                marginTop: 4,
            },
            sceneStyle: {
                backgroundColor: "#212121"
            }
        }}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => (
                        <HomeIcon focused={focused} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Add"
                component={AddMenu}
                options={{
                    title: "Add Items",
                    tabBarIcon: ({ focused, color }) => (
                        <AddIcon focused={focused} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="SelectMenu"
                component={MenuNavigator}
                options={{
                    title: "Menu",
                    tabBarIcon: ({ focused, color }) => (
                        <MenuIcon focused={focused} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
    },
    asciiIcon: {
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 9,
        includeFontPadding: false,
    },
});