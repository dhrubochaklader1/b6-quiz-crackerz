import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <Link to={`/topic/${id}`}><button>Start Quiz</button></Link>
        </div>
    );
};

export default Topic;