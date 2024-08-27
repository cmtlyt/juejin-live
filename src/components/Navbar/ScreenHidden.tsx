'use client';

import { debounce, gc } from '@cmtlyt/base';
import { useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

interface IProps {
  distance?: number;
  children: React.ReactNode;
}

export function ScrollHidden(props: IProps) {
  const { distance = 200, children } = props;
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setHidden(scrollTop > distance);
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navDom = navRef.current;
      if (!navDom) return;

      const { height } = navDom.getBoundingClientRect();

      navDom.style.top = hidden ? `-${height}px` : '';
      document.documentElement.style.setProperty('--navbar-height', `${hidden ? 0 : height}px`);
    };

    updateNavbarHeight();
  }, [hidden]);

  return (
    <nav
      ref={navRef}
      className={gc([
        styles.navbarWrapper,
        'sticky top-0 z-20',
        'bg-white',
        'transition-[top] duration-1000',
      ])}
    >
      {children}
    </nav>
  );
}
