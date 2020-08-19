import React, { FunctionComponent as Component, useState } from "react"
import { TextInput } from "react-native"
import { color } from "../../theme"
import { sizes } from "../../theme/fonts/size"
import { Block } from "../Block/Block"
import { Button } from "../Button/Button"
import { Typography } from "../Text/Text"

import { inputStyles as styles } from "./Input.styles"

export interface InputProps {
  label?
  error?
  secure?
  rightLabel?
  rightStyle?
  onRightPress?
  email?
  phone?
  number?
  style?
}

export const Input: Component<InputProps> = props => {
  const [toggleSecure, setToggleSecure] = useState(false)
  
  const renderLabel = () => {
    const { label, error } = props;

    return (
      <Block flex={false}>
        {label ? <Typography gray={!error} accent={error}>{label}</Typography> : null}
      </Block>
    )
  }

  const renderToggle = () => {
    const { secure, rightLabel } = props;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}
        color='none'
      >
        {
          rightLabel ? rightLabel : <></>
            // <Ionicons
            //   color={theme.colors.black}
            //   size={theme.sizes.font * 1.35}
            //   name={!toggleSecure ? "md-eye" : "md-eye-off"}
            // />
        }
      </Button>
    );
  }

  const renderRight = () => {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  const {
    email,
    phone,
    number,
    secure,
    error,
    style,
  } = props;

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && { borderColor: color.accent },
    style,
  ];

  const inputType = email
    ? 'email-address' : number
    ? 'numeric' : phone
    ? 'phone-pad' : 'default';


  return (
    <Block flex={false}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        // autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
          {...props}
        />
      {renderToggle()}
      {renderRight()}
    </Block>
  )
}
