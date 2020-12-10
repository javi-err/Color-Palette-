import React, { Component } from 'react'
import seed from './ColorSeed'
import Palette from './Palette'

export class App extends Component {
  render() {
    return (
      <div>
      <Palette {...seed[0]} />
    </div>
    )
  }
}

export default App
