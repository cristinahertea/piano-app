import React, { useState } from 'react'
import { KeyWrapper } from './Keyboard.styles'

export const Key = ({ config, pressed }) => {
  return <KeyWrapper>{config.label}</KeyWrapper>
}
