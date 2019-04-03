import React from 'react';

const userOutput = (props) => {
    return(
        <div className='UserOutput'>
            <p>UserName: {props.userName}</p>
            <p>Password: </p>
        </div>
    )
};

export default userOutput;