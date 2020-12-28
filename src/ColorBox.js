import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import './ColorBox.css'
export class ColorBox extends Component {
    constructor(props){
        super(props);


        this.state = {
            isCopied: false
        }

        this.handleCopy = this.handleCopy.bind(this)
    }

    
    handleCopy(){
        this.setState({isCopied: true}, () => {
            setTimeout(() => this.setState({
                isCopied: false
            }), 1000)})
        }
    

    render() {
        const { name, background } = this.props
        const { isCopied } = this.state
        return (
            <div className="ColorBox" style={{background}}>
                <div className={`copy-overlay ${isCopied && 'copied'}`}>
                    <span>Copied! {background}</span>{this.state.background}</div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                <CopyToClipboard text={background} onCopy={this.handleCopy}>
                    <button className="copy-button">Copy</button>
                </CopyToClipboard>
                </div>
                <Link to="/">
                    <span className="see-more">...</span>
                </Link>
            </div>
        )
    }
}

export default ColorBox
