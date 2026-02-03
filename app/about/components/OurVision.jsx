"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import Image from 'next/image'

const OurVision = () => {
    const { language } = useLanguage();
    const philosophy = translations.about[language].philosophy;
    const values = translations.about[language].values;

    return (
        <section className="our-vision-area py-5">
            <div className="container">
                <div className="section-title">
                    <span>{philosophy.title}</span>
                    <p className="max-w-700 mx-auto" dangerouslySetInnerHTML={{ __html: philosophy.desc }} />
                </div>

                <div className="row justify-content-center align-items-center ">
                    <div className='col-lg-6 col-md-6 col-sm-6 '>
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <div className="single-vision-box h-100 ">
                                <div className="icon">
                                    <i className="fas fa-microscope"></i>
                                </div>

                                <h3>{philosophy.approachTitle}</h3>
                                <p dangerouslySetInnerHTML={{ __html: philosophy.approachDesc }} />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <div className="single-vision-box h-100 mb-0">
                                <div className="icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>

                                <h3 >{values.title}</h3>
                                <div className="values-inline-list pt-3">
                                    {values.desc && <p className="mb-3">{values.desc}</p>}
                                    <ul className="list-unstyled mb-3">
                                        {values.items.map((item, i) => (
                                            <li key={i} className="mb-2 d-flex align-items-start">
                                                <i className="fas fa-check-circle clinical-check-icon"></i>
                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                    {values.footer && <p className="mt-3 border-top pt-2 small text-muted italic">{values.footer}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                        <figure>
                            <Image width={500} height={400} src="/assets/img/vision.webp" alt="vision" className='rounded-4' />
                        </figure>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurVision;
