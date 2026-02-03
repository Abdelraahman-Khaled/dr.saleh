"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OperationsProcess = () => {
    const { language } = useLanguage();
    const t = translations.operationsPage[language].process;
    const isAr = language === 'ar';

    const steps = [
        { icon: "fas fa-user-md", title: t.steps[0] },
        { icon: "fas fa-pencil-ruler", title: t.steps[1] },
        { icon: "fas fa-procedures", title: t.steps[2] },
        { icon: "fas fa-heartbeat", title: t.steps[3] },
    ];

    return (
        <section className="process-area ptb-100 bg-white position-relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="position-absolute opacity-05" style={{ top: '10%', left: isAr ? '5%' : 'auto', right: isAr ? 'auto' : '5%', zIndex: 0 }}>
                <i className="fas fa-notes-medical display-1 text-primary opacity-10"></i>
            </div>

            <div className="container position-relative z-index-1">
                <div className="section-title text-center mb-5">
                    <span className="sub-title">{t.title}</span>
                    <h3 className="mb-3">{t.subtitle}</h3>
                </div>

                <div className="row justify-content-center">
                    {steps.map((step, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="process-card text-center p-4 h-100 position-relative">
                                {/* Connector Line (except for last item) */}
                                {index < steps.length - 1 && (
                                    <div className="process-connector d-none d-lg-block position-absolute"
                                        style={{
                                            top: '30%',
                                            [isAr ? 'left' : 'right']: '-50%',
                                            width: '100%',
                                            height: '2px',
                                            background: 'linear-gradient(to right, #e0e0e0 50%, transparent 50%)',
                                            backgroundSize: '10px 100%',
                                            zIndex: -1
                                        }}
                                    ></div>
                                )}

                                <div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center rounded-circle bg-light shadow-sm position-relative"
                                    style={{ width: '80px', height: '80px', transition: 'all 0.3s ease' }}
                                >
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '0.8rem' }}>
                                        {index + 1}
                                    </span>
                                    <i className={`${step.icon} fs-2 text-primary`}></i>
                                </div>
                                <h4 className="h5 fw-bold mb-0">{step.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <p className="text-muted mb-4 fs-5">{t.ctaSub}</p>
                    <Link href="/contact" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow hover-translate-y">
                        {t.cta}
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .process-card:hover .icon-wrapper {
                    background-color: #030b58 !important;
                    color: white !important;
                    transform: translateY(-5px);
                }
                .process-card:hover .icon-wrapper i {
                    color: #fff !important;
                }
                .hover-translate-y:hover {
                    transform: translateY(-5px);
                }
                .opacity-05 {
                    opacity: 0.05;
                }
                .opacity-10 {
                    opacity: 0.1;
                }
                .z-index-1 {
                    z-index: 1;
                }
            `}</style>
        </section>
    )
}

export default OperationsProcess
