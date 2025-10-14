import React, { useState } from "react";
import {
    Alert,
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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { menuData, menuType, MENU } from "../services/menuItems";
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { styles } from "../styles/styles";
import { TextInput } from "react-native-gesture-handler";


type Props = NativeStackScreenProps<RootStackParamList, "Add">;

export default function AddMenu({ navigation }: Props) {

    const [itemName, setItemName] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [selectedItem, setSelectedItem] = useState<menuType>("Starter");

    function lengthHandleName(item: string): Boolean {
        return item.length <= 20
    }

    function lengthHandleDes(item: string): Boolean {
        return item.length <= 50
    }

    function isNotEmpty(name: string, desc: string, price: string): Boolean {
        const priceNum = (parseInt(price))
        if ((name.length > 0 && desc.length > 0 && !isNaN(priceNum) && priceNum != 0) && (lengthHandleName(name) == true && lengthHandleDes(desc) == true)) {
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
    }

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView>
                <ScrollView contentContainerStyle={{ gap: 30 }}>

                    <View style={styles.switchContainer}>
                        <Pressable style={[styles.pressableButton, selectedItem === "Starter" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Starter")}>
                            <Text style={[styles.buttonText, selectedItem === "Starter" && { color: "#F8BD06" }]}>Starter</Text>
                        </Pressable>

                        <Pressable style={[styles.pressableButton, selectedItem === "Main" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Main")}>
                            <Text style={[styles.buttonText, selectedItem === "Main" && { color: "#F8BD06" }]}>Main</Text>
                        </Pressable>

                        <Pressable style={[styles.pressableButton, selectedItem === "Dessert" && { backgroundColor: "#212121" }]} onPress={() => setSelectedItem("Dessert")}>
                            <Text style={[styles.buttonText, selectedItem === "Dessert" && { color: "#F8BD06" }]}>Dessert</Text>
                        </Pressable>

                    </View>

                    <TextInput style={menuStyle.inputStyle} placeholder="Name" placeholderTextColor={'#fff'} value={itemName} onChangeText={setItemName}></TextInput>

                    {itemName.length <= 20 ? (
                        null
                    )
                        : (
                            <View><Text style={styles.errorText}>Please enter only up to 20 characters for the name</Text></View>
                        )
                    }

                    <TextInput style={menuStyle.inputStyle} placeholder="Description" placeholderTextColor={'#fff'} value={itemDesc} onChangeText={setItemDesc}></TextInput>

                    {(itemDesc.length <= 40) ? (
                        null
                    )
                        : (
                            <View><Text style={styles.errorText}>Please enter only up to 40 characters for the description</Text></View>
                        )}

                    <TextInput style={menuStyle.inputStyle} placeholder="Price" placeholderTextColor={'#fff'} keyboardType="numeric" value={itemPrice} onChangeText={setItemPrice}></TextInput>
                    {(itemPrice && !isNaN(parseInt(itemPrice)) && parseInt(itemPrice) >= 0) ? (
                        null
                    ) : (
                        <View><Text style={styles.errorText}>Please enter a valid price</Text></View>
                    )}
                    <View style={styles.container}>
                        <Pressable style={styles.pressableButton} onPress={addItem}>
                            <Text style={styles.textStyle}>Confirm</Text>
                        </Pressable>
                        <Pressable style={styles.pressableButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.textStyle}>Menu</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}

const menuStyle = StyleSheet.create({

    itemName: {
        color: "#fff",
        fontSize: 16,
        gap: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightGrouping: {
        flexDirection: 'row',
        gap: 5,
        padding: 5,
    },
    itemGroup: {
        flexDirection: 'row',
        backgroundColor: "#2F2F2F",
        padding: 5,
        gap: 10,
        borderRadius: 50
    },
    inputStyle: {
        height: 50,
        borderColor: '#2F2F2F',
        backgroundColor: '#2F2F2F',
        borderWidth: 5,
        borderRadius: 30,
        paddingHorizontal: 30,
        color: '#fff',
        fontSize: 16,
    },
})