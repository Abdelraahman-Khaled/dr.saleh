"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import OperationsHero from './components/OperationsHero'
import OperationsAbout from './components/OperationsAbout'
import OperationsProcess from './components/OperationsProcess'
import OperationsContainer from './components/OperationsContainer'
import OperationsFooter from './components/OperationsFooter'
import OperationsPrivacy from './components/OperationsPrivacy'
import { useLanguage } from '@/context/LanguageContext'
import HomeTestimonials from '../home/components/HomeTestimonials'
import HomeAppointment from '../home/components/HomeAppointment'
import HomeOperations from '../home/components/HomeOperations'
import VideoGallery from '../home/components/VideoGallery'

const page = () => {
    const { language } = useLanguage();
    const isAr = language === "ar";

    return (
        <>
            <HeroSection
                title={isAr ? "الجراحات" : "Plastic & Reconstructive Surgery"}
                number={4}
            />
            <ScrollTicker />

            <OperationsHero />

            <OperationsAbout />

            {/* Surgical Process Steps */}
            <OperationsProcess />

            {/* Cosmetic Surgery List */}
            <OperationsContainer category="cosmetic" />

            {/* Reconstructive Surgery List */}
            <OperationsContainer category="reconstructive" />

            <OperationsFooter />

            {/* Privacy Disclaimer */}
            <OperationsPrivacy />

            <HomeTestimonials />

            <HomeAppointment />

            <VideoGallery />

            <HomeOperations />



        </>
    )
}

export default page