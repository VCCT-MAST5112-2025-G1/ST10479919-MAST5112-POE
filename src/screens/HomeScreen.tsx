import React, { useState } from "react";
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
    BackHandler,
    Button,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";


type Props = BottomTabScreenProps<RootTabParamList, "Home">

export default function HomeScreen({ navigation }: Props) {

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.textStyle}>Welcome to {<Text style={styles.titleText}>The cookbook</Text>}</Text>
            </View>
            
            {/* Change to add items added to list */}
            <Text style={styles.textStyle}>Add some items from the menu to prepare a course!</Text>
        </SafeAreaView >
    );
}
