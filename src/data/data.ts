import React from "react";
import { AiFillFileText } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaUsers,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
  PiBinocularsFill,
  PiBuildingsFill,
  PiCalculatorFill,
  PiCalendarBlankFill,
  PiChartLineFill,
  PiChartLineUpFill,
  PiChatCenteredFill,
  PiChatCircleFill,
  PiCheckCircleFill,
  PiCoinFill,
  PiDesktopFill,
  PiDeviceMobileFill,
  PiEnvelopeFill,
  PiFileFill,
  PiFilePlusFill,
  PiFileTextFill,
  PiGearFill,
  PiHandCoinsFill,
  PiHandshakeFill,
  PiHeadphonesFill,
  PiHeartbeatFill,
  PiLightbulbFilamentFill,
  PiMapPinFill,
  PiMoneyFill,
  PiNotePencilBold,
  PiPhoneCallBold,
  PiPhoneCallFill,
  PiRocketLaunchFill,
  PiSealCheckFill,
  PiStarFill,
  PiTimerFill,
  PiToothFill,
  PiUserFill,
  PiUserGearFill,
  PiUserPlusFill,
  PiUsersThreeFill,
  PiWalletFill,
  PiWebhooksLogoFill,
  PiWindowsLogoFill,
} from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

import whyAccupayCard1 from "/images/whyAccoupayCard_1.png";
import whyAccupayCard2 from "/images/whyAccoupayCard_2.png";
import whyAccupayCard3 from "/images/whyAccoupayCard_3.png";
import whyAccupayCard4 from "/images/whyAccoupayCard_4.png";
import whyAccupayCard5 from "/images/whyAccoupayCard_5.png";
import whyAccupayCard6 from "/images/whyAccoupayCard_6.png";

import testimonial1 from "/images/testimonial1.png";
import testimonial2 from "/images/testimonial2.png";
import testimonial3 from "/images/testimonial3.png";
import testimonial4 from "/images/testimonial4.png";
import testimonial5 from "/images/testimonial5.png";
import testimonial6 from "/images/testimonial6.png";
import testimonial7 from "/images/testimonial7.png";
import testimonial8 from "/images/testimonial8.png";

import blogImg1 from "/images/blogImg1.png";
import blogImg2 from "/images/blogImg2.png";
import blogImg3 from "/images/blogImg3.png";

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiKite } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { SlPlane } from "react-icons/sl";

import caseStudyImg1 from "/images/case_study_img1.png";
import caseStudyImg2 from "/images/case_study_img2.png";
import caseStudyImg3 from "/images/case_study_img3.png";
import caseStudyImg4 from "/images/case_study_img4.png";
import caseStudyImg5 from "/images/case_study_img5.png";
import caseStudyImg6 from "/images/case_study_img6.png";

import teamPic1 from "/images/team_image1.png";
import teamPic2 from "/images/team_image2.png";
import teamPic3 from "/images/team_image3.png";
import teamPic4 from "/images/team_image4.png";
import teamPic5 from "/images/team_image5.png";
import teamPic6 from "/images/team_image6.png";

import productImg1 from "/images/produc_Img1.png";
import productImg2 from "/images/produc_Img2.png";
import productImg3 from "/images/produc_Img3.png";
import productImg4 from "/images/produc_Img4.png";
import productImg5 from "/images/produc_Img5.png";
import productImg6 from "/images/produc_Img6.png";

import blogPageImg1 from "/images/blog_img1.png";
import blogPageImg2 from "/images/blog_img2.png";
import blogPageImg3 from "/images/blog_img3.png";
import blogPageImg4 from "/images/blog_img4.png";
import blogPageImg5 from "/images/blog_img5.png";
import blogPageImg6 from "/images/blog_img6.png";

import recentPostImg1 from "/images/recent_post_img1.png";
import recentPostImg3 from "/images/recent_post_img3.png";
import recentPostImg4 from "/images/recent_post_img4.png";

