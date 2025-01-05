import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Title: This code is used for loading a page from the top
 */

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
