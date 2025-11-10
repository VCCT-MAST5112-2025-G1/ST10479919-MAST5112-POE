import React, { useState, useRef } from "react";
import {
  Animated,
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
import { useMenu } from "../services/MenuContext";
import { menuData, } from "../services/menuItems";
import { ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

type Props = BottomTabScreenProps<RootTabParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const { menuList } = useMenu();

  const menuLength = menuList.length
  const totalCost = menuList.reduce((total, item) => total + item.Price, 0)

  const [refresh, setRefresh] = useState(0)

  // Refresh screen on focus
  useFocusEffect(
    React.useCallback(() => {
      setRefresh(prev => prev + 1);
    }, [])
  );


  const fadeAniHandle = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAniHandle, { toValue: 1, duration: 300, useNativeDriver: true }).start()
      return () => {
        fadeAniHandle.setValue(0);
      }
    }, [])
  )

  return (


    <SafeAreaView style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Animated.View style={{ opacity: fadeAniHandle, flex: 1 }}>
          <View style={{ alignSelf: "center" }}>
            <Image source={require("../../assets/img/Frame.png")} />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            <Text style={styles.titleText}>The Cookbook</Text>
          </View>

          {/* Check to see if items are added */}
          {menuLength == 0 ? (
            <Text style={styles.textStyle}>
              First add some items from the "Add Items" menu{'\n\n'}
              Then go to the "Menu" screen to add items to the course!
            </Text>
          ) : (
            <>
              <Text style={styles.titleText}>Items in your list</Text>
              <Text style={categoryStyle.price}>Total cost: R{totalCost}</Text>
              {menuList.map((item, index) => (
                <View key={index}
                  style={{
                    backgroundColor: "#2a2a2a",
                    padding: 15,
                    borderRadius: 10,
                    marginBottom: 8,
                    width: "100%",
                  }}
                >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                    <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "600", }}>
                      {item.Name}
                    </Text>

                    <Text style={{ color: "#F8BD06", fontSize: 16, fontWeight: "600", }}>
                      R{item.Price}
                    </Text>

                  </View>

                  <Text style={{ color: "#cccccc", fontSize: 14, marginTop: 4 }}>
                    {item.Description}
                  </Text>

                  <Text style={{ color: "#888888", fontSize: 12, marginTop: 6, fontStyle: "italic", }}>
                    {item.Type}
                  </Text>
                </View>
              ))}
              )
            </>
          )}


        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}