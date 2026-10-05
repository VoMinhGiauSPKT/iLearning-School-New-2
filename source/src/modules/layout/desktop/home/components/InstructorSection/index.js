import React, { useCallback, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import QuoteIcon from '@components/common/elements/QuoteIcon';
import SectionHeading from '@components/common/elements/SectionHeading';

import { FALLBACK_INSTRUCTORS } from './constants';

import styles from './index.module.scss';

const InstructorSection = ({ instructors: customInstructors }) => {
    const instructors =
        customInstructors && customInstructors.length > 0 ? customInstructors : FALLBACK_INSTRUCTORS;
    const [ activeInstructorSlide, setActiveInstructorSlide ] = useState(0);

    const prevInstructorSlide = useCallback(() => {
        setActiveInstructorSlide((prev) => Math.max(0, prev - 1));
    }, []);

    const nextInstructorSlide = useCallback(() => {
        setActiveInstructorSlide((prev) => Math.min(instructors.length - 1, prev + 1));
    }, [ instructors.length ]);

    const currentInstructor = instructors[activeInstructorSlide] || instructors[0];
    const isFirstInstructor = activeInstructorSlide === 0;
    const isLastInstructor = activeInstructorSlide === instructors.length - 1;
    const goToSlide = setActiveInstructorSlide;

    if (!instructors || instructors.length === 0) return null;

    return (
        <section className={styles.instructorSection} id="instructors">
            <SectionHeading
                subtitle="Nhân sự nòng cốt"
                title="Đội ngũ giảng viên"
                align="center"
            />
            <div className={styles.instructorMainCard}>
                <div
                    className={styles.instructorPhotoBox}
                    style={
                        currentInstructor.avatar
                            ? { backgroundImage: `url(${currentInstructor.avatar})` }
                            : undefined
                    }
                />
                <div className={styles.instructorInfoBox}>
                    <QuoteIcon color="#FFFFFF" width={36} height={28} />
                    <div className={styles.instructorQuoteWrap}>
                        {currentInstructor.quotePara1 && (
                            <p className={styles.quotePara}>{currentInstructor.quotePara1}</p>
                        )}
                        {currentInstructor.quotePara2 && (
                            <p className={styles.quotePara}>{currentInstructor.quotePara2}</p>
                        )}
                    </div>
                    <div className={styles.instructorIdentity}>
                        <h3 className={styles.instructorName}>{currentInstructor.name}</h3>
                        <p className={styles.instructorRole}>{currentInstructor.role}</p>
                    </div>
                </div>

                {/* Dots Pagination - Bottom Center */}
                <div className={styles.sliderDots}>
                    {instructors.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`${styles.dot} ${idx === activeInstructorSlide ? styles.active : ''}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Chuyển tới giảng viên ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows - Bottom Right */}
                <div className={styles.sliderArrows}>
                    <button
                        type="button"
                        className={styles.prevBtn}
                        onClick={prevInstructorSlide}
                        disabled={isFirstInstructor}
                        aria-label="Giảng viên trước"
                    >
                        <LuChevronLeft size={28} />
                    </button>
                    <button
                        type="button"
                        className={styles.nextBtn}
                        onClick={nextInstructorSlide}
                        disabled={isLastInstructor}
                        aria-label="Giảng viên tiếp theo"
                    >
                        <LuChevronRight size={28} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
