"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import './Introduction.css'

const Introduction = () => {
    const { language } = useLanguage();
    // Use about.hero.pill or a dedicated home.intro if we decide to re-add it.
    // For now, mapping from the about.hero.pill since it matches the snippet.
    const t = translations.about[language].hero;
    const isAr = language === 'ar';

    // The intro copy as provided in the snippet
    const introData = {
        title: isAr ? "دقة تمنحك الطمأنينة…" : "Precision that gives you peace of mind…",
        titleItalic: isAr ? "وبالنتيجة تشبهك!" : "And results that resemble you!",
        desc: isAr
            ? "نجمع بين التقنية الألمانية المتقدمة واللمسة الفنية العربية لنقدم لك نتائج طبيعية تعزز ثقتك بنفسك وتبرز جمالك الخاص."
            : "Combining advanced German technology with an Arabic artistic touch to provide natural results that enhance your self-confidence and highlight your unique beauty."
    };

    return (
        <section className="luxury-intro-area py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="luxury-intro-content">
                            <span className="intro-badge">
                                {t.pill}
                            </span>

                            <h2 className="heading-luxury">
                                {introData.title} <br />
                                <span className="italic-accent">{introData.titleItalic}</span>
                            </h2>

                            <p className="intro-description">
                                {introData.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;
