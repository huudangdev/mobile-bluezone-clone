import { StyleSheet } from "react-native"

export const progressStyles = StyleSheet.create({
  background: {
    height: 6,
    marginVertical: 8,
    borderRadius: 8
  },
  overlay: {
    height: 14,
    maxHeight: 14,
    borderRadius: 7,
    paddingHorizontal: 4
  },
  active: {
    marginTop: 4,
    height: 6,
    maxHeight: 6,
    borderRadius: 7
  }
});
