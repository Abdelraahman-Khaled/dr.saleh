"use client"
import React, { useEffect, useState } from 'react'
import { operationsData } from '@/app/data/operationsData'
import OperationCard from './OperationCard'
import { useLanguage } from '@/context/LanguageContext'
import { getOperations } from '@/app/api/operations'
import { translations } from '@/context/translation'

const OperationsContainer = ({ category = "cosmetic" }) => {
    const { language } = useLanguage();
    const isCosmetic = category === "cosmetic";
    const tKey = isCosmetic ? "listCosmetic" : "listReconstructive";
    const t = translations.operationsPage[language][tKey];
    const [operations, setOperations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Filter local data by language AND category
        const filteredData = operationsData.filter(op =>
            op.language === language &&
            (op.category === category || (!op.category && isCosmetic)) // Fallback for uncategorized
        );
        setOperations(filteredData);
        setLoading(false);
    }, [language, category]);

    return (
        <section className={`services-area ptb-100 ${isCosmetic ? "bg-f4f9fd" : "bg-white"}`}>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{t.title}</span>
                    <h3>{t.desc}</h3>
                </div>

                <div className="row gy-4">
                    {loading ? (
                        <div className="col-12 text-center mt-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-2 text-muted">Thinking...</p>
                        </div>
                    ) : (
                        operations.map((operation) => (
                            <OperationCard key={`${operation.id}-${operation.language}`} operation={operation} />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default OperationsContainer
