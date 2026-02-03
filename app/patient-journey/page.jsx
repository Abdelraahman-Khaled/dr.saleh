"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import './PatientJourney.css'

const PatientJourney = () => {
    const { language } = useLanguage();
    const t = translations.patientJourneyPage[language];
    const isAr = language === 'ar';

    return (
        <div className={`patient-journey-page ${isAr ? 'rtl' : 'ltr'}`}>
            <HeroSection
                title={t.hero.title}
                number="2"
            />
            <ScrollTicker />

            {/* Intro Section with Gradient Border */}
            <section className="journey-intro py-5 mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="intro-card-modern">
                                <p className="intro-text">{t.hero.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Steps Section */}
            <section className="journey-timeline-section">
                <div className="container">
                    <div className="section-title-modern text-center mb-5">
                        <span className="subtitle-badge">{isAr ? "الرحلة" : "The Journey"}</span>
                        <h2 className="main-title">{t.steps.title}</h2>
                    </div>

                    <div className="timeline-container">
                        {t.steps.items.map((step, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="timeline-content">
                                    <div className="timeline-icon-wrapper">
                                        <div className="timeline-icon">
                                            <span className="step-number">{index + 1}</span>
                                        </div>
                                    </div>

                                    <div className="timeline-card">
                                        <div className="card-header-modern">
                                            <span className="stage-label">{isAr ? "المرحلة" : "Stage"} {index + 1}</span>
                                            <h3 className="step-title">{step.title.split('. ')[1] || step.title}</h3>
                                        </div>

                                        <p className="step-description">{step.desc}</p>

                                        <ul className="step-points-list">
                                            {step.points.map((point, pIndex) => (
                                                <li key={pIndex}>
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {step.note && (
                                            <div className="step-note-modern">
                                                <i className="fas fa-info-circle"></i>
                                                <p>{step.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section - Redesigned */}
            {/* Why Choose Section - Centered Design */}
            <section className="why-choose-modern">
                <div className="gradient-overlay"></div>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="why-content-centered">
                                <h2 className="section-heading-white text-center mb-5">{t.whyChoose.title}</h2>

                                <div className="why-items-grid-centered">
                                    {t.whyChoose.items.map((item, index) => (
                                        <div key={index} className="why-item-card">
                                            <div className="item-number text-white">{String(index + 1).padStart(2, '0')}</div>
                                            <div className="item-content">
                                                <i className="fas fa-check-circle"></i>
                                                <span>{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Doctor's Message Quote */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <div className="doctor-message-card">
                                <div className="quote-decoration">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <blockquote className="message-quote text-black rounded-4">
                                    {t.message.quote}
                                </blockquote>
                                <div className="message-author">
                                    <div className="author-avatar">
                                        <i className="fas fa-user-md"></i>
                                    </div>
                                    <div className="author-details">
                                        <h5>{t.message.author}</h5>
                                        <p>{isAr ? "جراح تجميل وترميم" : "Plastic & Reconstructive Surgeon"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Booking Section - Redesigned */}
            {/* CTA Booking Section - HomeAppointment Style */}
            {/* CTA Booking Section - Premium Style */}
            <section className="booking-cta-premium">
                <div className="container">
                    <div className="cta-premium-wrapper">
                        <div className="cta-premium-content">
                            <span className="cta-label-small">{isAr ? "احجز موعدك" : "Book Your Appointment"}</span>
                            <h2 className="cta-premium-title">{t.booking.title}</h2>
                            <p className="cta-premium-subtitle">
                                {t.booking.desc1} <br /> {t.booking.desc2}
                            </p>

                            <div className="cta-action-area">
                                <div className="booking-methods">
                                    <h4 className="methods-title">{t.booking.howToBook}</h4>
                                    <div className="methods-buttons">
                                        <a href="tel:966535195519" className="method-btn call-method">
                                            <div className="btn-icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="btn-text">
                                                <span>{isAr ? "اتصل بنا" : "Call Us"}</span>
                                                <strong>{t.booking.call}</strong>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/966535195519" className="method-btn whatsapp-method">
                                            <div className="btn-icon">
                                                <i className="fab fa-whatsapp"></i>
                                            </div>
                                            <div className="btn-text">
                                                <span>{isAr ? "واتساب" : "WhatsApp"}</span>
                                                <strong>{t.booking.whatsapp}</strong>
                                            </div>
                                        </a>
                                    </div>
                                    <p className="guidance-note">{t.booking.guidance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer Section */}
            <section className="disclaimer-modern">
                <div className="container">
                    <div className="disclaimer-card">
                        <i className="fas fa-info-circle"></i>
                        <div className="disclaimer-content">
                            <h5>{t.disclaimer.title}</h5>
                            <p>{t.disclaimer.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PatientJourney;
