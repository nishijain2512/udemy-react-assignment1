import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        //background: center
    };
    return <input 
            style={inputStyle}
            type='text' 
            onChange={props.changed} 
            value={props.currentName}/>;
};

export default userInput;