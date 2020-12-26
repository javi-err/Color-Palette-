import React from 'react'
import { withStyles } from '@material-ui/styles' 
import Button from '@material-ui/core/Button'


const styles = {
    root: {
        backgroundColor: "white",
        boxShadow: "-6px 1px 10px 1px rgba(0,0,0,0.75)",
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
        width: '20rem',
        marginLeft: '1.5rem',
        transform: "skew(35deg, 0deg)"
    },

    miniPal: {
        width: "10px",
        height: "20px",
        marginRight: ".5rem"
    },

    link: {
        marginLeft: 'auto',
        marginRight: '4rem',
        overflow: 'none'
    },


}

const PaletteList = (props) => {
    const {classes, paletteName, emoji, colors, handleNav} = props;
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

            <div className={classes.link}>
                <Button color="primary" 
                style={{display: 'flex', alignItems:"center", justifyContent:'center', height: '20px'}} 
                variant="contained"
                onClick={handleNav}>
                    Generate Pallete!</Button> 
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList)  