export const headerMenu = [
  {
    id: uuidv4(),
    name: "Home",
    link: "/",
    isSubmenu: false,
  },

  {
    id: uuidv4(),
    name: "Services",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "All Services",
        link: "/services",
      },
      {
        id: uuidv4(),
        name: "Payroll Processing",
        link: "/services/payroll-processing",
      },
      {
        id: uuidv4(),
        name: "Accounting Services",
        link: "/services/accounting-services",
      },
      {
        id: uuidv4(),
        name: "Taxation Services",
        link: "/services/taxation-services",
      },
      {
        id: uuidv4(),
        name: "Real State Services",
        link: "/services/real-state-services",
      },
      {
        id: uuidv4(),
        name: "Healthcare Services",
        link: "/services/healthcare-services",
      },
      {
        id: uuidv4(),
        name: "Dentist Services",
        link: "/services/dentist-services",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Shop",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "Shop Page",
        link: "/shop",
      },
      {
        id: uuidv4(),
        name: "Shop Details",
        link: "/shop/shop-details",
      },
      {
        id: uuidv4(),
        name: "Cart",
        link: "/cart",
      },
      {
        id: uuidv4(),
        name: "Checkout",
        link: "/checkout",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Blog",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "Blog Page",
        link: "/blog",
      },

      {
        id: uuidv4(),
        name: "Blog Details",
        link: "/blog-details",
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Contact",
    link: "/contact",
    isSubmenu: false,
  },

  {
    id: uuidv4(),
    name: "Pages",
    isSubmenu: true,
    submenu: [
      {
        id: uuidv4(),
        name: "Appointment",
        link: "/appointment",
      },
      {
        id: uuidv4(),
        name: "Case Study",
        link: "/case-study",
      },
      {
        id: uuidv4(),
        name: "Case Study Detials",
        link: "/case-study/case-study-details",
      },
      {
        id: uuidv4(),
        name: "Our Team",
        link: "/team",
      },
      {
        id: uuidv4(),
        name: "Team Details",
        link: "/team/team-details",
      },
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },
      {
        id: uuidv4(),
        name: "Pricing",
        link: "/pricing",
      },
      {
        id: uuidv4(),
        name: "FAQ Page",
        link: "/faq",
      },
      {
        id: uuidv4(),
        name: "Login",
        link: "/login",
      },
      {
        id: uuidv4(),
        name: "Register",
        link: "/register",
      },
      {
        id: uuidv4(),
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: uuidv4(),
        name: "Terms & Conditions",
        link: "/terms-conditions",
      },
      {
        id: uuidv4(),
        name: "Error",
        link: "/error",
      },
    ],
  },
];

