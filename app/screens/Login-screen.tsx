import React, { FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet } from "react-native"
import { Block, Button, Typography, Input } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { sizes } from "../theme/fonts/size"
const { height } = Dimensions.get('window')

export const LoginScreen: Component = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  
  // Pull in navigation via hook
  const navigation = useNavigation()

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const backgroundPath = require('../../assets/images/Vector.png')

  const hasErrors = key => errors.includes(key) ? styles.hasErrors : null
  const handleLogin = () => {
    navigation.replace('tabStack')
  }

  return (
    <ImageBackground
      source={backgroundPath}
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
    >
      <KeyboardAvoidingView behavior='padding' style={styles.login}>
        <Block>
          <Typography h1 light>ĐĂNG  NHẬP</Typography>
          <Block middle>
            <Input
              label='Phone'
              error={hasErrors('phone')}
              style={[styles.input, hasErrors('phone')]}
            />
            {/* <Input
              secure
              label='Password'
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              // defaultValue={password}
              // onChangeText={text => setPassword(text)}
            /> */}
            <Button color='#4ca3dd' onPress={() => handleLogin()}>
              {loading
                ? <ActivityIndicator size='small'/>
                : <Typography bold white center>Tiếp tục</Typography>}
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
})

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: color.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  login: {
    paddingHorizontal: sizes.base * 2,
    paddingTop: height / 15,
    flex: 1,
    justifyContent: 'center'
  },
  hasErrors: {
    borderBottomColor: color.accent
  }
})
