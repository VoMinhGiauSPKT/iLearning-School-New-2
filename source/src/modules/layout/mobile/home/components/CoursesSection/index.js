import React from 'react';
import SectionHeading from '@components/common/elements/SectionHeading';

import CourseCard from './CourseCard';
import CurriculumAccordion from './CurriculumAccordion';
import useCoursesSection from './useCoursesSection';

import styles from './index.module.scss';

const CoursesSection = ({ courses: customCourses, onAddToCart }) => {
    const { courses, expandedCourseIds, toggleCourse } = useCoursesSection(customCourses);

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
