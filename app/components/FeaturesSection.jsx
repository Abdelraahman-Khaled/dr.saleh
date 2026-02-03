const FeaturesSection = ({ title, subTitle, desc, list, cards, className, children }) => {
    return (
        <div className={className || ""}>
            {title && <span className="sub-title">{title}</span>}
            {subTitle && <h2>{subTitle}</h2>}
            {desc && <p>{desc}</p>}

            <ul>
                {list &&
                    list.map((skill, index) => (
                        <li key={index}>
                            <span>
                                <i className="flaticon-check-mark"></i>
                                {skill}
                            </span>
                        </li>
                    ))}
                {cards &&
                    cards.map((item, index) => (
                        <li key={index}>
                            <div className="icon">
                                <i className={item.icon || "flaticon-doctor"}></i>
                            </div>
                            <span>{item.title}</span>
                            {item.sub && <p className="mb-2">{item.sub}</p>}
                            {item.items && (
                                <div className="services-details-desc">
                                    <ul className="services-features-list my-4" style={{ marginTop: '10px' }}>
                                        {item.items.map((sub, i) => (
                                            <li key={i}>
                                                <i className="flaticon-check-mark"></i> {sub}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))

                }
            </ul>
            {children}
        </div>
    )
}

export default FeaturesSection;