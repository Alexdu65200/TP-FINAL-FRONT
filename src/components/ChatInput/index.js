import React, { Component } from 'react'
import './index.css'
import Emoji from './../Emoji/'

export default class ChatBox extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            isOpenEmoji: false
        }
    }

    _changeMessage(e) {
        let msg = e.target.value 
        this.setState({ text: msg })
    }

    _checKEnter(e) {
        if (e.key === 'Enter') {
            this._sendMessage()
        }
    }

    _sendMessage() {
        if (this.state.text !== '') {
            this.props.send(this.state.text)
            this.setState({ text: '' })
        }
    }

    _toggleEmoji() {
        this.setState({
            isOpenEmoji: !this.state.isOpenEmoji
        })
    }

    _selectEmoji(emo) {
        this.setState({
            text: this.state.text + emo,
            isOpenEmoji: false
        })
    }

    render() {
        return (
            <div className="row chatinput-wrapper">
                <div className="col-xs-12">
                    <div className="input-group input-group-lg">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Votre message..."
                            onClick={()=>this.setState({isOpenEmoji: false})}
                            onKeyPress={this._checKEnter.bind(this)}
                            onChange={this._changeMessage.bind(this)}
                            value={this.state.text}
                            />
                        <span className="input-group-btn">
                            <Emoji isOpen={this.state.isOpenEmoji} select={this._selectEmoji.bind(this)}/>
                            <button className="btn btn-default" onClick={()=>this._toggleEmoji()}>
                                <span role="img" aria-label="emoji">😃</span>
                            </button>
                            <button 
                                className="btn btn-default" 
                                type="button"
                                onClick={()=>this._sendMessage()}>
                                ENVOYER
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}