import React, { useState, useRef } from "react";
import {
    Animated,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
    BackHandler,
    Button,
    StyleSheet,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<MenuStackList, "SelectMenu">;


export default function SelectMenu({ navigation }: Props) {

    const handleCategorySelect = (category: menuType) => {
        navigation.navigate("Menu", { selectedType: category });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>
                Select category
            </Text>

            <View style={styles.container}>
                <Pressable
                    style={[styles.pressableButton, { width: '50%' }]} onPress={() => handleCategorySelect("Starter")}>
                    <Text style={styles.buttonText}>Starters</Text>
                </Pressable>

                <Pressable
                    style={[styles.pressableButton, { width: '50%' }]} onPress={() => handleCategorySelect("Main")}>
                    <Text style={styles.buttonText}>Mains</Text>
                </Pressable>

                <Pressable
                    style={[styles.pressableButton, { width: '50%' }]} onPress={() => handleCategorySelect("Dessert")}>
                    <Text style={styles.buttonText}>Desserts</Text>
                </Pressable>

            </View>
        </SafeAreaView>
    )
}