export const socialLinks = [
  {
    id: uuidv4(),
    name: "Facebook",
    link: "#",
    icon: React.createElement(FaFacebookF),
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "#",
    icon: React.createElement(FaXTwitter),
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    link: "#",
    icon: React.createElement(FaLinkedinIn),
  },
  {
    id: uuidv4(),
    name: "Instagram",
    link: "#",
    icon: React.createElement(FaInstagram),
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    name: "Resources",
    links: [
      {
        id: uuidv4(),
        name: "Home",
        link: "/",
      },
      {
        id: uuidv4(),
        name: "About",
        link: "/about",
      },

      {
        id: uuidv4(),
        name: "Blog",
        link: "/blog",
      },
      {
        id: uuidv4(),
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Services",
    links: [
      {
        id: uuidv4(),
        name: "Accounting Services",
        link: "/services/accounting-services",
      },
      {
        id: uuidv4(),
        name: "Taxations Services",
        link: "/services/taxation-services",
      },
      {
        id: uuidv4(),
        name: "Healthcare Services",
        link: "/services/healthcare-services",
      },
      {
        id: uuidv4(),
        name: "Dentist Services",
        link: "/services/dentist-services",
      },
    ],
  },
];

export const getInTouch = [
  {
    id: uuidv4(),
    name: "Get In Touch",
    links: [
      {
        id: uuidv4(),
        name: "admin@mail.com",
        link: "mailto:example@mail.com",
        isLink: true,
        icon: React.createElement(MdOutlineEmail),
      },
      {
        id: uuidv4(),
        name: "+ 123 456 789",
        isLink: true,
        link: "tel:(000) 123 456 789",
        icon: React.createElement(PiPhoneCallBold),
      },
      {
        id: uuidv4(),
        name: "255 Sheet, City Name Home Land, NY",
        isLink: false,
        icon: React.createElement(MdOutlineLocationOn),
      },
    ],
  },
];

export const teamContactDetails = [
  {
    id: uuidv4(),
    name: "example@mail.com",
    link: "mailto:example@mail.com",
    icon: React.createElement(PiEnvelopeFill),
  },
  {
    id: uuidv4(),
    name: "(000) 123 456 789",
    link: "tel:(000) 123 456 789",
    icon: React.createElement(PiPhoneCallFill),
  },
  {
    id: uuidv4(),
    name: "255 Sheet, City Name Home Land, NY",
    link: "",
    icon: React.createElement(PiMapPinFill),
  },
];

export const solutionsFeatures = [
  {
    id: uuidv4(),
    name: "Tax Preparation",
    icon: React.createElement(AiFillFileText),
  },
  {
    id: uuidv4(),
    name: "Payroll Processing",
    icon: React.createElement(PiHandCoinsFill),
  },
  {
    id: uuidv4(),
    name: "Cost Effective",
    icon: React.createElement(PiLightbulbFilamentFill),
  },
  {
    id: uuidv4(),
    name: "Scale Rapidly",
    icon: React.createElement(PiRocketLaunchFill),
  },
];

export const featuresCard = [
  {
    id: uuidv4(),
    icon: React.createElement(FaUsers),
    name: "EOR employees",
    desc: "Easily hire and pay employees where you don’t have entities with Jonny’s world-wide infrastructure.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    name: "Global Payroll",
    desc: "Streamline your global payroll with precision and compliance. Our expert services ensure accurate and timely.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserGearFill),
    name: "Contractors",
    desc: "Reliable contractors delivering quality craftsmanship and exceptional service. Your perfect project,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserPlusFill),
    name: "Direct employees",
    desc: "Maximize workforce efficiency with our Direct Employees services. Streamline hiring, payroll,",
  },
];

export const stepByStepCard = [
  {
    id: uuidv4(),
    title: "Create An Account",
    desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
    icon: React.createElement(PiFilePlusFill),
  },
  {
    id: uuidv4(),
    title: "Add Your Employees",
    desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
    icon: React.createElement(PiUserFill),
  },
  {
    id: uuidv4(),
    title: "Run Your First Payroll",
    desc: "Join our platform effortlessly! Streamlined user registration with secure verification.",
    icon: React.createElement(PiHandCoinsFill),
  },
];

export const whyAccupayCard = [
  {
    id: uuidv4(),
    img: whyAccupayCard1,
    title: "Hire or relocate team member with in house visa support",
  },
  {
    id: uuidv4(),
    img: whyAccupayCard2,
    title: "Create complaint contracts with a single click very easyly",
  },
  {
    id: uuidv4(),
    img: whyAccupayCard3,
    title: "Send equipment worldwide, without the hassle free work",
  },
  {
    id: uuidv4(),
    img: whyAccupayCard4,
    title: "Offer country- specific benefits at competitive rates",
  },
  {
    id: uuidv4(),
    img: whyAccupayCard5,
    title: "Provide your team with co-working access via work life",
  },
  {
    id: uuidv4(),
    img: whyAccupayCard6,
    title: "Save time using our advance integrations technologies.",
  },
];

export const faqs = [
  {
    id: uuidv4(),
    question: "What services does AccuPay offer?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How does the accounting process work?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "Can AccuPay handle international payroll?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How quickly can services be initiated?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
  {
    id: uuidv4(),
    question: "How do I get in touch with AccuPay's?",
    answer:
      "AccuPay offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
  },
];

export const testimonials = [
  {
    id: uuidv4(),
    img: testimonial1,
    name: "Evelyn Alexander",
    designation: "Small Business Owner",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial2,
    name: "Hunter Romero",
    designation: "HR Manager",
    review:
      "AccuPay's personalized service has been a game-changer for my small business. Efficient payroll processing.",
  },
  {
    id: uuidv4(),
    img: testimonial3,
    name: "Ora Wong",
    designation: "Finance Director",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial4,
    name: "Terry Cruz",
    designation: "CEO, Tech Innovations",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial5,
    name: "Sarah McKinney",
    designation: "Restaurant Owner",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial6,
    name: "Marguerite Potter",
    designation: "CEO, Tech Innovations",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial7,
    name: "Isabelle McKinney",
    designation: "Product Manager",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
  {
    id: uuidv4(),
    img: testimonial8,
    name: "Amy Gutierrez",
    designation: "CFO, Solutions",
    review:
      "AccuPay's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
  },
];

export const pricing = [
  {
    id: uuidv4(),
    icon: React.createElement(GiKite),
    planName: "Basic Plan",
    desc: "Hire employees in 100+ countries where you don't have entities",
    isPopular: false,
    monthlyPrice: "10",
    features: [
      "Accurate and Timely",
      "Basic Financial Records",
      "Starting at $X per month",
    ],
  },
  {
    id: uuidv4(),
    icon: React.createElement(SlPlane),
    planName: "Standard Plan",
    desc: "All packages come with [mention any additional benefits, features, ",
    isPopular: true,
    monthlyPrice: "20",
    features: ["Payroll Processing", "Full Bookkeeping", "Tax Preparation"],
  },
  {
    id: uuidv4(),
    icon: React.createElement(BsFillRocketTakeoffFill),
    planName: "Premium Plan",
    desc: "Explore our case studies to see how businesses like yours have benefited",
    isPopular: false,
    monthlyPrice: "40",
    features: ["Full Bookkeeping", "Tax Preparation", "Financial Advisory"],
  },
];

export const blogSection = [
  {
    id: uuidv4(),
    date: "Jan 15",
    title: "Streamlining Year-End Financial Reporting",
    img: blogImg1,
    desc: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise ",
    category: "Taxation",
  },
  {
    id: uuidv4(),
    date: "Jan 16",
    title: "Best Practices for Employee Expense Management",
    img: blogImg2,
    desc: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,",
    category: "Processing",
  },
  {
    id: uuidv4(),
    date: "Jan 1",
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogImg3,
    desc: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.",
    category: "Taxation",
  },
];

export const contactCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiBinocularsFill),
    title: "Compare Accupay",
    desc: "Explore how AccuPay stands out. Check our comparison.",
    linkText: "Compare Accupay",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiDesktopFill),
    title: "Explore The Demo",
    desc: "Curious about our services? Request a demo to experience firsthand",
    linkText: "See Demo",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Give Us a Ring ",
    desc: "Monday through Friday from 6AM - 6PM MST ",
    linkText: "Call Us",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChatCenteredFill),
    title: "Help Center",
    desc: "Looking for answers? Visit our Help Center for detailed guides",
    linkText: "Help Center",
  },
];

