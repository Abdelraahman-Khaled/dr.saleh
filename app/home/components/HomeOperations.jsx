"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import BlogContent from '@/app/blogs/components/BlogContent'

const HomeOperations = () => {
    const { language } = useLanguage();
    const t = translations.home[language].operations;




    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row gy-4">
                    {t.items.map((operation, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <BlogContent
                                image={operation.cardImage}
                                alt={language === "ar" ? operation.title_ar : operation.title_en || operation.title_ar}
                                title={language === "ar" ? operation.title_ar : operation.title_en || operation.title_ar}
                                description={language === "ar" ? operation.description_ar : operation.description_en || operation.description_ar}
                                slug={language === "ar" ? operation.slug_ar : operation.slug || operation.slug_en}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link href={`/types-of-operations`} className="btn btn-primary d-inline-block">
                        {t.btn} <i className="flaticon-right-chevron"></i>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .single-services-box {
                    padding: 30px;
                    border: 1px solid #eee;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                .single-services-box:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    transform: translateY(-5px);
                }
                .read-more-btn {
                    color: var(--main-color);
                    font-weight: 600;
                    text-decoration: none;
                }
            `}</style>
        </section>
    )
}

export default HomeOperations;
