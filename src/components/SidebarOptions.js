import React from 'react'
import '../Css/SidebarOption.css'
import history from '../assets/Sidebar/History.jpg'
import business from '../assets/Sidebar/Business.jpeg'
import phuchology from '../assets/Sidebar/phychologye.jpg'
import cooking from '../assets/Sidebar/cooking.jpg'
import music from '../assets/Sidebar/music.jpeg'
import science from '../assets/Sidebar/science.jpg'
import health from '../assets/Sidebar/health.jpeg'
import movies from '../assets/Sidebar/Movies.jpeg'
import technology from '../assets/Sidebar/technology.jpg'
import education from '../assets/Sidebar/education.jpeg'
import { Add } from '@mui/icons-material'

function SidebarOptions() {
    return (
        <div className='sidebarOptions'>
            <div className='sidebarOption'>
                <img src={history} alt="" />
                <p>History</p>
            </div>
            <div className='sidebarOption'>
                <img src={business} alt="" />
                <p>Business</p>
            </div>
            <div className='sidebarOption'>
                <img src={phuchology} alt="" />
                <p>Phychology</p>
            </div>
            <div className='sidebarOption'>
                <img src={cooking} alt="" />
                <p>Cooking</p>
            </div>
            <div className='sidebarOption'>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className='sidebarOption'>
                <img src={science} alt="" />
                <p>Science</p>
            </div>
            <div className='sidebarOption'>
                <img src={health} alt="" />
                <p>Health</p>
            </div>
            <div className='sidebarOption'>
                <img src={movies} alt="" />
                <p>Movies</p>
            </div>
            <div className='sidebarOption'>
                <img src={technology} alt="" />
                <p>Technology</p>
            </div>
            <div className='sidebarOption'>
                <img src={education} alt="" />
                <p>Education</p>
            </div>
            <div className='sidebarOption'>
                <Add />
                <p>Discover Spaces</p>
            </div>

        </div>
    )
}
export default SidebarOptions;
