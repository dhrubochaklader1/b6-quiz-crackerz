import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Quiz Website</h1>
            <nav className='nav'>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/topics'><button>Topics</button></Link>
            </nav>
        </div>
    );
};

export default Header;