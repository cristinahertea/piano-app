import React from 'react'
import { render } from 'react-dom'
import Home from './components/Home/Home.component'
import './index.css'

let app = (
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

let here = document.querySelector('#react')

render(app, here)
