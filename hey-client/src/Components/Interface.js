import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000/')


const Interface = () => {

    const [state, setState] = useState({ message: '', name: '' })

    const [chat, setChat] = useState([])




    return (
        <div>

            <form onSubmit={onMessageSubmit}>

                <div className="name-field">
                    <TextField
                        name='name'
                        onChange={e => onTextChange(e)}
                        value={state.name}
                        label='Name'
                    />
                </div>

                <div>
                    <TextField
                        name='message'
                        onChange={e => onTextChange(e)}
                        value={state.message}
                        id='outliend-multiline-static'
                        variant='outlined'
                        label='Message'
                    />
                </div>

                <button>Send</button>

            </form>

            <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
            </div>

        </div>
    );
};

export default Interface;