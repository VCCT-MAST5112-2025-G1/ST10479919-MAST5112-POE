import React, { useState } from "react";
import {
    Alert,
    Text,
    View,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { menuData, menuType, MENU, populateTestData } from "../services/menuItems";
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { styles } from "../styles/styles";
import { TextInput } from "react-native-gesture-handler";
import { RootTabParamList } from "../navigation/AppNavigator";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type Props = BottomTabScreenProps<RootTabParamList, "Add">;

export default function AddMenu({ navigation }: Props) {
    const [hasErrors, setHasErrors] = useState(false);
    const [itemName, setItemName] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [selectedItem, setSelectedItem] = useState<menuType>("Starter");

    const resetInputs = () => {
        setItemName("")
        setItemDesc("")
        setItemPrice("")
        setHasErrors(false)
    }

    const addItem = () => {
        const nameValid = itemName.length > 0 && itemName.length <= 20;
        const descValid = itemDesc.length > 0 && itemDesc.length <= 40;
        const priceValid = itemPrice && !isNaN(parseInt(itemPrice)) && parseInt(itemPrice) > 0;

        if (nameValid && descValid && priceValid) {
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
            setHasErrors(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <GestureHandlerRootView style={[{ width: '100%' }]}>
                <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true} showsVerticalScrollIndicator={false}>
                    <View style={{ gap: 15 }}>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Text style={styles.titleText}>Add Menu Items</Text>
                            <Text style={[styles.textStyle, { color: '#b0b0b0', textAlign: 'center' }]}>
                                Create new dishes for your menu
                            </Text>
                        </View>
                        <View style={[styles.switchContainer, { alignSelf: "center" }]}>
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

                        <TextInput
                            style={hasErrors && (itemName.length === 0 || itemName.length > 20) ? styles.inputStyleError : styles.inputStyle}
                            placeholder="Name of dish"
                            placeholderTextColor={"#b0b0b0"}
                            value={itemName}
                            onChangeText={setItemName}
                        />
                        {hasErrors && itemName.length === 0 && (
                            <Text style={styles.errorText}>Please enter a name</Text>
                        )}
                        {hasErrors && itemName.length > 20 && (
                            <Text style={styles.errorText}>Please enter only up to 20 characters for the name</Text>
                        )}

                        <TextInput
                            style={hasErrors && (itemDesc.length === 0 || itemDesc.length > 40) ? styles.inputStyleError : styles.inputStyle}
                            placeholder="Dish description"
                            placeholderTextColor={"#b0b0b0"}
                            value={itemDesc}
                            onChangeText={setItemDesc}
                        />
                        {hasErrors && itemDesc.length === 0 && (
                            <Text style={styles.errorText}>Please enter a description</Text>
                        )}
                        {hasErrors && itemDesc.length > 40 && (
                            <Text style={styles.errorText}>Please enter only up to 40 characters for the description</Text>
                        )}

                        <TextInput
                            style={hasErrors && (!itemPrice || isNaN(parseInt(itemPrice)) || parseInt(itemPrice) <= 0) ? styles.inputStyleError : styles.inputStyle}
                            placeholder="Price of dish"
                            placeholderTextColor={"#b0b0b0"}
                            value={itemPrice}
                            onChangeText={setItemPrice}
                            keyboardType="numeric"
                        />
                        {hasErrors && (!itemPrice || isNaN(parseInt(itemPrice)) || parseInt(itemPrice) <= 0) && (
                            <Text style={styles.errorText}>Please enter a valid price</Text>
                        )}

                        <View style={styles.container}>
                            <Pressable style={styles.pressableButton} onPress={addItem}>
                                <Text style={styles.textStyle}>Confirm</Text>
                            </Pressable>
                        </View>

                        <View style={styles.container}>
                            <Pressable style={styles.pressableButton} onPress={populateTestData}>
                                <Text style={styles.textStyle}>Populate test data</Text>
                            </Pressable>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </GestureHandlerRootView>
        </SafeAreaView>
    );
}