import React from 'react';

import styles from './index.module.scss';

const DEFAULT_DESCRIPTION = {
    title: 'Hợp tác phát triển & Đào tạo thực chiến',
    description:
        'Chúng tôi liên kết chặt chẽ cùng các tập đoàn công nghệ hàng đầu nhằm xây dựng chương trình giảng dạy thực tế, cập nhật những công nghệ mới nhất.',
};

const PartnerCallout = ({ description = DEFAULT_DESCRIPTION }) => {
    const data = description || DEFAULT_DESCRIPTION;
    const title = data.title || DEFAULT_DESCRIPTION.title;
    const desc = data.description || DEFAULT_DESCRIPTION.description;

    if (!title && !desc) return null;

    return (
        <section className={styles.partnerCalloutSection}>
            <div className={styles.calloutBox}>
                <div className={styles.calloutInner}>
                    {title && <h2 className={styles.calloutTitle}>{title}</h2>}
                    {desc && <p className={styles.calloutDesc}>{desc}</p>}
                </div>
            </div>
        </section>
    );
};

export default PartnerCallout;
