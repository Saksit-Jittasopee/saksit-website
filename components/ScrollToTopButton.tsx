'use client';
import { useState, useEffect } from 'react';

    const ScrollToTopButton = () => {
      const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

      return (
        <>
          {isVisible && (
            <button onClick={scrollToTop} className='border border-solid w-12 h-12 rounded-full bg-blue-500 text-white font-bold hover:scale-105 cursor-pointer'
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '99',
              }}>
              ↑
            </button>
          )}
        </>
      );
    };

    export default ScrollToTopButton;