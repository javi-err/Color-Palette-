import React, { Component } from 'react'
import PaletteList from './PaletteList'
import { Link } from 'react-router-dom'

export class PaletteHome extends Component {

    render() {
    const { palettes } = this.props
    console.log(palettes)
        return (
            <div>

                <h1>Color Palette</h1>
                
                <div class="palette-list">
                {palettes.map((palette) => {
                   return (
                    <PaletteList {...palette} />
                   )
                })
            }
                </div>
            </div>
        )
    }
}

export default PaletteHome
