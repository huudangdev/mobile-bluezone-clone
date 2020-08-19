import React, { FunctionComponent as Component } from "react"
import { StyleSheet } from "react-native"
import { Block } from "../Block/Block"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { badgeStyles as styles } from "./Badge.styles"

export interface BadgeProps {
  children?
  style?
  size?
  color?
}

export const Badge: Component<BadgeProps> = props => {
  const { children, style, size, color } = props

  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ])

  return (
    <Block flex={false} middle center color={color} style={badgeStyles} {...props}>
      {children}
    </Block>
  )
}
