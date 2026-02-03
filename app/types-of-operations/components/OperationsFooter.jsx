"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OperationsFooter = () => {
    const { language } = useLanguage();
    const t = translations.operationsPage[language].footerCTA;
    const isAr = language === 'ar';

    return (
        <section className="operations-footer-cta ptb-100 bg-f4f9fd overflow-hidden">
            <div className="container">
                <div className="cta-content-card position-relative p-5 text-center rounded-5 shadow-lg border-0"
                    style={{
                        background: 'linear-gradient(135deg, #1d9bc2 0%, #0d47a1 100%)',
                        color: 'white'
                    }}
                >
                    {/* Background Decorative Circles */}
                    <div className="position-absolute opacity-10 rounded-circle" style={{ width: '300px', height: '300px', background: 'white', top: '-150px', [isAr ? 'left' : 'right']: '-150px' }}></div>
                    <div className="position-absolute opacity-05 rounded-circle" style={{ width: '200px', height: '200px', background: 'white', bottom: '-100px', [isAr ? 'right' : 'left']: '-100px' }}></div>

                    <div className="position-relative z-index-1">
                        <i className="fas fa-quote-right fs-1 mb-4 opacity-75"></i>
                        <h2 className="display-5 text-white fw-bold mb-4" style={{ lineHeight: '1.4', whiteSpace: 'pre-line' }}>
                            {t.text}
                        </h2>

                        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                            <Link href="/contact" className="btn btn-light px-5 py-3 rounded-pill fw-bold shadow-sm transition-all hover-translate-y d-flex align-items-center gap-2">
                                <i className="fas fa-calendar-check text-primary"></i>
                                {t.consultationBtn}
                            </Link>

                            <a
                                href="https://wa.me/+966500000000" // Replace with actual number if available
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold d-flex align-items-center gap-2 transition-all "
                                style={{ borderWidth: '2px' }}
                            >
                                <i className="fab fa-whatsapp"></i>
                                {t.whatsappBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-translate-y:hover {
                    transform: translateY(-5px);
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .z-index-1 {
                    z-index: 1;
                }
                .opacity-05 {
                    opacity: 0.05;
                }
            `}</style>
        </section>
    )
}

export default OperationsFooter