export const integrationsCard = [
  {
    id: uuidv4(),
    icon: React.createElement(HiCurrencyDollar),
    title: "Payment Gateways",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Tax Software Integration",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Expense Management",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time Tracking Systems",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Customer Relationship",
  },
];

export const storyData = [
  {
    id: uuidv4(),
    title: "Who We Are",
    desc: "AccuPay has been at the forefront of delivering innovative financial solutions. Our journey began with a vision to simplify financial processes for businesses of all sizes. Today, we stand proud as a trusted partner, ",
  },
  {
    id: uuidv4(),
    title: "Our Mission",
    desc: "AccuPay is on a mission to empower businesses by providing reliable, efficient, and innovative financial services. We strive to be your go-to partner for all your accounting and payroll needs, enabling you to focus on what you do best.",
  },
  {
    id: uuidv4(),
    title: "Expert Team",
    desc: "Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to financial advisory, we have the expertise to guide your business.",
  },
];

export const ourValues = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Integrity",
    desc: "We are transparent and do the right thing for the right reason",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCheckCircleFill),
    title: "Accountability",
    desc: "We take ownership of outcomes and deliver on our commitments",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Diversity",
    desc: "We seek and leverage differences and unique perspectives",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Customer Centricity",
    desc: "We start with the customer in everything we do",
  },
];

