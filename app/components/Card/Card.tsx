import React, { FunctionComponent as Component } from "react"
import { color } from "../../theme";
import { Block } from "../Block/Block"
import { cardStyles as styles } from "./Card.styles"

export interface CardProps {
  colors?
  style?
  shadow?
  children?
}

export const Card: Component<CardProps> = props => {
  const { colors, style, children, shadow } = props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={colors || color.white} style={cardStyles} shadow {...props}>
        {children}
      </Block>
    );
}
