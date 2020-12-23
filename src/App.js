import React, { Component } from 'react'
import seed from './ColorSeed'
import Palette from './Palette'
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

    console.log(newPaletteGenerator(seed[2]))
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteHome palettes={seed}/>} />
        <Route 
        exact path="/palette/:id" 
        render={routeProps => (
          <Palette palette={newPaletteGenerator(this.findPalette(routeProps.match.params.id))} />
        )}
        />
      </Switch>

    //   {/* <div>
    //   <Palette palette= {newPaletteGenerator(seed[2])} />
    // </div> */}
    
    )
  }
}

export default App
