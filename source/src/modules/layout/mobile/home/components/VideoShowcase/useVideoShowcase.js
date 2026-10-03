import { useMemo } from 'react';
import { getYoutubeEmbedUrl } from '@utils/video';

export const DEFAULT_VIDEO_URL = 'https://youtu.be/Tx7QiS5asAo?si=Y9pE4QJt887vK2z7';

const useVideoShowcase = (videoUrl) => {
    const embedUrl = useMemo(() => {
        return getYoutubeEmbedUrl(videoUrl || DEFAULT_VIDEO_URL, false);
    }, [ videoUrl ]);

    return {
        embedUrl,
    };
};

export default useVideoShowcase;
