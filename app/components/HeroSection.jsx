"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import './HeroSection.css'

const HeroSection = ({ title, subTitle, subTitleLink, number }) => {
    const { language } = useLanguage();
    const navT = translations.navbar[language] || translations.navbar.ar;
    const isRTL = language === 'ar';

    return (
        <section className={`hero-modern page-title-area page-title-bg${number}`}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side: Content */}
                    <div className=" hero-content-wrapper page-title-content ">
                        <h2 className="hero-title-modern mb-3">{title}</h2>
                        <div className="breadcrumb-pill">
                            <Link href={navT.homeLink}>{navT.home}</Link>
                            {subTitle && (
                                <Link href={subTitleLink || "#"}>
                                    <span></span>
                                    {subTitle}
                                </Link>
                            )}
                            <span>{title}</span>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    {/* <div className="col-lg-5">
                        <div className="hero-image-container">
                            <Image
                                src="/assets/img/about.webp"
                                alt={title}
                                width={1000}
                                height={600}
                                className="hero-model-img float"
                                priority
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection