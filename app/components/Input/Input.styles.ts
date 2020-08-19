import { ViewStyle, TextStyle, StyleSheet } from "react-native"
import { color } from "../../theme"
import { sizes } from "../../theme/fonts/size";

export const inputStyles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.black,
    borderRadius: sizes.radius,
    fontSize: sizes.font,
    fontWeight: '500',
    color: color.black,
    height: sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: sizes.base * 2,
    height: sizes.base * 2,
    top: sizes.base,
    right: 0,
  }
});
