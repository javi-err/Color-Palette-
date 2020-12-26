import React from 'react'
import { withStyles } from '@material-ui/styles' 

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        marginBottom: ".5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "2rem",
        letterSpacing: "2px",
        position: "relative",
    },

    name: {
        marginLeft: "2rem",
        width: "15rem"
    },

    colors: {
        marginLeft: "2rem",
    },
    
    miniPalette: {
        display: "flex",
    },

    miniPal: {
        width: "20px",
        height: "20px"
    }

}

const PaletteList = (props) => {
    const {classes, paletteName, emoji, colors} = props;
    const miniPalette = colors.map(c => {
        console.log(c)
        return <div className={classes.miniPal} style={{backgroundColor: c.color}} key={c.name} ></div>
    })
    return (
        <div className={classes.root}>
            
            <div className={classes.miniPalette}>
                {miniPalette}
            </div>

            <h5 className={classes.name}>
                {paletteName} <span>{emoji}</span>
            </h5>

            <div className={classes.colors}>
                Sup
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList)