import React, { useState } from 'react'
import { KeyboardWrapper, KeyField } from './Keyboard.styles'
import { Key } from './Key.component'
import { config } from './Key.config'

export const Keyboard = () => {
  const [pressed, setPressed] = useState(false)
  const onKeyPressed = (e) => {
    console.log(e.keyCode)
  }
  const onKeyReleased = (e) => {
    console.log(e.keyCode)
  }
  return (
    <KeyboardWrapper
      tabIndex='-1'
      onKeyUp={onKeyReleased}
      onKeyDownCapture={onKeyPressed}
    >
      <KeyField length={config.length}>
        {config.map((el) => (
          <Key config={el} />
        ))}
      </KeyField>
    </KeyboardWrapper>
  )
}