export const awardsData = [
  {
    id: uuidv4(),
    name: "Awwwards SOTD",
    desc: "FOR DISPLAY 2022",
  },
  {
    id: uuidv4(),
    name: "Wix.com",
    desc: "INTERVIEW 2021",
  },
  {
    id: uuidv4(),
    name: "CSS Awards",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Muzli",
    desc: "FEATURE 2020",
  },
  {
    id: uuidv4(),
    name: "Awwwards",
    desc: "FOR MUTEZA 2019",
  },
  {
    id: uuidv4(),
    name: "Chapters Studio",
    desc: "FOR DISPLAY 2018",
  },
];

export const coreServices = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Accounting Services",
    link: "/services/accounting-services",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Payroll Processing",
    link: "/services/payroll-processing",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiFileFill),
    title: "Taxation services",
    link: "/services/taxation-services",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Real Estate Services",
    link: "/services/real-state-services",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Healthcare Services",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
    link: "/services/healthcare-services",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Dentist Services",
    link: "/services/dentist-services",
    desc: "Efficient payroll management is at the heart of our services. Experience seamless payroll processing,",
  },
];

export const whatWeDo = [
  {
    id: uuidv4(),
    title: "Payroll Processing Services",
    desc: "Efficiently manage your payroll with our state-of-the-art processing services. From accurate salary disbursements.",
  },
  {
    id: uuidv4(),
    title: "Accounting and Bookkeeping",
    desc: "Navigate the complexities of financial management with our professional accounting and bookkeeping services. ",
  },
  {
    id: uuidv4(),
    title: "Tax Preparation and Filing",
    desc: "Ensure a seamless tax season with our expert tax preparation and filing services. We handle all necessary documentation.",
  },
  {
    id: uuidv4(),
    title: "Financial Advisory",
    desc: "Empower your business with strategic financial guidance. Our experienced advisors provide insights and recommendations.",
  },
];

export const accountingServices = [
  {
    id: uuidv4(),
    title: "Bookkeeping",
    desc: "Maintain precise and up-to-date records with our professional bookkeeping services. ",
    icon: React.createElement(PiCalculatorFill),
  },
  {
    id: uuidv4(),
    title: "Financial Reporting",
    desc: "Gain valuable insights into your business's performance with our detailed financial reporting.",
    icon: React.createElement(PiFileTextFill),
  },
  {
    id: uuidv4(),
    title: "Tax Planning",
    desc: "Stay tax-compliant and maximize your savings with our expert tax planning services. ",
    icon: React.createElement(PiMoneyFill),
  },
  {
    id: uuidv4(),
    title: "Financial Analysis",
    desc: "Harness the power of data with our financial analysis services. We interpret financial trends, ",
    icon: React.createElement(PiChartLineUpFill),
  },
];

export const neverWorry = [
  {
    id: uuidv4(),
    title: "Great Communication",
    desc: "We resolve issues and offer advice quickly.",
    icon: React.createElement(PiChatCircleFill),
  },

  {
    id: uuidv4(),
    title: "Growth Potential",
    desc: "We proactively offer growth and profitability advice",
    icon: React.createElement(PiChartLineUpFill),
  },
  {
    id: uuidv4(),
    title: "Stay in Compliance",
    desc: "Your dedicated expert knows your business inside and out.",
    icon: React.createElement(PiNotePencilBold),
  },
];

