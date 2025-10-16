import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, categoryStyle } from "../styles/styles";
import { RootTabParamList } from "../navigation/AppNavigator";
import { useMenu } from "../services/MenuContext";
import { ScrollView } from "react-native";

type Props = BottomTabScreenProps<RootTabParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const { menuList } = useMenu();
  const menuListLen = menuList.length;
  const totalCost = menuList.reduce((total, item) => total + item.Price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center", padding: 10 }}>
          <Image source={require("../../assets/img/Frame.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
            {menuList.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#2a2a2a",
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 8,
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.Name}
                  </Text>
                  <Text
                    style={{
                      color: "#F8BD06",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    R{item.Price}
                  </Text>
                </View>
                <Text style={{ color: "#cccccc", fontSize: 14, marginTop: 4 }}>
                  {item.Description}
                </Text>
                <Text
                  style={{
                    color: "#888888",
                    fontSize: 12,
                    marginTop: 6,
                    fontStyle: "italic",
                  }}
                >
                  {item.Type}
                </Text>
              </View>
            ))}
            )
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
