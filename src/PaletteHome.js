import React, { Component } from 'react'
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
                   <Link to={`/palette/${palette.id}`}>
                        <div className="palette-container">
                            {palette.paletteName}
                        </div>
                   </Link>
                   )
                })
            }
                </div>
            </div>
        )
    }
}

export default PaletteHome
