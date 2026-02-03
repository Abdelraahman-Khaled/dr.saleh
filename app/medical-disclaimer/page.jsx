"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'

const MedicalDisclaimer = () => {
    const { language } = useLanguage();
    const t = translations.medicalDisclaimerPage[language];
    const isAr = language === 'ar';

    return (
        <div className={`medical-disclaimer-page ${isAr ? 'rtl' : 'ltr'}`}>
            <HeroSection
                title={t.hero.title}
                subTitle={t.hero.subTitle}
                number="5"
            />
            <ScrollTicker />

            <section className="disclaimer-content-area py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="disclaimer-box p-5 rounded-5 shadow-sm bg-white border">
                                <p className="lead mb-5 text-dark fw-medium">{t.hero.desc}</p>

                                <div className="points-list">
                                    {t.content.points.map((point, index) => (
                                        <div key={index} className="point-item d-flex align-items-start mb-4">
                                            <div className="icon-wrap me-3 flex-shrink-0 bg-primary-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#f0f4ff' }}>
                                                <i className="flaticon-check-mark text-primary"></i>
                                            </div>
                                            <p className="fs-5 mb-0 text-muted lh-base">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="cta-box mt-5 p-5 rounded-4 bg-dark text-white text-center">
                                    <h3 className="text-white mb-3">{t.content.cta}</h3>
                                    <p className="mb-2 opacity-75">{t.content.ctaSub1}</p>
                                    <p className="mb-4 opacity-75">{t.content.ctaSub2}</p>
                                    <a href="https://wa.me/966535195519" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                                        <i className="fab fa-whatsapp me-2"></i>
                                        {isAr ? "احجز عبر واتساب" : "Book via WhatsApp"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .medical-disclaimer-page.rtl {
                    direction: rtl;
                    text-align: right;
                }
                .medical-disclaimer-page.rtl .me-3 {
                    margin-right: 0 !important;
                    margin-left: 1rem !important;
                }
                .py-100 {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                .bg-primary-light {
                    background-color: #f0f7ff;
                }
            `}</style>
        </div>
    )
}

export default MedicalDisclaimer;
