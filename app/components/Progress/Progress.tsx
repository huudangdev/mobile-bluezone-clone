import React, { FunctionComponent as Component } from "react"
import { View } from "react-native"
import { Text } from "../"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { progressStyles as styles } from "./Progress.styles"

export interface ProgressProps {}


export const Progress: Component<ProgressProps> = props => {
  

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>Hi Func</Text>
    </View>
  ))
}


