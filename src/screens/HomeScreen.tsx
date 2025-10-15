import React, { useState, useEffect } from "react";
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
import { styles, categoryStyle } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";
import { useMenu } from '../services/MenuContext'
import { ScrollView } from 'react-native';

type Props = BottomTabScreenProps<RootTabParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {

    const { menuList } = useMenu();
    const menuListLen = menuList.length;
    const totalCost = menuList.reduce((total, item) => total + item.Price, 0)

  return (
    <SafeAreaView style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Text style={styles.textStyle}>Welcome to </Text>
        <Text style={styles.titleText}>The cookbook</Text>
    </View>

      {menuListLen === 0 ? (
        <Text style={styles.textStyle}>
          Add some items from the menu to prepare a course!
        </Text>
      ) : (
        <>
          <Text style={styles.titleText}>Items in your list</Text>  
        <Text style={categoryStyle.price}>Total cost: R{totalCost}</Text>
          {menuList.map((item, index) => {
            return (
              <View key={index} style={categoryStyle.categories}>
                <View style={categoryStyle.categories}>
                <Text style={categoryStyle.name}>{item.Name}</Text>
                <Text style={categoryStyle.description}>
                  {item.Description}
                </Text>
                </View>
                <Text style={categoryStyle.price}>R{item.Price}</Text>
              </View>
            )}
          )}
        </>
      )}
      </ScrollView>
    </SafeAreaView>
  );
}
