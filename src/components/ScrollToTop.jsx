// filepath: c:\Users\harsh\Documents\sricharan\src\components\ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls the window to the top when route changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Run the effect when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;