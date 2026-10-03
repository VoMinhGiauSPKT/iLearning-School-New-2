import { useCallback, useState } from 'react';

const useCurriculumAccordion = (defaultOpenId = 2) => {
    // Stage 2 is expanded by default to match design
    const [ openStages, setOpenStages ] = useState({ [defaultOpenId]: true });

    const toggleStage = useCallback((stageId) => {
        setOpenStages((prev) => ({
            ...prev,
            [stageId]: !prev[stageId],
        }));
    }, []);

    return {
        openStages,
        toggleStage,
    };
};

export default useCurriculumAccordion;
