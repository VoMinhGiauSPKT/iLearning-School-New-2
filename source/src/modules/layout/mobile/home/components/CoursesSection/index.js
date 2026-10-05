import React, { useCallback, useState } from 'react';
import SectionHeading from '@components/common/elements/SectionHeading';

import { FALLBACK_COURSES } from './constants';
import CourseCard from './CourseCard';
import CurriculumAccordion from './CurriculumAccordion';

import styles from './index.module.scss';

const CoursesSection = ({ courses: customCourses, onAddToCart }) => {
    const courses = customCourses && customCourses.length > 0 ? customCourses : FALLBACK_COURSES;
    const [ expandedCourseIds, setExpandedCourseIds ] = useState({ 'course-1': true });

    const toggleCourse = useCallback((courseId) => {
        setExpandedCourseIds((prev) => ({
            ...prev,
            [courseId]: !prev[courseId],
        }));
    }, []);

    return (
        <section className={styles.coursesSection} id="courses">
            <SectionHeading
                subtitle="Trải nghiệm dự án thực tế cùng UI8"
                title="Các khoá học sắp khai giảng"
                align="center"
            />

            <div className={styles.coursesList}>
                {courses.map((course) => {
                    const isExpanded = !!expandedCourseIds[course.id];
                    return (
                        <div key={course.id} className={styles.courseListItem}>
                            <CourseCard
                                course={course}
                                isExpanded={isExpanded}
                                onToggleExpand={() => toggleCourse(course.id)}
                                onAddToCart={onAddToCart}
                            />
                            {isExpanded && (
                                <CurriculumAccordion
                                    stages={course.curriculumStages}
                                    onRegister={() => onAddToCart && onAddToCart(course)}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={styles.allCoursesAction}>
                <button type="button" className={styles.allCoursesBtn}>
                    Tất cả khoá học
                </button>
            </div>
        </section>
    );
};

export default CoursesSection;
