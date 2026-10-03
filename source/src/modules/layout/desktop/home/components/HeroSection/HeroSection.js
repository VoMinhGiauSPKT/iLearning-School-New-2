import React from 'react';
import defaultHeroImg from '@assets/images/SLIDER.png';

import useHeroSection from './useHeroSection';

import styles from './HeroSection.module.scss';

const HeroSection = ({ slider, sliderList = slider }) => {
    const {
        currentHero,
        activeHeroSlide,
        totalSlides,
        handleHeroIndicatorClick,
    } = useHeroSection(sliderList);

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
