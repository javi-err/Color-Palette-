import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import './Palette.css'
import Slider from 'rc-slider'
import './Navbar.css'


export class Navbar extends Component {
    render() {
        const {level, handleLevelChange} = this.props
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

            </nav>
        )
    }
}

export default Navbar
