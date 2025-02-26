   
import React, { useState, useEffect } from 'react';
import '../../styles/scrolup.scss'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-up ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <span>↑</span>
    </div>
  );
};

export default ScrollUp;
