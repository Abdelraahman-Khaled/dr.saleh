"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import './AcademicResearch.css'

const AcademicResearch = () => {
    const { language } = useLanguage();
    const academic = translations.about[language].academic;
    const research = translations.about[language].research;

    return (
        <section className="academic-research-area py-5">
            <div className="container">
                <div className="row">
                    {/* Academic Leadership */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="academic-card h-100 wow fadeInLeft">
                            <div className="card-header pb-2">
                                <i className="fas fa-university"></i>
                                <h3>{academic.title}</h3>
                                <span>{academic.sub}</span>
                            </div>
                            <p className="research-desc">{academic.desc}</p>
                            <ul className="academic-list">
                                {academic.items.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-chevron-right"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Scientific Research */}
                    <div className="col-lg-6">
                        <div className="research-card h-100 wow fadeInRight">
                            <div className="card-header pb-2">
                                <i className="fas fa-microscope"></i>
                                <h3>{research.title}</h3>
                                <span>{research.sub}</span>
                            </div>
                            <div className="research-body">
                                <p className="research-desc">{research.desc}</p>
                                <ul className="research-list">
                                    {research.items.map((item, index) => (
                                        <li key={index}>
                                            <i className="fas fa-file-alt"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {research.footer && (
                                    <p className="research-footer mt-4">{research.footer}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcademicResearch;
