import React, { FunctionComponent as Component } from "react"
import { Text } from "react-native"
import { textStyles as styles } from "./Text.styles"

export interface TextProps {
  h1?,
  h2?,
  h3?,
  title?,
  body?,
  caption?,
  small?,
  size?,
  transform?,
  align?,
  // styling
  regular?,
  bold?,
  semibold?,
  medium?,
  weight?,
  light?,
  center?,
  right?,
  spacing?, // letter-spacing
  height?, // line-height
  // colors
  color?,
  accent?,
  primary?,
  secondary?,
  tertiary?,
  black?,
  white?,
  gray?,
  gray2?,
  style?,
  children?,
}

export const Typography: Component<TextProps> = props => {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    gray2,
    style,
    children,
  } = props

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    size && { fontSize: size },
    transform && { textTransform: transform },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && { color },
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style // rewrite predefined styles
  ]

  return (
    <Text style={textStyles} {...props}>
     {children}
    </Text>
  )
}
