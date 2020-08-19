import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import moment from "moment"
import { Block, Button, Typography } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { sizes } from "../theme/fonts/size"
import { useNavigation } from "@react-navigation/native"
import { Card } from "../components/Card/Card"
// import { Progress } from "../components/Progress/Progress";

const { width, height } = Dimensions.get("window")

const backgroundPath = require("../../assets/images/Vector.png")
const avatar = require("../../assets/images/avatar.png")

export const BrowseScreen: Component = observer(function BrowseScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  const renderMonthly = () => {
    return (
      <Card shadow colors="#00cdcd">
        <Image
          resizeMode="contain"
          source={require("../../assets/icons/More.png")}
          style={styles.moreIcon}
        />
        <Block>
          <Block center>
            <Typography h1 color="#4ca3dd" spacing={1.7}>
              11 người
            </Typography>
            <Typography spacing={0.7}>Bạn đã tiếp xúc tính đến thời điểm này</Typography>
          </Block>

          <Block color="gray3" style={styles.hLine} />
        </Block>
      </Card>
    )
  }

  const renderRewards = () => {
    return (
      <Card shadow style={{ paddingVertical: sizes.base * 2 }}>
        <Block center>
          <AnimatedCircularProgress
            size={214} // can use  with * .5 => 50%
            fill={85} // percentage
            lineCap="round" // line ending style
            rotation={220}
            arcSweepAngle={280}
            width={sizes.base}
            tintColor={color.primary} // gradient is not supported :(
            backgroundColor={color.gray2}
            backgroundWidth={sizes.base / 2}
          >
            {() => (
              <Block center middle>
                <Typography h2 medium>
                  8.1
                </Typography>
                <Typography h3 transform="uppercase">
                  good
                </Typography>
              </Block>
            )}
          </AnimatedCircularProgress>
        </Block>

        <Block center>
          <Typography title spacing={1} style={{ marginVertical: 8 }}>
            Tình trạng tiếp xúc
          </Typography>
          <Typography>
            <Typography primary>Không có </Typography>
            <Typography gray transform="uppercase">
              nguy cơ lây nhiễm
            </Typography>
          </Typography>
        </Block>

        <Block color="gray3" style={styles.hLine} />

        <Block color="gray3" style={styles.hLine} />

        <Block color="gray3" style={styles.hLine} />

        <Block row center space="between">
          <Typography>Cập nhật lúc</Typography>
          <Typography size={20} spacing={1} color="#4ca3dd">
            {moment().format("D MMM, YYYY")}
          </Typography>
        </Block>
        <Block row center space="between">
          <Typography>Mã người dùng</Typography>
          <Typography size={20} spacing={1} color="#4ca3dd">
              MXAE12931
          </Typography>
        </Block>
      </Card>
    )
  }

  return (
    <ImageBackground
      source={backgroundPath}
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Typography h1 light>
            Chào buổi sáng, Đăng !
          </Typography>
          <Button
            onPress={() => navigation.navigate("Settings")}
            color="none"
            style={{ top: -35, left: width - 100 }}
          >
            <Image source={avatar} style={styles.avatar} />
          </Button>
        </Block>

        <ScrollView style={styles.rewards} showsVerticalScrollIndicator={false}>
          {renderMonthly()}
          {renderRewards()}
          <Block center>
            <Image
              source={require("../../assets/images/templates.png")}
              style={{ height: 150, width: 200 }}
            />
          </Block>
        </ScrollView>
      </Block>
    </ImageBackground>
  )
})

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2,
    paddingTop: height / 15,
  },
  avatar: {
    height: sizes.base * 2.2,
    width: sizes.base * 2.2,
    borderRadius: 30,
  },
  tabs: {
    borderBottomColor: color.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth, // for iOS : StyleSheet.hairLineWidth
    marginVertical: sizes.base,
    marginHorizontal: sizes.base * 2,
  },
  tab: {
    marginRight: sizes.base * 2,
    paddingBottom: sizes.base,
  },
  active: {
    borderBottomColor: color.secondary,
    borderBottomWidth: 3,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxHeight: (width - sizes.padding * 2.4 - sizes.base) / 2,
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: sizes.base * 2,
    marginBottom: sizes.base * 3.5,
  },
  ludwig: {
    position: "relative",
    paddingLeft: 1,
    borderLeftWidth: 0.2,
    fontSize: sizes.header,
    fontWeight: "100",
  },
  rewards: {
    padding: sizes.padding,
    // backgroundColor: color.gray,
  },
  // horizontal line
  hLine: {
    marginVertical: sizes.base * 1.5,
    height: 1,
  },
  // vertical line
  vLine: {
    marginVertical: sizes.base / 2,
    width: 1,
  },
  moreIcon: {
    width: 16,
    height: 17,
    position: "absolute",
    right: sizes.base,
    top: sizes.base,
  },
})
