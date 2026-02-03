"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OperationsPrivacy = () => {
    const { language } = useLanguage();
    const t = translations.operationsPage[language].privacy;
    const isAr = language === 'ar';

    return (
        <section className="privacy-area ptb-70 position-relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)'
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="privacy-card p-4 p-md-5 rounded-4  position-relative"
                        >
                            {/* Decorative top accent */}
                            <div className="position-absolute top-0 start-50 translate-middle-x rounded-bottom"
                                style={{ width: '80px', height: '4px', background: 'white' }}></div>

                            <div className={`d-flex flex-column flex-md-row align-items-center text-center ${isAr ? 'text-md-end' : 'text-md-start'} gap-4`}>
                                {/* Icon Badge */}
                                <div className="icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                                    style={{
                                        width: '90px',
                                        height: '90px',
                                        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                                        color: '#1d9bc2',
                                        border: '1px solid #eef'
                                    }}
                                >
                                    <i className="fas fa-lock fs-2"></i>
                                </div>

                                {/* Content */}
                                <div>
                                    <h4 className="h4 fw-bold mb-3 text-dark">{t.title}</h4>
                                    <div className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                                        {t.descs.map((desc, index) => (
                                            <p key={index} className="mb-2 last-mb-0">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .last-mb-0:last-child {
                    margin-bottom: 0 !important;
                }
            `}</style>
        </section>
    )
}

export default OperationsPrivacy
