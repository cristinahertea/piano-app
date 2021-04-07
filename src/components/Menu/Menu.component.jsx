import React, { useState } from 'react'
import {
  StyledTitle,
  MenuWrapper,
  ButtonsWrapper,
  MenuButton,
} from './Menu.styles'

const Menu = () => {
  let title = 'Learn Piano'
  const [age, setAge] = useState(10)

  const handleClick = (e) => {
    const target = e.target.innerText
    if (target === 'Play') {
      console.log('Press Play')
    } else if (target === 'Songs') {
      console.log('Go to songs')
    } else if (target === 'About') {
      console.log('Learn about us')
    }

    return
  }

  return (
    <MenuWrapper>
      <StyledTitle className={'test'}>{title}</StyledTitle>
      <ButtonsWrapper>
        <MenuButton onClick={handleClick}>Play</MenuButton>
        <MenuButton onClick={handleClick}>Songs</MenuButton>
        <MenuButton onClick={handleClick}>About</MenuButton>
      </ButtonsWrapper>
    </MenuWrapper>
  )
}

export default Menu
