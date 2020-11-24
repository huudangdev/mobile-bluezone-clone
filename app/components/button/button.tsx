import React, { FunctionComponent as Component } from "react"
import { TouchableOpacity } from "react-native"
// import {LinearGradient} from 'expo-linear-gradient'
import LinearGradient from "react-native-linear-gradient"
import { buttonStyles as styles } from "./Button.styles"
import { color } from "../../theme"

export interface ButtonProps {
  style?
  opacity?
  gradient?
  color?
  startColor?
  endColor?
  end?
  start?
  locations?
  shadow?
  children?
  onPress?
}

export const Button: Component<ButtonProps> = props => {
  const {
    style,
    opacity,
    gradient,
    color,
    startColor,
    endColor,
    end,
    start,
    locations,
    shadow,
    children,
  } = props

  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ]

  if (gradient) {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...props}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity || 0.8} {...props}>
        {children}
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  startColor: color.primary,
  endColor: color.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: color.white,
}
