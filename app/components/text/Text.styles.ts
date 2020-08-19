import { StyleSheet } from "react-native"
import { color } from "../../theme"
import { fonts } from "../../theme/fonts/font"
import { sizes } from "../../theme/fonts/size"

export const textStyles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: color.black
  },
  // variations
  regular: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  semibold: {
    fontWeight: '500'
  },
  medium: {
    fontWeight: '500'
  },
  light: {
    fontWeight: '200'
  },
  // position
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  // colors
  accent: { color: color.accent },
  primary: { color: color.primary },
  secondary: { color: color.secondary },
  tertiary: { color: color.tertiary },
  black: { color: color.black },
  white: { color: color.white },
  gray: { color: color.gray },
  gray2: { color: color.gray2 },
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
})
