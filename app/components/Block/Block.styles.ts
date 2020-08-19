import { StyleSheet } from "react-native"
import { color } from "../../theme"
import { sizes } from "../../theme/fonts/size"

export const blockStyles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: sizes.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13
  },
  accent: { backgroundColor: color.accent },
  primary: { backgroundColor: color.primary },
  secondary: { backgroundColor: color.secondary },
  tertiary: { backgroundColor: color.tertiary },
  black: { backgroundColor: color.black },
  white: { backgroundColor: color.white },
  gray: { backgroundColor: color.gray },
  gray2: { backgroundColor: color.gray2 },
});