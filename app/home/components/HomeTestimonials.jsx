"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/context/translation';

import DirectionArrow from '../../components/DirectionArrow';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeTestimonials = () => {
    const { language } = useLanguage();
    const t = translations.home[language];
    const isRTL = language === 'ar';

    return (
        <section className="content-inner testimonial-section bg-text position3 py-5" style={{ overflow: 'hidden' }}>
            <div className="container-fluid px-3 px-md-4">
                <div className="row gx-0 gx-md-4 justify-content-between align-items-center">
                    {/* Before/After Slider Column */}
                    <div className=" col-8 col-lg-5  mb-4 mb-sm-5 mb-lg-0 px-2 px-md-3" style={{ position: 'relative' }}>
                        <DirectionArrow />
                        <BeforeAfterSlider
                            beforeImg="/assets/img/before1.webp"
                            afterImg="/assets/img/after1.webp"
                        />
                    </div>

                    {/* Testimonials Column */}
                    <div className="col-lg-6 col-md-12 px-2 px-md-3" style={{ paddingLeft: isRTL ? '0' : '1rem', paddingRight: isRTL ? '1rem' : '0' }}>
                        {/* Section Header */}
                        <div
                            className="our-mission-content section-head style-15 m-b30 pb-4"
                            style={{
                                textAlign: isRTL ? 'right' : 'left',
                                maxWidth: '600px',
                                margin: '0 auto',
                            }}
                        >
                            <span className="sub-title mb-2 d-block">{t.testimonialSection.title}</span>
                            <h2 className="mb-0">
                                {t.testimonialSection.subTitle}
                            </h2>
                        </div>

                        {/* Testimonials Swiper */}
                        <div className="testimonial-swiper-container" style={{ position: 'relative' }}>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 25,
                                    },
                                    1024: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 30,
                                    },
                                    1200: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 30,
                                    },
                                }}
                                navigation={{
                                    nextEl: '.testimonial-next',
                                    prevEl: '.testimonial-prev',
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                dir={isRTL ? 'rtl' : 'ltr'}
                                className="testimonial-swiper"
                            >
                                {t.feedback.items.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-1" style={{ height: '100%' }}>
                                            {/* Testimonial Header */}
                                            <div className="testimonial-head" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flexDirection: isRTL ? 'row-reverse' : 'row',
                                                gap: '12px',
                                            }}>
                                                <div className="testimonial-rating">
                                                    <ul className="star-list d-flex p-0 list-unstyled mb-0" style={{ gap: '4px' }}>
                                                        {[...Array(5)].map((_, i) => (
                                                            <li key={i}>
                                                                <svg width="20" height="19" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.536 1.15738C11.704 0.739143 12.296 0.739143 12.464 1.15738L15.2452 8.08308C15.3167 8.26118 15.4838 8.38263 15.6753 8.39561L23.1215 8.9005C23.5711 8.93099 23.7541 9.49408 23.4082 9.78306L17.6809 14.5683C17.5337 14.6913 17.4698 14.8878 17.5166 15.0739L19.3374 22.3117C19.4474 22.7488 18.9684 23.0968 18.5867 22.8571L12.2659 18.8889C12.1033 18.7868 11.8967 18.7868 11.7341 18.8889L5.41331 22.8571C5.0316 23.0968 4.5526 22.7488 4.66256 22.3117L6.48337 15.0739C6.5302 14.8878 6.46635 14.6913 6.31907 14.5683L0.59176 9.78305C0.245895 9.49408 0.428855 8.93099 0.87852 8.9005L8.32468 8.39561C8.51617 8.38263 8.68332 8.26118 8.75484 8.08308L11.536 1.15738Z" fill="#FFBE17"></path>
                                                                </svg>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <h3 className="title mb-0" style={{ fontSize: '1.1rem' }}>{item.name}</h3>
                                            </div>

                                            {/* Testimonial Text */}
                                            <div className="testimonial-info my-3 my-md-4">
                                                <div className="testimonial-text">
                                                    <p
                                                        className="mb-0"
                                                        style={{
                                                            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                                            lineHeight: '1.6',
                                                            textAlign: isRTL ? 'right' : 'left',
                                                        }}
                                                    >
                                                        {item.feedback}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Testimonial Footer */}
                                            <div
                                                className="testimonial-detail d-flex align-items-center"
                                                style={{
                                                    gap: '12px',
                                                    flexDirection: isRTL ? 'row-reverse' : 'row',
                                                }}
                                            >
                                                <div className="dz-media">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={60}
                                                        height={60}
                                                        className="rounded-circle"
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="clearfix" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                                                    <h5 className="testimonial-name mb-1 text-dark fw-bold" style={{ fontSize: '1rem' }}>
                                                        {item.name}
                                                    </h5>
                                                    <span className="testimonial-position text-primary opacity-75" style={{ fontSize: '0.9rem' }}>
                                                        {language === 'ar' ? 'مريض' : 'Patient'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons */}
                            <div
                                className="testimonial-navigation mt-4 d-flex gap-3"
                                style={{
                                    justifyContent: isRTL ? 'flex-end' : 'flex-start',
                                    flexDirection: isRTL ? 'row-reverse' : 'row',
                                }}
                            >
                                <div
                                    className="testimonial-prev btn-prev rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: '2px solid #ddd',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 19L8 12L15 5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="testimonial-next btn-next rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        border: '2px solid #ddd',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 5L16 12L9 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
