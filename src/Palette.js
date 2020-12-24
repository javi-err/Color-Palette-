import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'




export class Palette extends Component {
    constructor(){
        super()

        this.state = {
            level: 500,
            format: 'hex'
        }
    
        this.handleLevelChange = this.handleLevelChange.bind(this)
        this.handleFormatChange = this.handleFormatChange.bind(this)

    }

    handleLevelChange(level){
        this.setState({
            level
        })
    }

    
    handleFormatChange(val){
        this.setState({
            format: val
        })
    }
    render() {
        
        const { level, format } = this.state
        const { colors, paletteName, emoji } = this.props.palette
        const colorBoxes = colors[level].map(box => {
            return <ColorBox background={box[format]} name={box.name} />

        })


        return (
            <div className="Palette">
                <Navbar 
                level={level} 
                handleLevelChange={this.handleLevelChange} 
                handleFormatChange={this.handleFormatChange}
                />
                <div className="palette-colors">
                    {colorBoxes}
                </div>
                <footer className="palette-footer">
                    {paletteName} 
                    <span className="palette-emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette
