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
        height: "2rem"
    },

    name: {
        marginLeft: "2rem",
        width: "15rem"
    },

    colors: {
        marginLeft: "2rem",
    }

}

const PaletteList = (props) => {
    const {classes, paletteName, emoji} = props;
    return (
        <div className={classes.root}>

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