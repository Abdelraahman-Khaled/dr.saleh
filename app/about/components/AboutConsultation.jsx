"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const AboutConsultation = () => {
    const { language } = useLanguage();
    const t = translations.about[language].consultation;
    const isAr = language === 'ar';

    return (
        <section className="about-consultation-area py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className=" text-center">
                        <div className="consultation-content">
                            <span className="sub-title text-primary font-weight-bold mb-2 d-block">{t.subTitle}</span>
                            <h2 className="mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700' }}>{t.title}</h2>
                            <p className="lead mb-4 text-muted">{t.desc}</p>

                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link href="/contact" className="btn btn-primary btn-lg px-5 shadow-sm">
                                    {t.ctaBtn}
                                    <i className={`${isAr ? 'ms-2' : 'ml-2'} fas fa-calendar-check`}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutConsultation;
