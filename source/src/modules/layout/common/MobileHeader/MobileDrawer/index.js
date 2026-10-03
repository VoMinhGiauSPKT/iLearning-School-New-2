import React, { useEffect } from 'react';
import { LuChevronDown, LuX } from 'react-icons/lu';

import styles from './MobileDrawer.module.scss';

const DEFAULT_NAV_LINKS = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Khoá học', href: '#courses', hasDropdown: true },
    { label: 'Góc học viên', href: '#testimonials' },
    { label: 'Giới thiệu', href: '#instructors' },
    { label: 'Blog', href: '#blog' },
];

const MobileDrawer = ({ isOpen, onClose, navLinks = DEFAULT_NAV_LINKS }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [ isOpen, onClose ]);

    if (!isOpen) return null;

    return (
        <div className={styles.drawerOverlay} onClick={onClose} aria-hidden="true">
            <div
                className={styles.drawerContent}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Menu điều hướng di động"
            >
                <div className={styles.drawerHeader}>
                    <span className={styles.drawerTitle}>Menu</span>
                    <button
                        type="button"
                        className={styles.drawerCloseBtn}
                        onClick={onClose}
                        aria-label="Đóng menu"
                    >
                        <LuX size={24} />
                    </button>
                </div>

                <nav className={styles.drawerNav}>
                    <ul className={styles.drawerNavList}>
                        {navLinks.map((link, idx) => (
                            <li key={idx} className={styles.drawerNavItem}>
                                <a
                                    href={link.href}
                                    className={styles.drawerNavLink}
                                    onClick={onClose}
                                >
                                    <span>{link.label}</span>
                                    {link.hasDropdown && <LuChevronDown size={16} />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.drawerAuthGroup}>
                    <a href="/login" className={styles.drawerLoginLink} onClick={onClose}>
                        Log In
                    </a>
                    <button type="button" className={styles.drawerSignBtn} onClick={onClose}>
                        SIGN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileDrawer;
