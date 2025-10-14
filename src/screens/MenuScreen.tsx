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
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles } from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

export default function MenuScreen({ navigation }: Props) {

    const shakeAnim = useRef(new Animated.Value(0)).current;

    const startShake = () => {
        Animated.sequence([
            Animated.timing(shakeAnim, {
                toValue: -1,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: -1,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
            }),
        ]).start();
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.switchContainer}>
                <Pressable style={styles.pressableButton}>
                    <Text style={styles.buttonText}>Starter</Text>
                </Pressable>

                <Pressable style={styles.pressableButton}>
                    <Text style={styles.buttonText}>Main</Text>
                </Pressable>


                <Pressable style={styles.pressableButton}>
                    <Text style={styles.buttonText}>Dessert</Text>
                </Pressable>

            </View>
            <View style={styles.container}>

                <Pressable style={styles.pressableButton} onPress={() => { navigation.navigate("Add") }}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </SafeAreaView >
    );
}