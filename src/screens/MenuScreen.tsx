import React, { useState, useRef } from "react";
import {
    Alert,
    Animated,
    Text,
    View,
    Pressable,
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { menuType, menuData, MENU, menuList } from "../services/menuItems";
import { styles, categoryStyle } from "../styles/styles";
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useMenu } from "../services/MenuContext"


type Props = NativeStackScreenProps<MenuStackList, "Menu">;




export default function MenuScreen({ navigation, route }: Props) {
    // (Adedotun, n.d.) 
    const { menuList, addToMenu, removeFromMenu } = useMenu();

    const fadeAnimation = useRef(new Animated.Value(1)).current;
 
    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(fadeAnimation, {toValue: 1, duration: 300, useNativeDriver: true}).start()
            return () => {
                fadeAnimation.setValue(0);
            }}, [])
    )

    const [selectedItem, setSelectedItem] = useState<menuType>(route.params?.selectedType || "Starter");
    const itemCount = menuData[selectedItem].length

    

    
    useFocusEffect(
        /* (Satya164, n.d.) */
        React.useCallback(() => {
            return () => {
                navigation.navigate('SelectMenu');
            };
        }, [navigation])
    );

    var totalCost = 0

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
        <Animated.View style={{opacity: fadeAnimation, flex: 1}}>
        <SafeAreaView style={[styles.container, { padding: 20 }]}>

            <ScrollView showsVerticalScrollIndicator={false}>

                {itemCount === 0 ? (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{selectedItem}s</Text>
                            <Text style={[styles.textStyle, { textAlign: "auto" }]}> No items to display. Add some! </Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={{ gap: 20 }}>

                            <Text style={styles.titleText}>{selectedItem}s</Text>
                            {menuData[selectedItem].map((item, index) => {
                                const isAdded = isItemSelected(item.Name);

                                return (
                                    <View key={index} style={categoryStyle.categories}>
                                        <Text style={categoryStyle.name}>{item.Name}</Text>
                                        <Text style={categoryStyle.description}>{item.Description}</Text>
                                        <Text style={categoryStyle.price}>R{item.Price}</Text>
                                        <Pressable
                                            style={[styles.pressableButton, { marginTop: 10 }, isAdded && { backgroundColor: "#FF4444" }]}
                                            onPress={() => isAdded ? removeFromSelection(item) : addToSelection(item)}
                                        >
                                            <Text style={styles.textStyle}>{isAdded ? "Remove Item" : "Add Item"}</Text>
                                        </Pressable>
                                    </View>
                                )
                            })}

                        </View>
                        <View>
                            <Text style={styles.textStyle}>Total items: {itemCount}</Text>
                            <Text style={styles.textStyle}>Total cost of selected items: R{totalCost}</Text>
                        </View>

                    </>
                )
                }


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
