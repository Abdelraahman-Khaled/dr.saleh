"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'
import Link from 'next/link'

const HomeMission = () => {
    const { language } = useLanguage();
    const t = translations.home[language].mission;

    return (
        <section className="our-mission-area pb-lg-0 pt-lg-0 ptb-100 mb-5 ">
            <div className="container p-0">
                <div className="row m-0 justify-content-between align-items-center">
                    <div className="col-lg-7 col-md-12 p-0">
                        <FeaturesSection
                            title={t.title}
                            subTitle={t.sub}
                            desc={t.desc}
                            cards={t.cards}
                            className="our-mission-content mb-4"
                        >
                            <Link href="/contact" className="btn btn-primary mt-4">
                                {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                                <i className="fas fa-bell ms-2"></i>
                            </Link>
                        </FeaturesSection>
                    </div>

                    <div className="col-lg-4 col-md-12 p-0 text-lg-center">
                        <div className="w-100 rounded-5 shine ">
                            <Image
                                src="/assets/img/home.webp"
                                alt="اكتشف فوائد جراحة السمنة وابدأ رحلتك نحو التغيير"
                                width={500}
                                height={500}
                                className="w-50 md-w-100 rounded-5 "
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape3">
                <Image
                    src="/assets/img/shape/2.png"
                    alt="shape"
                    width={308}
                    height={567}
                />
            </div>
        </section>
    )
}

export default HomeMission;