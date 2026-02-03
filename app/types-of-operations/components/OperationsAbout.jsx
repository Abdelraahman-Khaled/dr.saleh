"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OperationsAbout = () => {
    const { language } = useLanguage();
    const t = translations.operationsPage[language].about;
    const isAr = language === 'ar';

    return (
        <section className="operations-about py-5 bg-light overflow-hidden">
            <div className="container py-lg-5">
                <div className="row align-items-center g-5">
                    <div className={`col-lg-4 ${isAr ? 'order-lg-2' : ''}`}>
                        <div className="about-img position-relative">
                            <Image
                                src="/assets/img/about-img1.png"
                                alt="Dr. Saleh Al-Khalaf"
                                width={600}
                                height={700}
                                className="img-fluid rounded-4 shadow-xl"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className={`col-lg-8 ${isAr ? 'order-lg-1 text-end' : ''}`}>
                        <div className="about-content" style={{ maxWidth: '90%' }}>
                            <span className="sub-title text-primary fw-bold mb-3 d-block" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
                                {t.title}
                            </span>
                            <h2 className="mb-4 display-5 fw-bold" style={{ color: '#030b58' }}>
                                {t.subTitle}
                            </h2>
                            <p className="lead mb-5 text-muted" style={{ lineHeight: '1.9' }}>
                                {t.desc}
                            </p>
                            <Link
                                href="/about"
                                className={`btn btn-primary mt-4`}
                                style={{ minWidth: '130px' }}
                            >
                                <i className={`fas ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'} transition-transform`}></i>
                                {t.readMore}
                            </Link>
                            <style jsx>{`
                                .group-hover-arrow:hover i {
                                    transform: translateX(${isAr ? '-8px' : '8px'});
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OperationsAbout
