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
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles } from "../styles/styles";
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<MenuStackList, "SelectMenu">;


export default function SelectMenu({ navigation }: Props) {
       const fadeAnimation = useRef(new Animated.Value(1)).current;
     
        useFocusEffect(
            React.useCallback(() => {
                Animated.timing(fadeAnimation, {toValue: 1, duration: 300, useNativeDriver: true}).start()
                return () => {
                    fadeAnimation.setValue(0);
                }}, [])
        )

    const handleCategorySelect = (category: menuType) => {
        navigation.navigate("Menu", { selectedType: category });
    }

    return (
        <Animated.View style={{opacity: fadeAnimation, flex: 1}}>
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
        </Animated.View>
    )
}



