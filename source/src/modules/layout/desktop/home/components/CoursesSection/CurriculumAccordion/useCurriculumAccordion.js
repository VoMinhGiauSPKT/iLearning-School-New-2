import { useCallback, useState } from 'react';

const useCurriculumAccordion = (defaultOpenId = 2) => {
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
