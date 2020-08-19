import { useNavigation } from "@react-navigation/native"
import React, { FunctionComponent as Component, useState } from "react"
import { Animated, Dimensions, FlatList, Image, StyleSheet, Modal, ScrollView } from "react-native"
import { Block, Button, Screen, Typography } from "../components"
import { color } from "../theme"

const { width, height } = Dimensions.get('window')

import { sizes } from "../theme/fonts/size"

export const WelcomeScreen: Component = (props) => {
  const illustrations = [
    { id: 1, source: require('../../assets/images/multi-task.png') },
    { id: 2, source: require('../../assets/images/growing.png') },
    { id: 3, source: require('../../assets/images/illustration.png') },
  ]
  const logo = require('../../assets/images/logo.png')

  // Pull in navigation via hook
  const navigation = useNavigation()

  const [showTerms, setShowTerms] = useState(false)
  const scrollX = new Animated.Value(0)

  const handleText: Function = (index) => {
    if (index === 0) {
      return (
        <Block style={{top: height / 2.5}}>
        <Typography h2 primary light>BẢO MẬT 
          <Typography h2 light> dữ liệu</Typography>
        </Typography>
        </Block>
      )
    } else
    if (index === 1) {
      return (
        <Block style={{top: height / 2.5}}>
        <Typography light h2>
          Không <Typography h2 light primary>thu thập</Typography> vị trí
        </Typography>
        </Block>
      )
    } else
    if (index === 2) {
      return (
        <Block style={{top: height / 2.5}}>
        <Typography light h2 primary>Minh bạch
          <Typography h2 light> theo giấy phép GPL 3.0</Typography>
        </Typography>
        </Block>
      )
    }
    return 0
  }

  const renderTermsServices = () => {
    return (
      <Modal animationType='slide' visible={showTerms}>
        <Block space='between' style={{paddingBottom: 50, paddingLeft: 25, paddingRight: 25, paddingTop: 50}}>
          <Typography h2 light>Điều khoản và dịch vụ</Typography>

          <ScrollView style={{ marginVertical: sizes.padding }}>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            1. Bluezone, ứng dụng bảo vệ cộng đồng, phòng chống dịch Covid-19 của Công ty BKAV đã được Bộ Thông tin và Truyền thông, Bộ Y Tế ra mắt chính thức.
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            Đây là ứng dụng sử dụng công nghệ định vị Bluetooth năng lượng thấp, viết tắt là BLE (Bluetooth low energy). Các smartphone được cài đặt Bluezone có thể giao tiếp với nhau ở khoảng cách 2 mét, ghi nhận sự tiếp xúc gần, tiếp xúc vào lúc nào và trong bao lâu.
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            Điều này sẽ giúp người dùng biết được và kiểm soát các tiếp xúc gần nếu phát hiện ca nhiễm Covid-19 F0. Cụ thể, trong quá trình sinh hoạt hàng ngày, khi người dùng có tiếp xúc, ứng dụng Bluezone trên điện thoại của họ sẽ tự "giao tiếp" với nhau. Nếu có tiếp xúc gần trong khoảng cách 2m. Thiết bị sẽ tự động ghi nhận vào nhật ký.            
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            2. Cài đặt: ứng dụng Bluezone đang có mặt trên hai nền tảng di động phổ biến nhất đó là iOS và Android.
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            Sau khi tải về, ứng dụng Bluezone sẽ yêu cầu bạn cho phép ứng dụng sử dụng Bluetooth để ghi nhận tiếp xúc với những ai trong cộng đồng sử dụng Bluezone rồi. Nếu chưa bật Bluetooth bạn hãy kéo thanh thông báo trạng thái và bật Bluetooth hoặc vào Cài Đặt > chọn Bluetooth và bật lên
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            Bạn cũng nên cho phép Bluezone gửi thông báo và sử dụng vị trí trên ứng dụng. Để nếu người bạn tiếp xúc hoặc có bất kỳ ca nhiễm mới nào nhiễm Covid-19. Ứng dụng sẽ ngay lập tức gửi thông tin đến bạn.
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            3. Bấm Quét xung quanh để nhận diện xem có ai đang sử dụng Bluezone không. Bạn sẽ có một mã BluezoneID của mình ở trong mục này, mỗi thiết bị sẽ có một mã BluezoneID này. Nếu có người ở gần bạn (dưới 2m) sử dụng bluezone, ứng dụng sẽ tự động nhận diện những người dùng này và xếp vào trong danh sách đã tiếp xúc.
            </Typography>
            <Typography caption gray height={24} style={{ marginBottom: sizes.base }}>
            Ở mục lịch sử tiếp xúc cũng sẽ ghi nhận số người cùng sử dụng bluezone mà bạn đã tiếp xúc. Còn mục Tiếp xúc gần là bạn đứng gần những người dưới 2 mét.            
            </Typography>
          </ScrollView>

          <Block middle>
            <Button color='#4ca3dd' onPress={() => setShowTerms(false)}>
              <Typography center white>Đồng ý</Typography>
            </Button>
          </Block>
        </Block>
      </Modal>
    )
  }

  const renderIllustrations = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment='center'
        data={illustrations}
        // extraDate={state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item, index }) => (
          <Block center>
            {handleText(index)}
            <Image
              source={item.source}
              resizeMode='contain'
              style={{ width, height: height / 2, overflow: 'visible', flex: 0.8 }}
            />
          </Block>
        )}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { x: scrollX } }
          }])
        }
      />
    )
  }

  return (
    <Screen>
    <Block center bottom flex={0.3}>
      <Typography h1 center light color={color.palette}>
        B L U E Z O N E.
        <Typography h3 color="#4ca3dd"> decoding.</Typography>
      </Typography>
      <Typography h3 secondary style={{ marginTop: sizes.padding / 2 }}>
        {/* Bảo vệ bạn & cộng đồng. */}
      </Typography>
    </Block>
    <Block center middle>
      {renderIllustrations()}
      {/* {renderLogo()} */}
      <Image 
        source={logo}
        resizeMode='contain'
        style={{ flex: 0.1, borderWidth: 1, borderColor: '#fff' }}
      />
    </Block>
    <Block middle flex={0.5} style={{marginBottom: 0, marginLeft: 50, marginRight: 50, marginTop: 0}}>
      <Button color="#4ca3dd" onPress={() => navigation.navigate('login')}>
        <Typography center semibold white>ĐĂNG NHẬP</Typography>
      </Button>
      {/* <Button shadow onPress={() => navigation.navigate('Login')}>
        <Typography center semibold>I already have an account</Typography>
      </Button> */}
      <Button onPress={() => setShowTerms(true)} color='none'>
        <Typography center caption gray>Điều khoản và dịch vụ</Typography>
      </Button>
      {renderTermsServices()}
    </Block>
    </Screen>
  )
}

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
})