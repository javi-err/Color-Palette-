import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import './Palette.css'
import Slider from 'rc-slider'
import './Navbar.css'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'


export class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            format: 'hex'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            format: e.target.value
        })

        this.props.handleFormatChange(e.target.value)
    }

    render() {
        const {level, handleLevelChange, handleChange} = this.props
        const { format } = this.state
        return (
            <nav className="Navbar">
                <div className="home">
                    <a href="#">Color Palette</a>
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

            </nav>
        )
    }
}

export default Navbar
