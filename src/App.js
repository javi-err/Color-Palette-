import React, { Component } from 'react'
import seed from './ColorSeed'
import Palette from './Palette'
import SinglePalette from './SinglePalette'
import { newPaletteGenerator } from './ColorHelper'
import { Route, Switch } from 'react-router-dom'
import PaletteHome from './PaletteHome'


export class App extends Component {

  findPalette(id){
    return seed.find((palette) => {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>

        <Route 
        exact path="/palette/:id/:colorid"
        render={() => <h1>ME!</h1>}
        />

        
        <Route exact path="/" 
        render={(routeProps) => <PaletteHome palettes={seed} {...routeProps}/>} 
        />


        <Route 
        exact path="/palette/:id" 
        render={routeProps => (
          <Palette palette={newPaletteGenerator(this.findPalette(routeProps.match.params.id))}/>)}
        />



      </Switch>

    )
  }
}

export default App
