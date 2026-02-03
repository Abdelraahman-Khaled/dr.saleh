"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OperationsHero = () => {
    const { language } = useLanguage();
    const t = translations.operationsPage[language].hero;
    const isAr = language === 'ar';

    return (
        <section className="operations-hero py-5 bg-white overflow-hidden">
            <div className="container py-lg-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="content">
                            <h1 className="mb-4 display-4 font-weight-bold" style={{ color: '#030b58' }}>
                                {t.title}
                            </h1>
                            <p className="lead mb-5 text-muted mx-auto" >
                                {t.desc}
                            </p>
                            <div className="cta">
                                <a
                                    href="https://wa.me/966535195519"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary shadow-lg px-5 py-3 rounded-pill d-inline-flex align-items-center gap-2"
                                >
                                    <span>{t.whatsappBtn}</span>
                                    <i className="fab fa-whatsapp fs-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OperationsHero
