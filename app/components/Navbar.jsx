"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import './Navbar.css';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const isRTL = language === 'ar';

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const t = translations.navbar[language] || translations.navbar.ar;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleLanguageChange = () => {
        toggleLanguage();
        closeMenu();
    };

    const isActive = (path) => {
        if (path === '/') return pathname === path;
        return pathname.startsWith(path);
    };

    const navLinks = [
        { href: t.homeLink, label: t.home },
        { href: t.aboutLink, label: t.about },
        { href: t.operationsLink, label: t.operations },
        { href: t.blogLink, label: t.blog },
        { href: t.mediaLink, label: t.media },
        { href: t.patientJourneyLink, label: t.patientJourney },
        { href: t.faqsLink, label: t.faqs },
        { href: t.contactLink, label: t.contact },
    ];

    return (
        <header>
            <nav className={`modern-navbar ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <Link href={t.homeLink} className="navbar-logo">
                            <Image
                                src="/assets/img/footer-logo.png"
                                alt="Dr. Saleh Logo"
                                width={180}
                                height={50}
                                className="logo-img"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="desktop-nav d-none d-lg-flex">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`nav-link-modern ${isActive(link.href) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="navbar-actions d-none d-lg-flex">
                            <button onClick={handleLanguageChange} className="lang-switcher">
                                <Image src={t.langFlag} alt="Language" width={24} height={24} />
                                <span>{t.langSwitch}</span>
                            </button>

                            <Link href={t.contactLink} className="btn-cta">
                                {t.consultation}
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button onClick={toggleMenu} className="mobile-toggle d-lg-none" aria-label="Toggle Menu">
                            <span className="toggle-line" style={{ transform: isMenuOpen ? 'rotate(45deg) translateY(11.5px)' : 'none' }}></span>
                            <span className="toggle-line" style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
                            <span className="toggle-line" style={{ transform: isMenuOpen ? 'rotate(-45deg) translateY(-11.5px)' : 'none' }}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`mobile-overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}></div>
            <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="mobile-actions">
                        <button onClick={handleLanguageChange} className="lang-switcher">
                            <Image src={t.langFlag} alt="Language" width={24} height={24} />
                            <span>{t.langSwitch}</span>
                        </button>

                        <Link href={t.contactLink} className="btn-cta" onClick={closeMenu}>
                            {t.consultation}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Removed Spacer to allow Navbar to sit on top of the Hero */}
        </header>
    )
}

export default Navbar
