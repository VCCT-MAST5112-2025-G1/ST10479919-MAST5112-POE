import React, { useState } from "react";
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable,
    BackHandler,
    Button,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuType, menuData, MENU } from "../services/menuItems";
import { styles } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";


type Props = BottomTabScreenProps<RootTabParamList, "Home">

export default function HomeScreen({ navigation }: Props) {

    const [selectedItem, setSelectedItem] = useState<menuType>("Starter");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

            </View>

        </SafeAreaView >
    );
}
