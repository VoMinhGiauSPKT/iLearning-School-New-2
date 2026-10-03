import React from 'react';

import CoursesSection from './components/CoursesSection';
import HeroSection from './components/HeroSection';
import InstructorSection from './components/InstructorSection';
import PartnerCallout from './components/PartnerCallout';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoShowcase from './components/VideoShowcase';

import styles from './index.module.scss';

const HomePageDesktop = ({
    settings,
    courses,
    partners,
    instructors,
    testimonials,
    onAddToCart,
}) => {
    return (
        <div className={styles.desktopContainer}>
            {/* 1. Hero Banner Slider */}
            <HeroSection sliderList={settings?.slider} />

            {/* 2. Video Showcase */}
            <VideoShowcase videoUrl={settings?.videoUrl} />

            {/* 3. Partner Callout Banner */}
            <PartnerCallout description={settings?.description} />

            {/* 4. Courses & Curriculum Accordion */}
            <CoursesSection courses={courses} onAddToCart={onAddToCart} />

            {/* 5. Student Testimonials */}
            <TestimonialsSection testimonials={testimonials} />

            {/* 6. Instructors / Faculty */}
            <InstructorSection instructors={instructors} />

            {/* 7. Enterprise Partners */}
            <PartnersSection partners={partners} />
        </div>
    );
};

export default HomePageDesktop;
