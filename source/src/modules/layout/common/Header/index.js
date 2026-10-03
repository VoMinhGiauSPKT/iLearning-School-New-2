import React, { useCallback, useState } from 'react';
import { LuChevronDown, LuSearch, LuShoppingBag } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import logoSvg from '@assets/images/ilearning/logo/logo.svg';
import cartSelectors from '@selectors/cart';
import { cartActions } from '@store/actions';

import styles from './index.module.scss';

const NAV_LINKS = [
    { label: 'Trang chủ', href: '/', active: true },
    { label: 'Khoá học', href: '#courses', hasDropdown: true },
    { label: 'Góc học viên', href: '#testimonials' },
    { label: 'Giới thiệu', href: '#instructors' },
    { label: 'Blog', href: '#blog' },
];

const Header = () => {
    const dispatch = useDispatch();
    const [ searchQuery, setSearchQuery ] = useState('');
    const totalCount = useSelector(cartSelectors.selectCartTotalCount);

    const handleSearchChange = useCallback((e) => {
        setSearchQuery(e.target.value);
    }, []);

    const handleToggleCart = useCallback(() => {
        dispatch(cartActions.toggleCart());
    }, [ dispatch ]);

    return (
        <header className={styles.desktopSiteHeader}>
            <div className={styles.headerContainer}>
                {/* Left: Brand Logo & Search Box */}
                <div className={styles.headerLeft}>
                    <a href="/" className={styles.brandLogo}>
                        <img src={logoSvg} alt="iLearning School Logo" className={styles.brandLogoImg} />
                        <div className={styles.logoText}>
                            <span className={styles.logoMain}>ilearning</span>
                            <span className={styles.logoSub}>School</span>
                        </div>
                    </a>

                    <div className={styles.headerSearch}>
                        <LuSearch size={23} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm khoá học, bài viết, video..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* Right: Desktop Navigation, Divider, Log In, SIGN, Cart Button */}
                <div className={styles.headerRight}>
                    <nav className={styles.desktopNav}>
                        <ul className={styles.navList}>
                            {NAV_LINKS.map((link, idx) => (
                                <li key={idx} className={styles.navItem}>
                                    <a
                                        href={link.href}
                                        className={`${styles.navLink} ${link.active ? styles.active : ''}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && (
                                            <LuChevronDown size={18} className={styles.dropdownArrow} />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <span className={styles.headerDivider} aria-hidden="true" />

                    <div className={styles.headerAuthGroup}>
                        <a href="/login" className={styles.loginLink}>
                            Log In
                        </a>
                        <button type="button" className={styles.signBtn}>
                            SIGN
                        </button>
                        <button
                            type="button"
                            className={styles.headerCartBtn}
                            onClick={handleToggleCart}
                            aria-label={`Giỏ hàng có ${totalCount} khóa học`}
                            title="Xem giỏ hàng"
                        >
                            <LuShoppingBag size={22} />
                            {totalCount > 0 && <span className={styles.cartBadge}>{totalCount}</span>}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
