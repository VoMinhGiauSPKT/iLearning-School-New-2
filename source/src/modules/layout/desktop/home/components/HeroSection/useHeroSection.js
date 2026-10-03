import { useCallback, useEffect, useState } from 'react';
import defaultHeroImg from '@assets/images/SLIDER.png';

export const DEFAULT_SLIDERS = [
    {
        id: 'hero-1',
        title: 'Học lập trình thực chiến cùng chuyên gia hàng đầu',
        description: 'Chương trình đào tạo chuyên sâu từ nền tảng đến dự án doanh nghiệp thực tế. Cam kết việc làm sau tốt nghiệp.',
        image: defaultHeroImg,
        url: '#courses',
    },
];

const useHeroSection = (sliderList) => {
    const list = sliderList && sliderList.length > 0 ? sliderList : DEFAULT_SLIDERS;
    const [ activeHeroSlide, setActiveHeroSlide ] = useState(0);
    const totalSlides = list.length;

    useEffect(() => {
        if (totalSlides <= 1) return;
        const timer = setInterval(() => {
            setActiveHeroSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [ totalSlides ]);

    const handleHeroIndicatorClick = useCallback(() => {
        if (totalSlides > 1) {
            setActiveHeroSlide((prev) => (prev + 1) % totalSlides);
        }
    }, [ totalSlides ]);

    const currentHero = list[activeHeroSlide] || list[0];

    return {
        currentHero,
        activeHeroSlide,
        totalSlides,
        handleHeroIndicatorClick,
    };
};

export default useHeroSection;
