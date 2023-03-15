import { Avatar } from '@mui/material';
import React from 'react';
import '../Css/Post.css'
import post from '../assets/Post/post.png'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOutlined } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => {
    return (
        <div className='post'>
            <div className="post__info">
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>
            <div className="post__body">
                <div className="post__question">
                    <p>Question</p>
                    <button className='post__button'>
                        Answer
                    </button>
                </div>
                <div className="post__answer">
                    <p></p>
                </div>
                <img src={post} alt="image" />
            </div>
            <div className="post__footer">
                <div className="post__footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOutlined />
                <ChatBubbleOutline />
                <div className="post__footerLeft">
                    <ShareIcon />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
};

export default Post;