import { useCallback, useMemo, useState } from 'react';

import { FALLBACK_PARTNERS } from './constants';

const VISIBLE_COUNT = 5;

const usePartnersSection = (customPartners) => {
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

    return {
        visiblePartners,
        hasPartnerNavigation,
        handlePrevPartner,
        handleNextPartner,
    };
};

export default usePartnersSection;
