import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Loader from "./components/ui/Loader";
import AboutPage from "./pages/AboutPage";
import AccountingServices from "./pages/AccountingServices";
import AppointmentPage from "./pages/AppointmentPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import CaseStudyPage from "./pages/CaseStudyPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import DentistServices from "./pages/DentistServices";
import ErrorPage from "./pages/Error";
import FAQPage from "./pages/FAQPage";
import HealthCareServices from "./pages/HealthCareServices";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OurTeam from "./pages/OurTeam";
import PayrollProcessing from "./pages/PayrollProcessing";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RealStateServices from "./pages/RealStateServices";
import RegisterPage from "./pages/RegisterPage";
import ServicesPage from "./pages/ServicesPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import ShopPage from "./pages/ShopPage";
import TaxationServices from "./pages/TaxationServices";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import TermsConditions from "./pages/TermsConditions";

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/services/payroll-processing",
        element: <PayrollProcessing />,
      },
      {
        path: "/services/accounting-services",
        element: <AccountingServices />,
      },
      {
        path: "/services/taxation-services",
        element: <TaxationServices />,
      },
      {
        path: "/services/real-state-services",
        element: <RealStateServices />,
      },
      {
        path: "/services/healthcare-services",
        element: <HealthCareServices />,
      },
      {
        path: "/services/dentist-services",
        element: <DentistServices />,
      },
      {
        path: "/appointment",
        element: <AppointmentPage />,
      },
      {
        path: "/case-study",
        element: <CaseStudyPage />,
      },
      {
        path: "/case-study/case-study-details",
        element: <CaseStudyDetails />,
      },
      {
        path: "/team",
        element: <OurTeam />,
      },
      {
        path: "/team/:name",
        element: <TeamDetailsPage />,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:name",
        element: <ShopDetailsPage />,
      },
      {
        path: "/shop/shop-details",
        element: <ShopDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:name",
        element: <BlogDetailsPage />,
      },
      {
        path: "/blog-details",
        element: <BlogDetailsPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
