import React, { useRef } from "react";
import {
    Animated,
    Text,
    View,
    Pressable,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { styles } from "../styles/styles";
import { useFocusEffect } from '@react-navigation/native';
import { menuType, menuData, } from "../services/menuItems";
import { useMenu } from "../services/MenuContext"

type Props = NativeStackScreenProps<MenuStackList, "SelectMenu">;

export default function SelectMenu({ navigation }: Props) {
    const { resetMenu } = useMenu();
    const fadeAniHandle = useRef(new Animated.Value(1)).current;

    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(fadeAniHandle, { toValue: 1, duration: 300, useNativeDriver: true }).start()
            return () => {
                fadeAniHandle.setValue(0);
            }
        }, [])
    )

    const handleCategorySelect = (category: menuType) => {
        navigation.navigate("Menu", { selectedType: category });
    }

    const resetMenuList = () => {
        Alert.alert(
            'Are you sure?',
            'This is NOT reversible',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        resetMenu()
                        menuData.Starter = []
                        menuData.Main = []
                        menuData.Dessert = []
                        Alert.alert("Items reset", "All items removed from menu")
                    }
                },
            ],
            {
                cancelable: true,
            }
        );
    }

    return (
        <Animated.View style={{ opacity: fadeAniHandle, flex: 1 }}>
            <SafeAreaView style={styles.container}>

                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Text style={styles.titleText}>Menu Categories</Text>
                    <Text style={[styles.textStyle, { color: '#b0b0b0', textAlign: 'center' }]}>
                        Choose a category to explore
                    </Text>
                </View>

                <View style={{ width: '100%', gap: 15 }}>
                    <Pressable
                        style={[styles.pressableButton, { width: '100%' }]}
                        onPress={() => handleCategorySelect("Starter")}
                    >
                        <Text style={styles.buttonText}>Starters</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.pressableButton, { width: '100%' }]}
                        onPress={() => handleCategorySelect("Main")}
                    >
                        <Text style={styles.buttonText}>Mains</Text>
                    </Pressable>

                    <Pressable
                        style={[styles.pressableButton, { width: '100%' }]}
                        onPress={() => handleCategorySelect("Dessert")}
                    >
                        <Text style={styles.buttonText}>Desserts</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: 30, gap: 10, width: '100%' }}>

                    <Pressable
                        style={[styles.pressableButton, { width: '100%', backgroundColor: '#FF4444' }]}
                        onPress={() => { resetMenuList() }}
                    >
                        <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>Reset Menu</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </Animated.View>
    )
}