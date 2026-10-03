import React, { useCallback, useState } from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LogoMarkIcon } from '@assets/icons/logo-mark.svg';
import cartSelectors from '@selectors/cart';
import { cartActions } from '@store/actions';

import MobileDrawer from './MobileDrawer';

import styles from './index.module.scss';

const MobileHeader = () => {
    const dispatch = useDispatch();
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
    const totalCount = useSelector(cartSelectors.selectCartTotalCount);

    const handleOpenMenu = () => setMobileMenuOpen(true);
    const handleCloseMenu = () => setMobileMenuOpen(false);

    const handleToggleCart = useCallback(() => {
        dispatch(cartActions.toggleCart());
    }, [ dispatch ]);

    const handleConsultClick = () => {
        const target = document.getElementById('footer') || document.getElementById('partners');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className={styles.header}>
                <a href="/" className={styles.logo}>
                    <LogoMarkIcon className={styles.logoIcon} />
                    <div className={styles.logoText}>
                        <span>ilearning</span>
                        <span>School</span>
                    </div>
                </a>

                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.consultBtn}
                        onClick={handleConsultClick}
                    >
                        Liên hệ tư vấn
                    </button>

                    <button
                        type="button"
                        className={styles.cartBtn}
                        onClick={handleToggleCart}
                        aria-label={`Giỏ hàng có ${totalCount} khóa học`}
                        title="Xem giỏ hàng"
                    >
                        <LuShoppingBag size={18} />
                        {totalCount > 0 && <span className={styles.cartBadge}>{totalCount}</span>}
                    </button>

                    <button
                        type="button"
                        className={styles.menuBtn}
                        onClick={handleOpenMenu}
                        aria-label="Mở menu điều hướng"
                    >
                        <svg
                            width="20"
                            height="15"
                            viewBox="0 0 20 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="20" height="2.5" rx="1.25" fill="white" />
                            <rect y="6.25" width="20" height="2.5" rx="1.25" fill="white" />
                            <rect y="12.5" width="20" height="2.5" rx="1.25" fill="white" />
                        </svg>
                    </button>
                </div>
            </header>

            <MobileDrawer
                isOpen={mobileMenuOpen}
                onClose={handleCloseMenu}
            />
        </>
    );
};

export default MobileHeader;
