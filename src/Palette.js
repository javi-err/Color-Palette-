import React, { Component } from 'react'
import './Palette.css'
import ColorBox from './ColorBox'


export class Palette extends Component {

    render() {
        
        const colorBoxes = this.props.colors.map(box => {
            return <ColorBox background={box.color} name={box.name} />

        })
        return (
            <div className="Palette">
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
