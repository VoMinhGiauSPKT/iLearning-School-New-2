import React, { useCallback, useEffect, useState } from 'react';
import defaultHeroImg from '@assets/images/SLIDER.png';

import styles from './index.module.scss';

export const DEFAULT_SLIDERS = [
    {
        id: 'hero-1',
        title: 'Học lập trình thực chiến cùng chuyên gia hàng đầu',
        description: 'Chương trình đào tạo chuyên sâu từ nền tảng đến dự án doanh nghiệp thực tế. Cam kết việc làm sau tốt nghiệp.',
        image: defaultHeroImg,
        url: '#courses',
    },
];

const HeroSection = ({ slider, sliderList = slider }) => {
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

    return (
        <section className={styles.heroSection}>
            <div
                className={styles.heroBanner}
                style={{
                    backgroundImage: `
                        linear-gradient(0deg, rgba(24, 32, 41, 0.6), rgba(24, 32, 41, 0.6)),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 81.32%),
                        url("${currentHero.image || defaultHeroImg}")
                    `,
                }}
            >
                <div className={styles.heroContent} key={currentHero.id || activeHeroSlide}>
                    <h1 className={styles.heroTitle}>{currentHero.title}</h1>
                    <p className={styles.heroSubtitle}>{currentHero.description}</p>
                    {currentHero.url && (
                        <div>
                            <a
                                href={currentHero.url}
                                style={{ textDecoration: 'none' }}
                            >
                                <button type="button" className={styles.heroRegisterBtn}>
                                    Đăng ký ngay
                                </button>
                            </a>
                        </div>
                    )}
                </div>

                {totalSlides > 1 && (
                    <div
                        className={styles.sliderIndicator}
                        onClick={handleHeroIndicatorClick}
                        title="Nhấp để chuyển slide"
                    >
                        <div className={styles.indicatorTrack}>
                            <div
                                className={styles.indicatorFill}
                                style={{
                                    width: `${100 / totalSlides}%`,
                                    transform: `translateX(${activeHeroSlide * 100}%)`,
                                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
