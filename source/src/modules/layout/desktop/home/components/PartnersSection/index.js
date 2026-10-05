import React, { useCallback, useMemo, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import SectionHeading from '@components/common/elements/SectionHeading';

import { FALLBACK_PARTNERS } from './constants';

import styles from './index.module.scss';

const VISIBLE_COUNT = 5;

const PartnersSection = ({ partners: customPartners }) => {
    const partners =
        customPartners && customPartners.length > 0 ? customPartners : FALLBACK_PARTNERS;
    const [ partnerStartIndex, setPartnerStartIndex ] = useState(0);

    const totalPartners = partners.length;
    const hasPartnerNavigation = totalPartners > VISIBLE_COUNT;

    const visiblePartners = useMemo(() => {
        if (!hasPartnerNavigation) return partners;
        const result = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            const index = (partnerStartIndex + i) % totalPartners;
            result.push(partners[index]);
        }
        return result;
    }, [ hasPartnerNavigation, partners, partnerStartIndex, totalPartners ]);

    const handlePrevPartner = useCallback(() => {
        if (!hasPartnerNavigation) return;
        setPartnerStartIndex((prev) => (prev - 1 + totalPartners) % totalPartners);
    }, [ hasPartnerNavigation, totalPartners ]);

    const handleNextPartner = useCallback(() => {
        if (!hasPartnerNavigation) return;
        setPartnerStartIndex((prev) => (prev + 1) % totalPartners);
    }, [ hasPartnerNavigation, totalPartners ]);

    if (!visiblePartners || visiblePartners.length === 0) return null;

    return (
        <section className={styles.partnersSection} id="partners">
            <SectionHeading
                subtitle="Khách hàng và"
                title="Đối tác của UI8"
                align="center"
            />
            <div className={styles.partnersCardBanner}>
                <button
                    type="button"
                    className={`${styles.partnerNavBtn} ${styles.navBtnLeft}`}
                    onClick={handlePrevPartner}
                    disabled={!hasPartnerNavigation}
                    aria-label="Đối tác trước"
                >
                    <LuArrowLeft size={24} />
                </button>

                <div className={styles.partnersLogosWrap}>
                    {visiblePartners.map((partner, idx) => (
                        <div key={`${partner.id}-${idx}`} className={styles.partnerItem} title={partner.name}>
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className={styles.partnerLogoImg}
                                />
                            ) : (
                                <span className={styles.partnerFallbackText}>{partner.name}</span>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className={`${styles.partnerNavBtn} ${styles.navBtnRight}`}
                    onClick={handleNextPartner}
                    disabled={!hasPartnerNavigation}
                    aria-label="Đối tác tiếp theo"
                >
                    <LuArrowRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default PartnersSection;
