import React from 'react';

import CoursesSection from './components/CoursesSection';
import PartnerCallout from './components/PartnerCallout';
import VideoShowcase from './components/VideoShowcase';

import styles from './index.module.scss';

const HomePageMobile = ({ settings, courses, onAddToCart }) => {
    return (
        <div className={styles.mobileContainer}>
            {/* 1. Video Showcase */}
            <VideoShowcase videoUrl={settings?.videoUrl} />

            {/* 2. Partner Callout */}
            <PartnerCallout description={settings?.description} />

            {/* 3. Courses & Curriculum Accordion */}
            <CoursesSection courses={courses} onAddToCart={onAddToCart} />
        </div>
    );
};

export default HomePageMobile;
