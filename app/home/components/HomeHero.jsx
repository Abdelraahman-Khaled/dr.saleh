"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

export const HomeHero = () => {
    const { language } = useLanguage();
    // Default to empty array if undefined to prevent errors
    const slides = translations.home[language]?.hero?.slides || [];
    const isAr = language === 'ar';
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 500); // Wait for fade out
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    if (!slides.length) return null;

    const t = slides[currentSlide];

    return (
        <div className="main-banner-video">
            <div className="container">
                <div className="row align-items-center h-100">

                    <div className="col-md-6">
                        <div className="main-banner">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className={`main-banner-content ${fade ? 'fade-in' : 'fade-out'}`}>
                                            <h1 style={{ whiteSpace: 'pre-line' }}>{t.title}</h1>
                                            <p style={{ whiteSpace: 'pre-line' }}>{t.desc}</p>

                                            <div className="btn-box">
                                                <Link href={"/contact"} className="btn btn-primary mx-1">
                                                    {t.btn1}
                                                    <i className="fas fa-bell"></i>
                                                </Link>
                                                <a
                                                    href={currentSlide === 1 ? "https://wa.me/966535195519" : "/contact"}
                                                    className="btn btn-light mx-1"
                                                    target={currentSlide === 1 ? "_blank" : "_self"}
                                                >
                                                    {t.btn2}
                                                    <i className={isAr ? "fas fa-arrow-left" : "fas fa-arrow-right"}></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 align-self-end wow fadeInRight">
                        <div className="hero-thumbnail">
                            <Image
                                src="/assets/img/hero.webp"
                                alt="Hero Background"
                                width={1000}
                                height={1000}
                                priority
                                className="thumbnail"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

