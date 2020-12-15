import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'




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
                <Navbar level={level} handleLevelChange={this.handleLevelChange}/>
                <div className="palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
