import React, { useState } from "react";
import {
    Alert,
    Text,
    View,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { menuData, menuType, MENU } from "../services/menuItems";
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { styles } from "../styles/styles";
import { TextInput } from "react-native-gesture-handler";
import { RootTabParamList } from "../navigation/AppNavigator";

type Props = BottomTabScreenProps<RootTabParamList, "Add">;

export default function AddMenu({ navigation }: Props) {
    const [itemName, setItemName] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [selectedItem, setSelectedItem] = useState<menuType>("Starter");

    function lengthHandleName(item: string): Boolean {
        return item.length <= 20
    }

    function lengthHandleDescription(item: string): Boolean {
        return item.length <= 50
    }

    function isNotEmpty(name: string, desc: string, price: string): Boolean {
        const priceNum = (parseInt(price))
        if ((name.length > 0 && desc.length > 0 && !isNaN(priceNum) && priceNum != 0) && (lengthHandleName(name) == true && lengthHandleDescription(desc) == true)) {
            return true
        }
        return false
    }

    const resetInputs = () => {
        setItemName("")
        setItemDesc("")
        setItemPrice("")
    }

    const addItem = () => {
        if (isNotEmpty(itemName, itemDesc, itemPrice)) {
            const newItem: MENU = {
                Name: itemName,
                Type: selectedItem,
                Description: itemDesc,
                Price: parseInt(itemPrice)
            }
            menuData[selectedItem].push(newItem);
            resetInputs();
            Alert.alert("Success!", "Item has been added");
        }
        else {
            Alert.alert("Unsuccessful!", "Item has not been added")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView style={{ width: '100%' }}>
                <ScrollView contentContainerStyle={{ gap: 25, paddingVertical: 10 }}>
                    
                    {/* Header */}
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Text style={styles.titleText}>Add Menu Items</Text>
                        <Text style={[styles.textStyle, { color: '#b0b0b0', textAlign: 'center' }]}>
                            Create new dishes for your menu
                        </Text>
                    </View>

                    <View style={styles.switchContainer}>
                        <Pressable style={[styles.pressableButton, selectedItem === "Starter" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Starter")}>
                            <Text style={[styles.switchButtonText, selectedItem === "Starter" && { color: "#F8BD06" }]}>Starter</Text>
                        </Pressable>

                        <Pressable style={[styles.pressableButton, selectedItem === "Main" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Main")}>
                            <Text style={[styles.switchButtonText, selectedItem === "Main" && { color: "#F8BD06" }]}>Main</Text>
                        </Pressable>

                        <Pressable style={[styles.pressableButton, selectedItem === "Dessert" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Dessert")}>
                            <Text style={[styles.switchButtonText, selectedItem === "Dessert" && { color: "#F8BD06" }]}>Dessert</Text>
                        </Pressable>
                    </View>

                    <TextInput style={styles.inputStyle} placeholder="Name" placeholderTextColor={'#b0b0b0'} value={itemName} onChangeText={setItemName}></TextInput>

                    {itemName.length <= 20 ? (
                        null
                    )
                        : (
                            <View><Text style={styles.errorText}>Please enter only up to 20 characters for the name</Text></View>
                        )
                    }

                    <TextInput style={styles.inputStyle} placeholder="Description" placeholderTextColor={'#b0b0b0'} value={itemDesc} onChangeText={setItemDesc}></TextInput>

                    {(itemDesc.length <= 40) ? (
                        null
                    )
                        : (
                            <View><Text style={styles.errorText}>Please enter only up to 40 characters for the description</Text></View>
                        )}

                    <TextInput style={styles.inputStyle} placeholder="Price" placeholderTextColor={'#b0b0b0'} keyboardType="numeric" value={itemPrice} onChangeText={setItemPrice}></TextInput>
                    {(itemPrice && !isNaN(parseInt(itemPrice)) && parseInt(itemPrice) >= 0) ? (
                        null
                    ) : (
                        <View><Text style={styles.errorText}>Please enter a valid price</Text></View>
                    )}
                    
                    <View style={styles.container}>
                        <Pressable style={styles.pressableButton} onPress={addItem}>
                            <Text style={styles.textStyle}>Confirm</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}