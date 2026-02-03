"use client";
import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAfterSlider = ({ beforeImg, afterImg }) => {

    // Custom Handle that mimics the default one but with reversed arrows
    const CustomHandle = () => (
        <div className="__rcs-handle-root" style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', height: '100%', cursor: 'ew-resize', pointerEvents: 'none', color: '#fff' }}>
            <div className="__rcs-handle-line" style={{ flexGrow: 1, height: '100%', width: '2px', backgroundColor: 'currentColor', pointerEvents: 'auto' }}></div>
            <div className="custom-handle-button">
                {/* Reversed Arrow (Pointing Right instead of Left) */}
                <div className="handle-arrow" style={{ transform: 'rotate(180deg)' }}></div>
                {/* Reversed Arrow (Pointing Left instead of Right) */}
                <div className="handle-arrow"></div>
            </div>
            <div className="__rcs-handle-line" style={{ flexGrow: 1, height: '100%', width: '2px', backgroundColor: 'currentColor', pointerEvents: 'auto' }}></div>
        </div>
    );

    return (
        <div className="twentytwenty-container before-after-wrapper" style={{ position: 'relative', isolation: 'isolate' }}>
            <div style={{
                position: 'absolute',
                top: '5%',
                left: '5%',
                width: '90%',
                height: '90%',
                backgroundImage: `url(${beforeImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(30px)',
                opacity: 0.6,
                zIndex: -1,
                borderRadius: '20px'
            }} />
            <ReactCompareSlider
                handle={<CustomHandle />}
                itemOne={<ReactCompareSliderImage src={beforeImg} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={afterImg} alt="After" />}
                style={{ height: '100%' }}
            />
            <div className="twentytwenty-overlay">
                <div className="twentytwenty-after-label" data-content="After"></div>
                <div className="twentytwenty-before-label" data-content="Before"></div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