export const accountantFeatures = [
  {
    id: uuidv4(),
    title: "Communication issues.",
    desc: "Plus, accountants often charge by the minute.",
  },
  {
    id: uuidv4(),
    title: "Shrinking business.",
    desc: "There's no such thing as staying the same; you're either growing or you're shrinking.",
  },
  {
    id: uuidv4(),
    title: "Compliance and customer service problems.",
    desc: "National providers are known for mistakes and poor issue resolution.",
  },
];

export const taxationFeatures = [
  {
    id: uuidv4(),
    title: "Tax Preparation and Filing",
    desc: "Ensure a seamless tax season with our expert tax preparation services. We handle all necessary documentation and filing requirements,",
    icon: React.createElement(PiCoinFill),
  },
  {
    id: uuidv4(),
    title: "Strategic Tax Planning",
    desc: "Plan for the future with our strategic tax planning services. We help optimize your financial decisions to maximize savings and minimize potential risks.",
    icon: React.createElement(PiHandCoinsFill),
  },
  {
    id: uuidv4(),
    title: "Compliance Assurance",
    desc: "Stay compliant with ever-changing tax regulations. Our team stays abreast of updates, ensuring your business adheres to all relevant tax laws",
    icon: React.createElement(PiSealCheckFill),
  },
  {
    id: uuidv4(),
    title: "Audit Support",
    desc: "In the event of an audit, our experienced team provides support, helping you navigate the process efficiently and effectively.",
    icon: React.createElement(PiHeadphonesFill),
  },
];

export const whtaWeDoTaxationData = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Expert Tax Professionals",
    desc: "Our team of tax professionals brings extensive knowledge and expertise to handle various tax scenarios.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Personalized Consultations",
    desc: "We understand that every business is unique. Our personalized consultations ensure that our tax services.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiLightbulbFilamentFill),
    title: "Strategic Advice",
    desc: "Beyond compliance, we offer strategic advice to help you make informed financial decisions that benefit your business.",
  },
];

export const realStateFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiBuildingsFill),
    title: "Property Management",
    desc: "Effortlessly manage your properties with our professional property management services. From tenant relations to maintenance, ",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Investment Analysis",
    desc: "Make informed investment decisions with our detailed investment analysis. Our experts assess potential properties and provide insights to guide",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHandshakeFill),
    title: "Real Estate Transactions",
    desc: "Navigate real estate transactions with confidence. Our team facilitates smooth buying, selling, or leasing processes,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Lease Administration",
    desc: "Streamline lease management with our lease administration services. We handle documentation, renewals,",
  },
];

export const servicesFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiMoneyFill),
    title: "Commissions Made Easy",
    desc: "Whether admin or agent, employee or contractor, run unlimited payrolls for your team in just a few clicks.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Time-Saving Workflows",
    desc: "Employees can access earnings, check their paystubs, and add expenses, at the office or on the go.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiStarFill),
    title: "Worry-free work",
    desc: "Never stress about late or incorrect payments again. With Gusto, payroll is accurate, efficient.",
  },
];

export const healthCareFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiHandCoinsFill),
    title: "Payroll for Healthcare Professionals",
    desc: "Efficient payroll processing tailored to the unique needs of healthcare professionals. Ensure accurate and timely compensation",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiGearFill),
    title: "Compliance Management",
    desc: "Stay compliant with ever-evolving healthcare regulations. Our services include compliance management to ensure your practice",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeartbeatFill),
    title: "Financial Advisory for Healthcare Practices",
    desc: "Navigate the financial landscape of healthcare with our expert advisory services. From budgeting to strategic planning,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Healthcare Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your healthcare practice.",
  },
];

export const manageHealthItems = [
  {
    id: uuidv4(),
    icon: React.createElement(PiDeviceMobileFill),
    title: "Mobile Payroll Processing",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiTimerFill),
    title: "Real-Time Compliance",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWalletFill),
    title: "Billing and Invoicing",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiChartLineFill),
    title: "Performance Analytics",
  },
];

