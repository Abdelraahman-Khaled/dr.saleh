"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const PatientJourney = () => {
    const { language } = useLanguage();
    const t = translations.home[language].patientJourney;

    return (
        <section className="patient-journey-section ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{t.title}</span>
                    <h2>{t.subTitle}</h2>
                </div>

                <div className="journey-timeline">
                    {/* Horizontal Curved SVG Line */}
                    <svg className="timeline-curved-line" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path
                            d="M0 50 Q200 30 400 50 Q600 70 800 50 Q900 40 1000 50"
                            fill="none"
                            stroke="#1d9bc2"
                            strokeWidth="3"
                            opacity="0.4"
                        />
                    </svg>

                    {t.steps.map((step, index) => (
                        <div key={index} className="journey-step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <h3>{step}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <a
                        href="https://wa.me/966535195519"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        <i className="fab fa-whatsapp"></i>
                        {t.btn}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PatientJourney;
