import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Alert
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, categoryStyle } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";
import { menuData, resetMenuAdded } from "../services/menuItems";
import { ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

type Props = BottomTabScreenProps<RootTabParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const menuLength = menuData.Starter.length + menuData.Main.length + menuData.Dessert.length
  const totalCost = menuData.Starter.reduce((total, item) => total + item.Price, 0) +
    menuData.Main.reduce((total, item) => total + item.Price, 0) +
    menuData.Dessert.reduce((total, item) => total + item.Price, 0)
  const [refresh, setRefresh] = useState(0)

  // Refresh screen on focus
  useFocusEffect(
    React.useCallback(() => {
      setRefresh(prev => prev + 1);
    }, [])
  );

  const resetMenuList = () => {
    Alert.alert(
      'Are you sure?',
      'This is NOT reversible',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setRefresh(prev => prev + 1)
            menuData.Starter = []
            menuData.Main = []
            menuData.Dessert = []
            Alert.alert("Items reset", "All items removed from menu")
          }
        },
      ],
      {
        cancelable: true,
      }
    );
  }


  return (

    <SafeAreaView style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ alignSelf: "center" }}>
          <Image source={require("../../assets/img/Frame.png")} />
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          <Text style={styles.titleText}>The Cookbook</Text>
        </View>

        {/* Check to see if items are added */}
        {menuLength == 0 ? (
          <Text style={styles.textStyle}>
            Add some items from the menu to prepare a course!
          </Text>
        ) : (
          <>
            <Text style={styles.titleText}>All Menu Items: {menuLength}</Text>
            <Text style={[categoryStyle.price, { marginBottom: 20 }]}>Total cost: R{totalCost}</Text>

            {/* Starters Section */}
            {menuData.Starter.length > 0 ? (
              <View style={styles.card}>
                <Text style={styles.headerText}>Starters</Text>
                {menuData.Starter.map((item, index) => (
                  <View key={index} style={[categoryStyle.categories, { marginBottom: 10 }]}>
                    <Text style={categoryStyle.name}>{item.Name}</Text>
                    <Text style={categoryStyle.description}>{item.Description}</Text>
                    <Text style={categoryStyle.price}>R{item.Price}</Text>
                  </View>
                ))}
              </View>
            ) : null}

            {/* Mains Section */}
            {menuData.Main.length > 0 ? (
              <View style={styles.card}>
                <Text style={styles.headerText}>Mains</Text>
                {menuData.Main.map((item, index) => (
                  <View key={index} style={[categoryStyle.categories, { marginBottom: 10 }]}>
                    <Text style={categoryStyle.name}>{item.Name}</Text>
                    <Text style={categoryStyle.description}>{item.Description}</Text>
                    <Text style={categoryStyle.price}>R{item.Price}</Text>
                  </View>
                ))}
              </View>
            ) : null}

            {/* Desserts Section */}
            {menuData.Dessert.length > 0 ? (
              <View style={styles.card}>
                <Text style={styles.headerText}>Desserts</Text>
                {menuData.Dessert.map((item, index) => (
                  <View key={index} style={[categoryStyle.categories, { marginBottom: 10 }]}>
                    <Text style={categoryStyle.name}>{item.Name}</Text>
                    <Text style={categoryStyle.description}>{item.Description}</Text>
                    <Text style={categoryStyle.price}>R{item.Price}</Text>
                  </View>
                ))}
              </View>
            ) : null}

            <Pressable style={[styles.pressableButton, { width: '50%', alignSelf: "center", backgroundColor: '#FF4444' }]} onPress={() => { resetMenuList() }}>
              <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>Reset Menu</Text>
            </Pressable>
          </>
        )}


      </ScrollView>
    </SafeAreaView>
  );
}