export const dentistSectionFeatures = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Payroll for Dental Professionals",
    desc: "Accurate and efficient payroll processing tailored to meet the unique needs of dental professionals. Ensure your dedicated team",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Compliance Management",
    desc: "Stay compliant with the ever-evolving regulations in the dental industry. Our services include compliance management",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    title: "Financial Advisory for Dental Practices",
    desc: "Navigate the financial landscape of dental care with our expert advisory services. From budgeting to strategic planning,",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiUsersThreeFill),
    title: "Dental Consulting",
    desc: "Receive personalized consulting services to address the unique challenges of your dental practice.",
  },
];

export const whyCooseUs = [
  {
    id: uuidv4(),
    icon: React.createElement(PiToothFill),
    title: "Dental Industry Expertise",
    desc: "Our team understands the specific needs and challenges of the dental industry, providing tailored solutions.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiHeadphonesFill),
    title: "Financial Support",
    desc: "Beyond payroll, we offer a range of financial services to support the overall health of your dental practice.",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWebhooksLogoFill),
    title: "Technology Integration",
    desc: "Stay ahead with technology-driven solutions that enhance efficiency and compliance in the dental care sector.",
  },
];

export const caseStudies = [
  {
    id: uuidv4(),
    img: caseStudyImg1,
    name: "Tax Compliance Simple",
  },
  {
    id: uuidv4(),
    img: caseStudyImg2,
    name: "Automated Payroll Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg3,
    name: "A Payroll Case Study",
  },
  {
    id: uuidv4(),
    img: caseStudyImg4,
    name: "Payroll Income Business",
  },
  {
    id: uuidv4(),
    img: caseStudyImg5,
    name: "Accounting Success",
  },
  {
    id: uuidv4(),
    img: caseStudyImg6,
    name: "Payroll Outsourcing Center",
  },
];

export const teamList = [
  {
    id: uuidv4(),
    name: "Bess Collins",
    designation: "Web Designer",
    img: teamPic1,
  },
  {
    id: uuidv4(),
    name: "Micheal James",
    designation: "Accountant",
    img: teamPic2,
  },
  {
    id: uuidv4(),
    name: "Dean Obrien",
    designation: "Tax Specialist",
    img: teamPic3,
  },
  {
    id: uuidv4(),
    name: "Maggie Clark",
    designation: "Manager",
    img: teamPic4,
  },
  {
    id: uuidv4(),
    name: "Rosalie Chapman",
    designation: "Product Manager",
    img: teamPic5,
  },
  {
    id: uuidv4(),
    name: "Verna Gutierrez",
    designation: "CEO, Accupay",
    img: teamPic6,
  },
];

export const caseStudySidebar = [
  {
    id: uuidv4(),
    icon: React.createElement(PiUserFill),
    name: "Client",
    desc: "David Warner",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiCalendarBlankFill),
    name: "Date",
    desc: "15 - January - 2024",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiWindowsLogoFill),
    name: "Category",
    desc: "Payroll Processing",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Location",
    desc: "Garuda, 99 INA",
  },
];

export const teamSkills = [
  {
    id: uuidv4(),
    name: "Web Design",
    percentage: 70,
  },
  {
    id: uuidv4(),
    name: "Mobile App Design",
    percentage: 80,
  },
  {
    id: uuidv4(),
    name: "UI/UX Design",
    percentage: 85,
  },
];

export const shopPage = [
  {
    id: uuidv4(),
    img: productImg1,
    name: "Accounting Software",
    price: "756",
  },
  {
    id: uuidv4(),
    img: productImg2,
    name: "Online Courses",
    price: "637",
  },
  {
    id: uuidv4(),
    img: productImg3,
    name: "Payroll Processing Tools",
    price: "948",
  },
  {
    id: uuidv4(),
    img: productImg4,
    name: "Educational Resources",
    price: "402",
  },
  {
    id: uuidv4(),
    img: productImg5,
    name: "Templates and Forms",
    price: "782",
  },
  {
    id: uuidv4(),
    img: productImg6,
    name: "Tax Compliance",
    price: "573",
  },
];

