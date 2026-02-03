"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import HomeFAQ from '../home/components/HomeFAQ'
import { useLanguage } from '@/context/LanguageContext'

const FAQPage = () => {
    const { language } = useLanguage();
    const isAr = language === 'ar';

    return (
        <>
            <HeroSection
                title={isAr ? "الأسئلة الأكثر شيوعاً" : "Frequently Asked Questions"}
                number={3}
            />
            <ScrollTicker />
            <HomeFAQ />
        </>
    )
}

export default FAQPage;
