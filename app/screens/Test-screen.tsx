import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, Text, View } from "react-native"
import { Button, Screen } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const TestScreen: Component = observer(function TestScreen() {
  console.log("Testing")
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()
  
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View>
      <Button><Text>Click</Text></Button>
    </View>
  )
})
