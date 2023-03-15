import React from 'react'
import '../Css/Feed.css'
import HelplineBox from './HelplineBox';
import Post from './Post';


function Feed() {
    return (
        <div className='feed'>
            <HelplineBox />
            <Post />
        </div>
    )
}
export default Feed;
