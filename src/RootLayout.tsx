import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import { ReduxProvider } from "./redux/Provider";

export default function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ReduxProvider>
        <Header />
        <Outlet />

        <Footer />
        <ScrollToTopButton />
      </ReduxProvider>
    </>
  );
}
