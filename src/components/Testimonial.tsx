import React from 'react';
import '../style/myStyle.css';

interface TestimonialProps {
    name: string;
    role?: string;
    testimonial: React.ReactNode;
    avatarUrl?: string;
    className?: string;
}


const Testimonial: React.FC<TestimonialProps> = ({
    name,
    role,
    testimonial,
    avatarUrl ,
    className = "",
}) => {
    return (
        <div className={`testimonial ${className}`}>
            <div className='testimonial-content'>
                <img src={avatarUrl} alt={`${name}'s avatar`} className="testimonial-avatar" />
                <div className="testimonial-details">
                    <h4 className="testimonial-name">{name}</h4>
                    {role && <p className="testimonial-role">{role}</p>}
                </div>
            </div>
            <p className="testimonial-text">{testimonial}</p>
        </div>
    );
};

export default Testimonial;
