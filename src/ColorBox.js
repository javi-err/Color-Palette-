import React, { Component } from 'react'
import './ColorBox.css'
export class ColorBox extends Component {
    render() {
        return (
            <div className="ColorBox" style={{background: this.props.background}}>
                <div>{this.props.name}</div>
                <span>More...</span>
            </div>
        )
    }
}

export default ColorBox
