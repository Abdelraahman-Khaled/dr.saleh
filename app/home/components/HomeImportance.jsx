"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'
import Link from 'next/link'

const HomeImportance = () => {
    const { language } = useLanguage();
    const t = translations.home[language].importance;

    return (
        <section className="our-mission-area pb-lg-0 pt-lg-0 ptb-100 mb-5">
            <div className="container p-0">
                <div className="row m-0 flex-sm-row-reverse justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-12 p-0">
                        <FeaturesSection
                            title={t.title}
                            subTitle={t.sub}
                            desc={t.desc}
                            cards={t.cards}
                            className="our-mission-content"
                        >
                            <Link href="/contact" className="btn btn-primary mt-4">
                                {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                                <i className="fas fa-bell ms-2"></i>
                            </Link>
                        </FeaturesSection>
                    </div>

                    <div className="col-lg-5 col-md-12 p-0">
                        <div className="rounded-5 shine">
                            <Image
                                src="/assets/img/young-gril.png"
                                alt="دور جراحة السمنة في تحسين الصحة"
                                width={400}
                                height={400}
                                className="w-50 md-w-100 rounded-5 "
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape4">
                <Image
                    src="/assets/img/shape/3.png"
                    alt="shape"
                    width={308}
                    height={567}
                />
            </div>
        </section>
    )
}

export default HomeImportance;
