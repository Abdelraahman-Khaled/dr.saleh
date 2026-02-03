import React from 'react'
import { HomeHero } from './home/components/HomeHero'
import ScrollTicker from './components/ScrollTicker'
import HomeMission from './home/components/HomeMission'
import HomePrivacy from './home/components/HomePrivacy'
import HomeTestimonials from './home/components/HomeTestimonials'
import HomeImportance from './home/components/HomeImportance'
import PatientJourney from './home/components/PatientJourney'
import VideoGallery from './home/components/VideoGallery'
import PhotoGallery from './home/components/PhotoGallery'
import BMICalculator from './home/components/BMICalculator'
import HomeOperations from './home/components/HomeOperations'
import HomeFeedback from './home/components/HomeFeedback'
import HomeFAQ from './home/components/HomeFAQ'
import HomeBlog from './home/components/HomeBlog'
import HomeAppointment from './home/components/HomeAppointment'

export const metadata = {
    title: "د. صالح الخلف | أستاذ واستشاري أول جراحة التجميل والترميم",
    description: "الموقع الرسمي للدكتور صالح الخلف. متخصص في جراحات التجميل والترميم، تجميل الأنف، وشد الوجه بأحدث الخبرات والتقنيات الألمانية.",
    alternates: {
        canonical: 'https://drsalehalkhalaf.com',
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Saleh Al-Khalaf',
    image: 'https://drsalehalkhalaf.com/assets/img/logo.png',
    '@id': 'https://drsalehalkhalaf.com',
    url: 'https://drsalehalkhalaf.com',
    telephone: '+966535195519',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Riyadh',
        addressCountry: 'SA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.7136,
        longitude: 46.6753,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
    },
    sameAs: [
        'https://x.com/drsalehalkhalaf',
        'https://www.instagram.com/dr.salehalkhalaf',
        'https://www.youtube.com/@dr.salehalkhalaf',
        'https://tiktok.com/@dr.salehalkhalaf',
        'https://www.facebook.com/dr.salehalkhalaf/',
        'https://www.snapchat.com/@drsalehalkhalaf',
        'https://www.linkedin.com/in/%D8%B5%D8%A7%D9%84%D8%AD-%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%AF%D9%8I/'
    ],
};

const page = () => {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div>
                <HomeHero />
                <ScrollTicker />
                <HomeMission />
                <HomeImportance />
                <PatientJourney />
                <HomePrivacy />
                <HomeTestimonials />
                <HomeAppointment />
                <VideoGallery />
                <HomeOperations />
                {/* <HomeFAQ /> */}
                {/* <HomeBlog /> */}
            </div>
        </>
    )
}

export default page