import { StyleSheet } from "react-native"
import { color,  } from "../../theme"
import { sizes } from "../../theme/fonts/size"

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: 'center',
    marginVertical: sizes.padding / 3
  },
  shadow: {
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: color.accent },
  primary: { backgroundColor: color.primary },
  secondary: { backgroundColor: color.secondary },
  tertiary: { backgroundColor: color.tertiary },
  black: { backgroundColor: color.black },
  white: { backgroundColor: color.white },
  gray: { backgroundColor: color.gray },
  gray2: { backgroundColor: color.gray2 },
})
