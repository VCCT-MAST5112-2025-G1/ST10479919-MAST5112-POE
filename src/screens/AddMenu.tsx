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

type Props = NativeStackScreenProps<RootStackParamList, "Add">;

export default function AddMenu({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Hello world!
            </Text>
        </SafeAreaView>
    );
}