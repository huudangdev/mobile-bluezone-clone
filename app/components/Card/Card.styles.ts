import { StyleSheet } from "react-native"
import { color } from "../../theme"
import { sizes } from "../../theme/fonts/size";

export const cardStyles = StyleSheet.create({
  card: {
    borderRadius: sizes.radius,
    padding: sizes.base + 4,
    marginBottom: sizes.base
  },
  shadow: {
    shadowColor: color.black,
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 13
  }
});
