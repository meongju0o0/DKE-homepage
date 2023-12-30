import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slider.css';

export const Slider = ({ images }) => {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef();

    const updateSliderHeight = () => {
        const slider = sliderRef.current;
        if (slider) {
            const img = slider.querySelector('.slide.active img');
            if (img && img.complete) {
                const ratio = img.naturalHeight / img.naturalWidth;
                const sliderHeight = slider.offsetWidth * ratio;
                slider.style.height = `${sliderHeight}px`;
            }
        }
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(updateSliderHeight, [index]);

    return (
        <div className="slider" ref={sliderRef}>
            {images.map((img, i) => (
                <div key={i} className={i === index ? "slide active" : "slide"}>
                    <img src={img} alt={`Slide ${i}`} onLoad={updateSliderHeight} />
                </div>
            ))}
            <button className="btn prev" onClick={prevSlide}>&#10094;</button>
            <button className="btn next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};
