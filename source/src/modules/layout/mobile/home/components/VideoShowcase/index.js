import React, { useMemo } from 'react';
import { getYoutubeEmbedUrl } from '@utils/video';

import styles from './index.module.scss';

export const DEFAULT_VIDEO_URL = 'https://youtu.be/Tx7QiS5asAo?si=Y9pE4QJt887vK2z7';

const VideoShowcase = ({ videoUrl }) => {
    const embedUrl = useMemo(() => {
        return getYoutubeEmbedUrl(videoUrl || DEFAULT_VIDEO_URL, false);
    }, [ videoUrl ]);

    if (!embedUrl) return null;

    return (
        <section className={styles.videoShowcaseSection} id="video-showcase">
            <div className={styles.videoContainer}>
                <iframe
                    key={embedUrl}
                    src={embedUrl}
                    title="Video giới thiệu khóa học thực tế"
                    className={styles.youtubeIframe}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default VideoShowcase;
