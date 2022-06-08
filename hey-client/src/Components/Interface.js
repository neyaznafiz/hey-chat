import React, { useState } from 'react';
import io, { Socket } from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000/')


const Interface = () => {

const [state, setState]=useState({message: '', name: ''})


    return (
        <div>
            
        </div>
    );
};

export default Interface;