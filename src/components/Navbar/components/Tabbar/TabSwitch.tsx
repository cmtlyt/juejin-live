'use client';

import { useEffect, useState } from 'react';
import { debounce } from '@cmtlyt/base';

interface IProps {
  baseTabbar: React.ReactNode;
  shrinkTabbar: React.ReactNode;
}

export function TabbarSwitch(props: IProps) {
  const { baseTabbar, shrinkTabbar } = props;

  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const resizeHandler = debounce(() => {
      setIsShrink(window.innerWidth <= 1190);
    }, 200);

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return isShrink ? shrinkTabbar : baseTabbar;
}
