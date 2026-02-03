"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import Link from 'next/link'
import './Expertise.css'

const Expertise = () => {
    const { language } = useLanguage();
    const consultation = translations.about[language].consultation;

    return (
        <section className="expertise-area py-5">
            <div className="container">
                <div className="expertise-inner text-center">
                    <div className="expertise-content mx-auto" style={{ maxWidth: '800px' }}>
                        <div className="expertise-cta">
                            <h4>{consultation.title}</h4>
                            <p>{consultation.desc}</p>
                            <Link href="/contact" className="btn btn-primary" style={{ minWidth: '220px' }}>
                                <span>{consultation.ctaBtn}</span>
                                <i className="fas fa-calendar-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise;
