import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import './Palette.css'
import Slider from 'rc-slider'
import './Navbar.css'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            format: 'hex',
            open: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleChange(e) {
        this.setState({
            format: e.target.value,
            open: true,
        })

        this.props.handleFormatChange(e.target.value)
    }

    handleClose(){
        this.setState({
            open: false,
        })
    }

    render() {
        const {level, handleLevelChange} = this.props
        const { format } = this.state
        return (
            <nav className="Navbar">
                <div className="home">
                    <Link to="/">Color Palette</Link>
                </div>

                <div className="slider-container">
                    <span>Brightness Level: {level}</span>
                    <div className="slider">
                        <Slider 
                        defaultValue={level} 
                        min={100} max={900} step={100} 
                        onAfterChange={handleLevelChange} 
                        />
                    </div>  
                </div>

                <div className="color-select">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1)</MenuItem>
                    </Select>
                </div>

                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={this.state.open}
                autoHideDuration={3000}
                message={<span id="message-id">Format changed to {format}</span>}
                onClose={this.handleClose}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                action={[
                    <IconButton 
                    onClick={this.handleClose} 
                    color="inherit" 
                    key="close" 
                    aria-label="close">
                        <CloseIcon />
                    </IconButton>
                ]}

                />

            </nav>
        )
    }
}

export default Navbar
