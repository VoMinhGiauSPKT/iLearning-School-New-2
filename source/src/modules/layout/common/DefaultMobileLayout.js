import React from 'react';

import CartDrawer from '@components/common/elements/CartDrawer';

import MobileHeader from './MobileHeader';

import styles from './DefaultMobileLayout.module.scss';

const DefaultMobileLayout = ({ children, layoutProps }) => {

    return (
        <div className={styles.layout}>
            {!layoutProps?.hideHeader && <MobileHeader />}
            <main className={styles.main}>{children}</main>
            <CartDrawer />
        </div>
    );
};

export default DefaultMobileLayout;
