import React, { Component } from 'react'
import seed from './ColorSeed'
import Palette from './Palette'
import { newPaletteGenerator } from './ColorHelper'

export class App extends Component {
  render() {
    console.log(newPaletteGenerator(seed[2]))
    return (
      <div>
      <Palette palette= {newPaletteGenerator(seed[2])} />
    </div>
    )
  }
}

export default App
