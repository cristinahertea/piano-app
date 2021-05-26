import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import {
  KeyWrapper,
  BlackKeyWrapper,
  EmptyKeyWrapper,
  BlackKeyMini,
} from './Keyboard.styles'

export const EmptyKey = ({ extra }) => {
  return <EmptyKeyWrapper extra={extra} />
}

export const Key = ({ config, pressed, extra }) => {
  const [play] = useSound(config.sound)
  const iAmPressed = pressed.includes(config.keycode)

  useEffect(() => {
    console.log(iAmPressed)
    if (iAmPressed == true) {
      play()
    }
  }, [iAmPressed])

  return (
    <KeyWrapper extra={extra} onClick={play} iAmPressed={iAmPressed}>
      {config.label}
    </KeyWrapper>
  )
}

export const BlackKey = ({ config, pressed, extra }) => {
  const [play] = useSound(config.sound)
  const iAmPressed = pressed.includes(config.keycode)

  console.log('hello', pressed)
  useEffect(() => {
    console.log(iAmPressed)
    if (iAmPressed == true) {
      play()
    }
  }, [iAmPressed])

  if (config.label === 'NONE') return <EmptyKey extra={extra} />
  return (
    <BlackKeyWrapper extra={extra}>
      <BlackKeyMini extra={extra} onClick={play} iAmPressed={iAmPressed}>
        {config.label}
      </BlackKeyMini>
    </BlackKeyWrapper>
  )
}
