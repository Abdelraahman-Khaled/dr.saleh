"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/context/translation';

const HomeAppointment = () => {
    const { language } = useLanguage();
    const t = translations.home[language].appointment;
    const isRTL = language === 'ar';

    return (
        <section
            className="content-wrapper style-3 bg-primary overflow-hidden py-5"
            style={{
                backgroundImage: 'url(/assets/img/pattern.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Image Column */}
                    <div className="col-12 col-md-6 col-lg-5">
                        <div
                            className="dz-media"
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <Image
                                src="/assets/img/appointment.webp"
                                alt="Appointment"
                                width={800}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-12 col-md-6 col-lg-7">
                        <div
                            className="content-info"
                            style={{
                                padding: '2rem 1rem',
                                textAlign: isRTL ? 'right' : 'left',
                            }}
                        >
                            {/* Section Header */}
                            <div className="section-head style-3 position-relative mb-4 z-2">
                                <span
                                    className="sub-title text-white d-block mb-3"
                                    style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                                        opacity: 0.9,
                                        fontWeight: '500',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    {t.subTitle}
                                </span>
                                <h2
                                    className="title text-white mb-0"
                                    style={{
                                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                        fontWeight: '700',
                                        lineHeight: '1.3',
                                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {t.title}
                                </h2>
                            </div>

                            {/* CTA Button */}
                            <div
                                className="bottom-info"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                }}
                            >
                                <Link href="/contact" className="btn btn-light mt-4">
                                    {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                                    <i className="fas fa-bell ms-2"></i>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;
