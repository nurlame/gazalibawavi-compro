import { useEffect, useState } from 'react'

export const useMouse = (mouseHandler, { onInnerWidth = 3000 } = {}) => {
  useEffect(() => {
    document.addEventListener('mousemove', window.innerWidth >= onInnerWidth ? mouseHandler : () => null);
    return () => document.removeEventListener('mousemove', mouseHandler);
  }, []);
};



export const useScreen = (onScreen = (e) => e) => {
  const [size, setSize] = useState('');
  const [width, setWidth] = useState(0);

  const handleScreen = (e) => {
    onScreen(e);
    const width = window.innerWidth;

    let size = '';
    if (width <= 768) size = 'sm';
    if (width >= 1024 && width <= 1280) size = 'md';
    if (width >= 1280 && width <= 1536) size = 'lg';
    if (width >= 1536) size = 'xl';
    setWidth(width);
    setSize(size);
  };

  useEffect(() => {
    handleScreen(window);
    window.addEventListener('resize', handleScreen);
    return () => window.removeEventListener('resize', handleScreen);
  }, []);

  return {
    screen: size,
    width,
  };
};

export const useWindowScroll = (onScroll = (e) => e) => {
  const handleScroll = (e) => {
    onScroll(e.target.scrollingElement);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

