import React, { Component } from 'react'
import PaletteList from './PaletteList'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


const styles = {
    root: {
    backgroundColor: "#FA8BFF",
    backgroundImage: "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
    height: "100vh"
    }
}

export class PaletteHome extends Component {
     
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
    const { classes, palettes } = this.props


    console.log(palettes)
        return (
            <div className={classes.root}>

                <h1>Color Palette</h1>
                
                <div className="palette-list">
                {palettes.map((palette) => {
                   return (
                    <PaletteList {...palette} handleNav={() => this.goToPalette(palette.id)} />
                   )
                })
            }
                </div>
            </div>
        ) 
    }
}

export default withStyles(styles)(PaletteHome)
