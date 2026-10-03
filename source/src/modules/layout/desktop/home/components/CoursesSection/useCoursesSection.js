import { useCallback, useState } from 'react';

import { FALLBACK_COURSES } from './constants';

const useCoursesSection = (customCourses) => {
    const courses = customCourses && customCourses.length > 0 ? customCourses : FALLBACK_COURSES;
    const [ expandedCourseIds, setExpandedCourseIds ] = useState({ 'course-1': true });

    const toggleCourse = useCallback((courseId) => {
        setExpandedCourseIds((prev) => ({
            ...prev,
            [courseId]: !prev[courseId],
        }));
    }, []);

    return {
        courses,
        expandedCourseIds,
        toggleCourse,
    };
};

export default useCoursesSection;
