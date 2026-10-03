import { useCallback, useState } from 'react';

import { FALLBACK_INSTRUCTORS } from './constants';

const useInstructorSection = (customInstructors) => {
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

    return {
        instructors,
        currentInstructor,
        activeInstructorSlide,
        isFirstInstructor,
        isLastInstructor,
        prevInstructorSlide,
        nextInstructorSlide,
        goToSlide: setActiveInstructorSlide,
    };
};

export default useInstructorSection;
