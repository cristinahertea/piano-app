import React from 'react'
import Menu from '../Menu'

import Footer from '../Footer/Footer.component'
import Instruments from '../Instruments'
import { HomeWrapper } from './Home.styles'
const Home = () => {
  return (
    <HomeWrapper>
      <Menu />
      <Instruments />
    </HomeWrapper>
  )
}
export default Home
