import React, { FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"
import { LineChart, Path } from "react-native-svg-charts"
import { Line } from "react-native-svg";
import { Block, Button, Typography } from "../components"
import * as shape from 'd3-shape';
import { AnimatedCircularProgress } from "react-native-circular-progress"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { sizes } from "../theme/fonts/size"
import { useNavigation } from "@react-navigation/native"

const { width, height } = Dimensions.get("window")
const backgroundPath = require("../../assets/images/Vector.png")

const icons = {
  online: require("../../assets/icons/online.png"),
  offline: require("../../assets/icons/offline.png"),
}

const chart = [
  4.5,
  5,
  5,
  5.3,
  5.2,
  5,
  5.2,
  5.2,
  5.5,
  5.2,
  4.8,
  5.8,
  4.8,
  4.9,
  4.1,
  5.1,
  5
];

export const ScanScreen: Component = observer(function ScanScreen() {
  const [isOn, setIsOn] = useState(false)
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [connected, setConnected] = useState(false)

  const handleScan = () => {
    setConnected(!connected)
    setIsOn(!isOn)
  }

  const renderChart = () => {
    const LineShadow = ({ line }) => (
      <Path
        d={line}
        fill="none"
        stroke={color.primary}
        strokeWidth={7}
        strokeOpacity={0.07}
      />
    );

    return (
      <LineChart
        yMin={0}
        yMax={7}
        data={chart}
        style={{ flex: 2 }}
        curve={shape.curveMonotoneX}
        svg={{
          stroke: color.accent,
          strokeWidth: 1.25
        }}
        contentInset={{ left: sizes.base, right: sizes.base }}
      >
        {/* <LineShadow /> */}
        <Line
          key="zero-axis"
          x1="0%"
          x2="100%"
          y1="35%"
          y2="35%"
          stroke={color.gray}
          strokeDasharray={[2, 10]}
          strokeWidth={1}
        />
      </LineChart>
    );
  }

  return !isOn ? (
    <Block center>
      <Block flex={1} style={{ paddingTop: 100 }}>
        <Typography h1 light>
          Cộng đồng BlueZone
        </Typography>
      </Block>

      <Block
        center
        flex={2}
        style={{ marginBottom: 0, marginLeft: 50, marginRight: 50, marginTop: 0 }}
      >
        <Image style={styles.image} source={icons[connected ? "online" : "offline"]} />

        <Button color="#4ca3dd" shadow onPress={() => handleScan()}>
          <Typography caption center bold white={!connected}>
            {connected ? "NGƯNG KẾT NỐI" : "BẮT ĐẦU QUÉT"}
          </Typography>
        </Button>
      </Block>
    </Block>
  ) : (
    <ImageBackground
      source={backgroundPath}
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
    <Block style={styles.dashboard}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Typography light>Cộng đồng</Typography>
        <Typography h1>BlueZone</Typography>
        <Image style={styles.image1} source={icons[connected ? "online" : "offline"]} />
      </Block>
      <Block>
        <Typography h1 light color={color.accent}>Nhiệt độ của bạn | C`</Typography>
        {renderChart()}
      </Block>
      <Block center>
          <AnimatedCircularProgress
            size={150} // can use  with * .5 => 50%
            fill={100} // percentage
            lineCap="round" // line ending style
            arcSweepAngle={360}
            width={sizes.base}
            tintColor={color.primary} // gradient is not supported :(
            backgroundColor={color.gray2}
            backgroundWidth={sizes.base / 2}
          >
            {() => (
              <Block center middle>
                <Typography h3 small>
                  8 người
                </Typography>
                <Typography h3 small>
                  tiếp xúc gần
                </Typography>
              </Block>
            )}
          </AnimatedCircularProgress>
          <Block padding={10}/>
          <AnimatedCircularProgress
            size={150} // can use  with * .5 => 50%
            fill={100} // percentage
            lineCap="round" // line ending style
            arcSweepAngle={360}
            width={sizes.base}
            tintColor={color.primaryDarker} // gradient is not supported :(
            backgroundColor={color.gray2}
            backgroundWidth={sizes.base / 2}
          >
            {() => (
              <Block center middle>
                <Typography h3 small>
                  10 người
                </Typography>
                <Typography h3 small>
                  tiếp xúc
                </Typography>
              </Block>
            )}
          </AnimatedCircularProgress>
        </Block>
    </Block>
    </ImageBackground>
  )
})

const styles = StyleSheet.create({
  connect: {
    width: sizes.base / 2,
  },
  connected: {
    borderColor: color.black,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20,
  },
  image1: {
    width: 50,
    height: 50,
    top: -50,
    left: width - 110,
  },
  status: {
    width: sizes.base,
    height: sizes.base,
    marginLeft: sizes.base,
  },
  dashboard: {
    flex: 1,
    padding: sizes.base * 2,
    marginBottom: sizes.base * 6,
  },
  header: {
    paddingTop: height / 15,
  }
})
