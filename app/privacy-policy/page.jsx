"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'

const PrivacyPolicy = () => {
    const { language } = useLanguage();
    const t = translations.privacyPolicyPage[language];
    const isAr = language === 'ar';

    return (
        <div className={`privacy-policy-page ${isAr ? 'rtl' : 'ltr'}`}>
            <HeroSection
                title={t.hero.title}
                subTitle={t.hero.subTitle}
                number="6"
            />
            <ScrollTicker />

            <section className="privacy-content-area py-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="privacy-box p-5 rounded-5 shadow-sm bg-white border">
                                <p className="lead mb-5 text-dark fw-medium lh-base">{t.hero.desc}</p>

                                <div className="policy-sections">
                                    {t.sections.map((section, index) => (
                                        <div key={index} className="policy-item mb-5">
                                            <h3 className="h4 fw-bold mb-3 text-primary d-flex align-items-center">
                                                <span className="section-num me-3 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontSize: '14px' }}>{index + 1}</span>
                                                {section.title}
                                            </h3>
                                            <div className="ps-md-5">
                                                <p className="fs-5 text-muted lh-base">{section.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="footer-note mt-5 pt-4 border-top text-center">
                                    <p className="text-muted small">
                                        {isAr
                                            ? "آخر تحديث: فبراير 2026"
                                            : "Last updated: February 2026"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .privacy-policy-page.rtl {
                    direction: rtl;
                    text-align: right;
                }
                .privacy-policy-page.rtl .me-3 {
                    margin-right: 0 !important;
                    margin-left: 1rem !important;
                }
                .privacy-policy-page.rtl .ps-md-5 {
                    padding-left: 0 !important;
                    padding-right: 3rem !important;
                }
                .py-100 {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                .section-num {
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    )
}

export default PrivacyPolicy;
