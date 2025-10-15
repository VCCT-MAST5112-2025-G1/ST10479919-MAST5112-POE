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
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MenuStackList } from "../navigation/MenuNavigator";
import { menuType, menuData, MENU, menuList } from "../services/menuItems";
import { styles } from "../styles/styles";
import { ScrollView } from 'react-native';


type Props = NativeStackScreenProps<MenuStackList, "Menu">;




export default function MenuScreen({ navigation, route }: Props) {

    const [selectedItem, setSelectedItem] = useState<menuType>(route.params?.selectedType || "Starter");
    const itemCount = menuData[selectedItem].length
    const [itemAdded, setItemAdded] = useState<string[]>([]);

    var totalCost = 0

    if (!(itemCount === 0)) {
        totalCost = menuData[selectedItem].reduce((total, item) => total + item.Price, 0)
    }

    const addToSelection = (item: MENU) => {
        menuList.push(item);
        setItemAdded(prev => [...prev, item.Name])
    };

    const removeFromSelection = (item: MENU) => {
        const index = menuList.findIndex(menuList => menuList.Name === item.Name)
        if (index > -1) {
            menuList.splice(index, 1)
        }
        setItemAdded(prev => prev.filter(name => name !== item.Name))
    }

    const isItemSelected = (item: string) => {
        return itemAdded.includes(item);
    }


    return (
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
                    <Pressable style={styles.pressableButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Go back</Text>
                    </Pressable>
                </View>

            </ScrollView>

        </SafeAreaView >
    );
}

const categoryStyle = StyleSheet.create({

    categories: {
        padding: 15,
        gap: 5,
        backgroundColor: '#2F2F2F',
        borderRadius: 15,
        width: '100%',
        minWidth: '50%',
        maxWidth: 'auto'
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },

    description: {
        color: '#fff',
        marginVertical: 5,
    },

    price: {
        color: '#F8BD06',
        fontSize: 16
    }


})