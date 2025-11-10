import React, { useState, useRef } from "react";
import {
    Alert,
    Animated,
    Text,
    View,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles, categoryStyle } from "../styles/styles";
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useMenu } from "../services/MenuContext"

type Props = NativeStackScreenProps<MenuStackList, "Menu">;

export default function MenuScreen({ navigation, route }: Props) {
    const { menuList, addToMenu, removeFromMenu } = useMenu();

    const fadeAnimation = useRef(new Animated.Value(1)).current;
    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(fadeAnimation, { toValue: 1, duration: 300, useNativeDriver: true }).start()
            return () => {
                fadeAnimation.setValue(0);
            }
        }, [])
    )
    // Grabs the menuType from selection. Default to Starter if anything goes wrong
    const [selectedItem, setSelectedItem] = useState<menuType>(route.params?.selectedType || "Starter");
    const itemCount = menuData[selectedItem].length

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                navigation.navigate('SelectMenu');
            };
        }, [navigation])
    );

    var totalCost = 0
    // Checks if itemCount isn't 0
    if (!(itemCount === 0)) {
        totalCost = menuData[selectedItem].reduce((total, item) => total + item.Price, 0)
    }

    const addToSelection = (item: MENU) => {
        console.log('Attempting to add item:', item.Name);
        try {
            addToMenu(item);
            console.log('Item added successfully');
        } catch (error) {
            console.error('Error adding item:', error);
            Alert.alert('Error', 'Failed to add item to menu');
        }
    };

    const removeFromSelection = (item: MENU) => {
        removeFromMenu(item.Name);
    }

    const isItemSelected = (item: string) => {
        return menuList.some(menuItem => menuItem.Name === item);
    }

    return (
        <Animated.View style={{ opacity: fadeAnimation, flex: 1 }}>
            <SafeAreaView style={[styles.container, { padding: 20 }]}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>

                    {itemCount === 0 ? (
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{selectedItem}s</Text>
                            <Text style={[styles.textStyle, { textAlign: "center", color: '#b0b0b0' }]}>
                                No items added. Add some in the "Add items" menu!
                            </Text>
                        </View>
                    ) : (
                        <>
                            <View style={{ gap: 20 }}>
                                <Text style={styles.titleText}>{`${selectedItem}s`}</Text>

                                <View style={styles.card}>

                                    <Text style={styles.textStyle}>{`Total items in ${selectedItem}s: ${itemCount}`}</Text>
                                    <Text style={styles.textStyle}>{`Total cost of ${selectedItem} items: R${totalCost}`}</Text>

                                </View>

                                {menuData[selectedItem].map((item, index) => {
                                    // for a check to see if item is added by using name 
                                    const isAdded = isItemSelected(item.Name);
                                    return (
                                        <View key={index} style={categoryStyle.categories}>
                                            <Text style={categoryStyle.name}>{`${item.Name}`}</Text>
                                            <Text style={categoryStyle.description}>{`${item.Description}`}</Text>
                                            <Text style={categoryStyle.price}>{`R${item.Price}`}</Text>
                                            <Pressable
                                                style={[styles.pressableButton, { marginTop: 10 }, isAdded && { backgroundColor: "#FF4444" }]}
                                                // Depending on if item's name corresponds switch between selection types 
                                                onPress={() => isAdded ? removeFromSelection(item) : addToSelection(item)}
                                            >
                                                <Text style={styles.textStyle}> {isAdded ? "Remove Item" : "Add Item"} </Text>
                                            </Pressable>
                                        </View>
                                    )
                                })}
                            </View>
                        </>
                    )}

                    <View style={styles.container}>
                        <Pressable style={styles.pressableButton} onPress={() => navigation.navigate("SelectMenu")}>
                            <Text style={styles.buttonText}>Go back</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </Animated.View>
    );
}