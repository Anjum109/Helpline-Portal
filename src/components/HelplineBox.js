import { Avatar } from '@mui/material';
import React from 'react';
import '../Css/HelplineBox.css'

const HelplineBox = () => {
    return (
        <div className='helplineBox'>
            <div className='helplineBox__info'>
                <Avatar />
                <h5>Username</h5>
            </div>
            <div className="helplineBox__question">
                <p>What's your question?</p>
            </div>
        </div>
    );
};

export default HelplineBox;