"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import './Certifications.css'

const Certifications = () => {
    const { language } = useLanguage();
    const certs = translations.about[language].certifications;
    const isAr = language === 'ar';

    return (
        <section className="certifications-area py-5">
            <div className="container">
                <div className="section-title">
                    <span>{certs.title}</span>
                    <h3>{certs.desc}</h3>
                </div>

                <div className="row justify-content-center">
                    {/* Main Boards List */}
                    <div className="col-lg-7">
                        <div className="boards-list">
                            {certs.list.map((cert, index) => (
                                <div key={index} className="single-cert-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                    <div className="cert-icon">
                                        <i className="fas fa-certificate"></i>
                                    </div>
                                    <div className="cert-content">
                                        <h4>{cert.title}</h4>
                                        <span className="cert-sub">{cert.sub}</span>
                                        {cert.detail && <p className="cert-detail">{cert.detail}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Consultant Accreditations & Academic */}
                    <div className="col-lg-5">
                        <div className="consultancy-box">
                            <ul className="consultancy-list">
                                {certs.consultancy.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-award"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="academic-visiting-box mt-4">
                                <h5>{certs.academicTitle}</h5>
                                <p>{certs.academicDetail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certifications;
