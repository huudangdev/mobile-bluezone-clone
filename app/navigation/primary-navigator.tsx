import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { WelcomeScreen } from "../screens"
import { LoginScreen } from "../screens/Login-screen"
import { ScanScreen } from "../screens/Scan-screen"

export type PrimaryParamList = {
  welcome: undefined
  login: undefined
  scan: undefined
}

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 17,
        },
        headerStyle: {
          backgroundColor: '#4ca3dd',
        }
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="scan" component={ScanScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["welcome", "login", "scan"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
