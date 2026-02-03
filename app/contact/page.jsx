"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import ContactForm from './components/ContactForm'
import { useLanguage } from '@/context/LanguageContext'

import { translations } from '@/context/translation'

const ContactPage = () => {
    const { language } = useLanguage();
    const t = translations.contact[language];

    return (
        <>
            <HeroSection
                title={t.head}
                number={1}
            />
            <ScrollTicker />
            <ContactForm />
        </>
    )
}

export default ContactPage;