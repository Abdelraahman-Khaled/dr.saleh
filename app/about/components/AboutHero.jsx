"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'
import Skills from './Skills'
import Link from 'next/link'
import './AboutHero.css'

const AboutHero = () => {
    const { language } = useLanguage();
    const t = translations.about[language].hero;

    return (
        <section id="doctor-profile" className="doctor-details-area py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="doctor-details-image">
                            <Image
                                src="/assets/img/about-img1.png"
                                alt={t.name}
                                width={500}
                                height={600}
                                priority
                                className='rounded-3'
                            />

                            <h3>{t.name}</h3>
                            <span>{t.title}</span>

                            <ul className="social">
                                <li><a target="_blank" href="https://tiktok.com/@dr.salehalkhalaf"><i className="fab fa-tiktok"></i></a></li>
                                <li><a target="_blank" href="https://x.com/drsalehalkhalaf"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@dr.salehalkhalaf"><i className="fab fa-youtube"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/dr.salehalkhalaf"><i className="fab fa-instagram"></i></a></li>
                                <li><a target="_blank" href="https://www.facebook.com/dr.salehalkhalaf/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a target="_blank" href="https://www.snapchat.com/@drsalehalkhalaf"><i className="fab fa-snapchat"></i></a></li>
                                <li><a target="_blank" href="https://www.linkedin.com/in/%D8%B5%D8%A7%D9%84%D8%AD-%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%AF%D9%8I/"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="doctor-details-desc">
                            <span className="intro-badge">
                                {t.pill}
                            </span>
                            <h2>{t.name}</h2>
                            <p>{t.desc1}</p>
                            <p>{t.desc2}</p>

                            <div className="why-choose-highlights mb-4">
                                <h4 className="mb-3">{t.whyChoose.title}</h4>
                                <div className="row">
                                    {t.whyChoose.items.map((item, index) => (
                                        <div key={index} className="col-sm-6 mb-3">
                                            <div className="highlight-item d-flex align-items-center">
                                                <div className="highlight-icon me-3">
                                                    <i className="fas fa-check-circle text-primary"></i>
                                                </div>
                                                <div className="highlight-text">
                                                    <h6 className="mb-0">{item.title}</h6>
                                                    <small className="text-muted">{item.desc}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="btn-box mb-4 d-flex flex-wrap justify-content-between align-items-center gap-2">
                                <div className='col-md-6 text-end'>
                                    <Link href="/contact" className="btn btn-primary mx-1 mb-1">
                                        {t.btn1}
                                        <i className="fas fa-bell"></i>
                                    </Link>
                                    <Link href="https://wa.me/966535195519" target="_blank" className="btn btn-light mx-1">
                                        {t.btn2}
                                        <i className={language === "ar" ? "fas fa-arrow-left" : "fas fa-arrow-right"}></i>
                                    </Link>
                                </div>
                                <div className='col-md-4 text-md-center'>
                                    <Image
                                        src="/assets/img/logo.png"
                                        alt="signature"
                                        width={200}
                                        height={30}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <div className="shape3">
                <Image
                    src="/assets/img/shape/2.png"
                    alt="shape"
                    width={100}
                    height={100}
                    className="wow fadeInLeft"
                />
            </div>
        </section>
    )
}

export default AboutHero;