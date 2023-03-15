
import React from 'react'
import '../Css/HelplinePortal.css'
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Widget from './Widget';

function HelplinePortal() {
    return (
        <div className='helplinePortal'>
            <Navbar />
            <div className='helpline__contents'>
                <div className='helpline__content'>
                    <Sidebar />
                    <Feed />
                    <Widget />
                </div>
            </div>
        </div>
    )
}
export default HelplinePortal;
