"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import Link from 'next/link'
import './ClinicalExpertise.css'

const ClinicalExpertise = () => {
    const { language } = useLanguage();
    const clinical = translations.about[language].clinical;

    return (
        <section className="clinical-expertise-area py-5">
            <div className="container">
                <div className="clinical-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="clinical-content">
                                <h3>{clinical.title}</h3>
                                <p className="main-desc mb-4">{clinical.desc}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clinical-list-wrapper mt-4 mt-lg-0">
                                <ul className="clinical-list">
                                    {clinical.list.map((item, index) => (
                                        <li key={index} className="wow fadeInRight" data-wow-delay={`${index * 0.1}s`}>
                                            <i className='fas fa-check-circle clinical-check-icon'></i>
                                            <span className="clinical-item-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="clinical-content">
                            {clinical.footer && (
                                <div className="clinical-footer mb-4">
                                    <p>{clinical.footer}</p>
                                </div>
                            )}

                            <Link href="/contact" className="btn btn-outline-primary text-center">
                                <span>{clinical.ctaBtn}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClinicalExpertise;
