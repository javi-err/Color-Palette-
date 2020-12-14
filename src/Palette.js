import React, { Component } from 'react'
import './Palette.css'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


export class Palette extends Component {
    constructor(){
        super()

        this.state = {
            level: 500,
        }
    
        this.handleLevelChange = this.handleLevelChange.bind(this)

    }

    handleLevelChange(level){
        this.setState({
            level
        })
    }

    render() {
        
        const { level } = this.state
        const { colors } = this.props.palette
        const colorBoxes = colors[level].map(box => {
            return <ColorBox background={box.hex} name={box.name} />

        })


        return (
            <div className="Palette">
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.handleLevelChange} />
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
