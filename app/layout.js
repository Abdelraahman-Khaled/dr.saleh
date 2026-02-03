import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import MagicCursor from "./components/MagicCursor";
import Script from "next/script";

export const metadata = {
    metadataBase: new URL('https://drsalehalkhalaf.com'),
    title: {
        default: "د. صالح الخلف - استشاري أول جراحة التجميل والترميم",
        template: "%s | د. صالح الخلف"
    },
    description: "د. صالح الخلف أستاذ واستشاري أول جراحة التجميل والترميم. متخصص في جراحات الوجه، تجميل الأنف، وترميم الحروق بأحدث التقنيات الألمانية.",
    keywords: ["جراحة التجميل", "تجميل الأنف", "ترميم الحروق", "د. صالح الخلف", "Plastic Surgery", "Reconstructive Surgery", "Saudi Arabia"],
    authors: [{ name: "Dr. Saleh Al-Khalaf" }],
    creator: "Dr. Saleh Al-Khalaf",
    publisher: "Dr. Saleh Al-Khalaf",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        alternateLocale: 'en_US',
        url: 'https://drsalehalkhalaf.com',
        siteName: 'Dr. Saleh Al-Khalaf',
        title: "د. صالح الخلف - خيارك الأول لجراحة التجميل والترميم",
        description: "أستاذ واستشاري أول جراحة التجميل والترميم. نقدم رعاية طبية متكاملة بأحدث التقنيات والخبرات الألمانية.",
        images: [
            {
                url: '/assets/img/about-img1.png',
                width: 1200,
                height: 630,
                alt: 'Dr. Saleh Al-Khalaf',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "د. صالح الخلف",
        description: "استشاري أول جراحة التجميل والترميم.",
        images: ['/assets/img/about-img1.png'],
        creator: '@drsalehalkhalaf',
    },
    icons: {
        icon: '/assets/img/favicon.png',
        shortcut: '/assets/img/favicon.png',
        apple: '/assets/img/favicon.png',
    },
};




export default function RootLayout({ children }) {
    // Note: Since this is a server component, we use ar as default.
    // The LanguageProvider will update document attributes on the client.
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-straight/css/uicons-regular-straight.css"
                />
                <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/style-ar.css" />
            </head>
            <body>
                <LanguageProvider initialLanguage="ar">
                    <Navbar />
                    {children}
                    <MagicCursor />
                    <Preloader />
                    <Footer />

                    {/* Scripts */}
                    <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
                    <Script src="/assets/js/bootstrap.bundle.min.js" />
                    <Script src="/assets/js/owl.carousel.min.js" />
                    <Script src="/assets/js/slick.min.js" />
                    <Script src="/assets/js/jquery.magnific-popup.min.js" />
                    <Script src="/assets/js/jquery.nice-select.min.js" />
                    <Script src="/assets/js/jquery.meanmenu.js" />
                    <Script src="/assets/js/jquery.ajaxchimp.min.js" />
                    <Script src="/assets/js/parallax.min.js" />
                    <Script src="/assets/js/jquery.appear.min.js" />
                    <Script src="/assets/js/wow.min.js" />
                    <Script src="/assets/js/main.js" strategy="lazyOnload" />
                </LanguageProvider>
            </body>
        </html>
    );
}
