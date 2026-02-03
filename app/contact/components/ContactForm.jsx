"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const ContactForm = () => {
    const { language } = useLanguage();
    const t = translations.contact[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        msg_subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset form or handle API call here
    };

    return (
        <section className="contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>{t.title}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-form">
                            {submitted ? (
                                <div className="alert alert-success" role="alert">
                                    {t.success}
                                </div>
                            ) : (
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.name}
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.email}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="phone_number"
                                                    id="phone_number"
                                                    required
                                                    className="form-control"
                                                    placeholder={t.phone}
                                                    value={formData.phone_number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="msg_subject"
                                                    id="msg_subject"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.subject}
                                                    value={formData.msg_subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="13"
                                                    required
                                                    placeholder={t.message}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">
                                                {t.send}
                                                <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="contact-info h-100">
                            <h3>{t.contactInfoTitle}</h3>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <span>{t.phoneLabel}</span>
                                    <a dir="ltr" style={{ textAlign: language === 'ar' ? 'right' : 'left' }} href="tel:966535195519">+966 53 519 5519</a>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <span>{t.whatsapp}</span>
                                    <a dir="ltr" style={{ textAlign: language === 'ar' ? 'right' : 'left' }} href="https://wa.me/966535195519" target="_blank" rel="noreferrer">+966 53 519 5519</a>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <span>{t.emailLabel}</span>
                                    <a href="mailto:support@drsalehalkhalaf.com"><span>support@drsalehalkhalaf.com</span></a>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span>{t.location}</span>
                                    <p className="mb-0">{t.address || "Riyadh, Saudi Arabia"}</p>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <span>{t.workingHours}</span>
                                    <p className="mb-0">Sun - Thu: 9AM - 9PM</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="disclaimer-notice p-4 border rounded-4 h-100">
                            <h4 className=" mb-3">
                                <i className="fas fa-exclamation-triangle mx-2"></i>
                                {t.disclaimerTitle}
                            </h4>
                            <p className="small mb-0">{t.disclaimerDesc}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="privacy-notice p-4 border rounded-4 h-100">
                            <h4 className="text-success mb-3">
                                <i className="fas fa-user-shield mx-2"></i>
                                {t.privacyNoticeTitle}
                            </h4>
                            <p className="small mb-0">{t.privacyNoticeDesc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-map">
                <Image
                    src="/assets/img/bg-map.png"
                    alt="map bg"
                    width={1000}
                    height={600}
                />
            </div>
        </section>
    )
}

export default ContactForm;