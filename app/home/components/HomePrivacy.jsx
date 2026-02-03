"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const HomePrivacy = () => {
    const { language } = useLanguage();
    const t = translations.home[language].privacy;
    const isRTL = language === 'ar';

    return (
        <section
            className="privacy-area parallax my-5 py-5"
            style={{
                background: 'linear-gradient(135deg, #030b58 0%, #1d9bc2 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative Background Pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/assets/img/pattern.webp)',
                    opacity: 0.1,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div
                    className="privacy-content text-center mx-auto"
                    style={{
                        maxWidth: '800px',
                        padding: '3rem 1.5rem',
                    }}
                >
                    {/* Subtitle */}
                    <span
                        className="sub-title d-inline-block mb-3"
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            fontWeight: '500',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            opacity: 0.9,
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50px',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        {t.title}
                    </span>

                    {/* Main Heading */}
                    <h2
                        className="mb-4"
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                            fontWeight: '700',
                            lineHeight: '1.3',
                            textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
                            marginBottom: '1.5rem',
                        }}
                    >
                        {t.subTitle}
                    </h2>

                    {/* Description */}
                    <p
                        className="mb-0"
                        style={{
                            color: '#fff',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            lineHeight: '1.8',
                            opacity: 0.95,
                            maxWidth: '700px',
                            margin: '0 auto',
                            textAlign: isRTL ? 'right' : 'left',
                        }}
                    >
                        {t.description}
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                }}
            />
        </section>
    )
}

export default HomePrivacy;
