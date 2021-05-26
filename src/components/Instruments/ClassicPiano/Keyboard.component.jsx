import React, { useState, useEffect } from 'react'
import {
  KeyboardWrapper,
  WhiteKeyField,
  BlackKeyField,
} from './Keyboard.styles'
import { BlackKey, Key } from './Key.component'
import { whiteConfig, blackConfig, keyConfig } from './Key.config'

export const Keyboard = () => {
  const [pressed, setPressed] = useState([])

  const onKeyPressed = (e) => {
    // console.log(e.keyCode)
    if (pressed.includes(e.keyCode)) return
    setPressed([...pressed, e.keyCode]) //spreading
  }
  const onKeyReleased = (e) => {
    // console.log(e.keyCode)
    setPressed(pressed.filter((el) => el !== e.keyCode))
  }

  useEffect(() => {
    console.log(pressed)
  }, [pressed])

  return (
    <KeyboardWrapper
      tabIndex='-1'
      onKeyUp={onKeyReleased}
      onKeyDownCapture={onKeyPressed}
    >
      <WhiteKeyField length={whiteConfig.length} extra={keyConfig}>
        {whiteConfig.map((el) => (
          <Key key={el.label} config={el} extra={keyConfig} pressed={pressed} />
        ))}
      </WhiteKeyField>
      <BlackKeyField length={blackConfig.length} extra={keyConfig}>
        {blackConfig.map((el) => (
          <BlackKey
            key={el.label}
            config={el}
            extra={keyConfig}
            pressed={pressed}
          />
        ))}
      </BlackKeyField>
    </KeyboardWrapper>
  )
}
