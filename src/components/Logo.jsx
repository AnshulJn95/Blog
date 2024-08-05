import React from 'react';
import logo from '../..//src/assets/NJBlogs.png';

function Logo({ width = '100px' }) {
    return (
        <div className="flex justify-center items-center" style={{ width }}>
            <img 
                src={logo}
                alt="NJBlogs Logo" 
                className="w-full h-auto"
            />
        </div>
    );
}

export default Logo;
