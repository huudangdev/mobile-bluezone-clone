import React, { FunctionComponent as Component } from "react"
import { Animated, View } from "react-native"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { blockStyles as styles } from "./Block.styles"

export interface BlockProps {
  flex?,
  row?,
  column?,
  center?,
  middle?,
  left?,
  right?,
  top?,
  bottom?,
  card?,
  shadow?,
  color?,
  space?,
  padding?,
  margin?,
  animated?,
  wrap?,
  style?,
  children?,
}


export const Block: Component<BlockProps> = props => {
  const handleMargins = () => {
    const { margin } = props
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      }
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          }
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1]
          }
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1]
          }
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3]
          }
      }
    }
  }

  const handlePaddings = () => {
    const { padding } = props
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      }
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          }
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          }
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          }
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          }
      }
    }
  }

  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
  } = props

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    shadow && styles.shadow,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style // rewrite predefined styles
  ]

  if (animated) {
    return (
      <Animated.View style={blockStyles} {...props}>
        {children}
      </Animated.View>
    )
  }


  return (
    <View style={blockStyles} {...props}>
        {children}
    </View>
  )
}
