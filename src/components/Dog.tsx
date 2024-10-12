import React from 'react';
import rightImage from '../assets/WhiteBg.jpeg';
import leftImage from '../assets/DarkBg.jpeg';
import '../style/myStyle.css';

const Dog: React.FC = () => {
    return (
        <div className='two-dog'>
            <img src={leftImage} alt="Left Dog" />
            <img src={rightImage} alt="Right Dog" />
        </div>
    );
}

export default Dog;