export const blogList = [
  {
    id: uuidv4(),
    title: "The Evolution of Cloud-Based Accounting Solutions",
    img: blogPageImg1,
    date: "Jan 15",
    tag: "Accounting",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Best Practices for Employee Expense Management",
    img: blogPageImg2,
    date: "Jan 16",
    tag: "Payroll Processing",
    desc: "Explore comprehensive strategies to fortify data security in your accounting operations. ",
  },
  {
    id: uuidv4(),
    title: "Payroll Outsourcing vs. In-House Processing",
    img: blogPageImg3,
    date: "Jan 14",
    tag: "Remote Work",
    desc: "Explore the transformative effects of remote work on payroll processing.",
  },
  {
    id: uuidv4(),
    title: "Streamlining Year-End Financial Reporting",
    img: blogPageImg4,
    date: "Jan 19",
    tag: "Software",
    desc: "Uncover the pros and cons of payroll outsourcing and in-house processing. Delve into cost considerations,",
  },
  {
    id: uuidv4(),
    title: "Ensuring Data Security in Your Accounting Practices",
    img: blogPageImg5,
    date: "Jan 25",
    tag: "Taxation",
    desc: "Discover expert strategies for optimizing employee expense management.",
  },
  {
    id: uuidv4(),
    title: "The Impact of Remote Work on Payroll Processing.",
    img: blogPageImg6,
    date: "Jan 13",
    tag: "Planning",
    desc: "Embark on a journey through the transformative growth of cloud-based accounting solutions.",
  },
];

export const blogCategories = [
  {
    id: uuidv4(),
    name: "Accounting",
    count: "6",
  },
  {
    id: uuidv4(),
    name: "Business",
    count: "4",
  },
  {
    id: uuidv4(),
    name: "Finance",
    count: "8",
  },
  {
    id: uuidv4(),
    name: "Invest",
    count: "3",
  },
  {
    id: uuidv4(),
    name: "Payroll Processing",
    count: "2",
  },
  {
    id: uuidv4(),
    name: "Taxation",
    count: "5",
  },
];

export const recentPost = [
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 15",
    title: "Learn About Payroll Processing Essentials",
  },
  {
    id: uuidv4(),
    img: recentPostImg1,
    date: "December 10",
    title: "Financial Management Strategies People Use",
  },
  {
    id: uuidv4(),
    img: recentPostImg3,
    date: "December 8",
    title: "Recent Industry News and Updates",
  },
  {
    id: uuidv4(),
    img: recentPostImg4,
    date: "December 20",
    title: "Innovations in Accounting Software",
  },
];

export const contactPageCard = [
  {
    id: uuidv4(),
    icon: React.createElement(PiEnvelopeFill),
    name: "Chat to Sales",
    linkText: "accupay@mail.com",
    link: "mailto:accupay@gmail.com",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiPhoneCallFill),
    name: "Contact Us",
    linkText: "+9190-8687-3345-120",
    link: "tel:+9190-8687-3345-120",
  },
  {
    id: uuidv4(),
    icon: React.createElement(PiMapPinFill),
    name: "Visit Our Office",
    address: "London 2HX, United Kingdom",
  },
];

export const blogTags = [
  {
    id: uuidv4(),
    name: "Payroll",
  },
  {
    id: uuidv4(),
    name: "Software",
  },
  {
    id: uuidv4(),
    name: "Accounting",
  },
  {
    id: uuidv4(),
    name: "Solutions",
  },
  {
    id: uuidv4(),
    name: "Planning",
  },
  {
    id: uuidv4(),
    name: "Finance",
  },
  {
    id: uuidv4(),
    name: "Tax",
  },
];
