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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/AppNavigator";
import { styles } from "../styles/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

export default function MenuScreen({ navigation }: Props) {



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.switchContainer}>
                <Pressable
                    style={styles.pressableButton}
                >
                    <Text style={styles.buttonText}>Starter</Text>
                </Pressable>
                <Pressable
                    style={styles.pressableButton}
                >
                    <Text style={styles.buttonText}>Main</Text>
                </Pressable>
                <Pressable
                    style={styles.pressableButton}
                >
                    <Text style={styles.buttonText}>Dessert</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Text>
                    Blah
                </Text>
            </View>
        </SafeAreaView>
    );
}