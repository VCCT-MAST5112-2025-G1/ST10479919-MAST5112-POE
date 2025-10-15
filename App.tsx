import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigator from './src/navigation/AppNavigator'
import { MenuProvider } from "./src/services/MenuContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}