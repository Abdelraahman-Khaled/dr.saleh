"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import Introduction from './components/Introduction'
import AboutHero from './components/AboutHero'
import Expertise from './components/Expertise'
import Certifications from './components/Certifications'
import AcademicResearch from './components/AcademicResearch'
import ClinicalExpertise from './components/ClinicalExpertise'
import OurVision from './components/OurVision'
import AboutConsultation from './components/AboutConsultation'
import HomeFAQ from '../home/components/HomeFAQ'
import HomeTestimonials from '../home/components/HomeTestimonials'
import HomeAppointment from '../home/components/HomeAppointment'

const About = () => {
    const { language } = useLanguage();
    const isAr = language === 'ar';

    return (
        <>
            {/* Page Header / Breadcrumbs */}
            <HeroSection
                title={isAr ? "عن الدكتور" : "About The Doctor"}
                subTitleLink="/"
                number="3"
            />

            {/* Animated Ticker */}
            <ScrollTicker />

            {/* Introduction Section (Luxury Snippet) */}

            {/* About Hero - Doctor Profile & Why Choose Highlights */}
            <AboutHero />

            {/* Conscious Consultation CTA */}
            <Expertise />

            {/* Professional Boards & Accreditations */}
            <Certifications />

            {/* Academic Leadership & Scientific Contributions */}
            <AcademicResearch />

            {/* Fields of Clinical Expertise - The Detailed List */}
            <ClinicalExpertise />

            {/* Philosophy & Professional Values */}
            <OurVision />

            {/* CTA Section - Book Consultation */}
            <AboutConsultation />
        </>
    )
}

export default About;