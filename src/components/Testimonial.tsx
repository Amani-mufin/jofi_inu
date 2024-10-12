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
        <div className={`testimonial h-[13rem] md:min-h-[13rem] w-[330px] md:min-w-[500px] ${className}`}>
            <div className='testimonial-content'>
                <img src={avatarUrl} alt={`${name}'s avatar`} className="testimonial-avatar" />
                <div className="testimonial-details">
                    <h4 className="testimonial-name text-sm md:text-xl">{name}</h4>
                    {role && <p className="testimonial-role text-xs md:text-base">{role}</p>}
                </div>
            </div>
            <p className="testimonial-text text-xs md:text-base">{testimonial}</p>
        </div>
    );
};

export default Testimonial;
