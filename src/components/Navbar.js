import React from 'react'
import '../Css/Navbar.css'
import logo from '../assets/logo/download.jpeg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, LanguageOutlined, NotificationsOutlined, PeopleAltOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button } from '@mui/material';

function Navbar() {
    return (
        <div className='hHeader'>
            <div className='hHeader__logo'>
                <img src={logo} alt="" />
            </div>
            <div className="hHeader__icons">
                <div className="hHeader__icon">
                    <AccountBalanceIcon />
                </div>
                <div className="hHeader__icon">
                    <FeaturedPlayListOutlined></FeaturedPlayListOutlined>
                </div>
                <div className="hHeader__icon">
                    <AssignmentTurnedInOutlined />
                </div>
                <div className="hHeader__icon">
                    <PeopleAltOutlined />
                </div>
                <div className="hHeader__icon">
                    <NotificationsOutlined></NotificationsOutlined>
                </div>
            </div>
            <div className="hHeader__input">
                <SearchIcon />
                <input type="text" placeholder='Search Question' />
            </div>
            <div className="hHeader__Rem">
                <div className="qHeader__avatar">
                    <Avatar />
                </div>
                <LanguageOutlined />
                <Button>Add Question</Button>
            </div>
        </div>
    )
}
export default Navbar;
