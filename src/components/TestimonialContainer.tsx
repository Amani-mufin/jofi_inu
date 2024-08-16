import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import '../style/myStyle.css';

interface ITestimonial {
    name: string;
    role?: string;
    testimonial: React.ReactNode;
    avatarUrl?: string;
}

interface TestimonialContainerProps {
    testimonials: ITestimonial[];
}

const TestimonialContainer: React.FC<TestimonialContainerProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('fixed');


    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass('slide-out');
            
            setTimeout(() => {
                handleNext();
                setAnimationClass('slide-in');
                
                setTimeout(() => {
                    setAnimationClass('fixed');
                }, 2000);
            }, 2500);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonial-page">
            <h2 className="testimonial-header">Testimonials</h2>
            <div className='border'></div>

            <div className="carousel">
                {testimonials.slice(currentIndex, currentIndex + 1).map((testimonial, index) => (
                    <div key={index} className={`testimonial-container ${animationClass}`}>
                        <Testimonial
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    </div>
                ))}
            </div>

            <div className="container">
                <button className="button" onClick={handlePrev}>{'<'}</button>
                <div className="dots">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                <button className="button" onClick={handleNext}>{'>'}</button>
            </div>
        </div>
    );
}

export default TestimonialContainer;
