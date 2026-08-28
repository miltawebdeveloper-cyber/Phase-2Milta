import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { prerenderedShellFor } from './utils/prerenderedShell';
import { ThemeProvider, CssBaseline, CircularProgress } from '@mui/material';
import { ThemeContextProvider, useThemeMode } from './ThemeContext';
import { createAppTheme } from './theme';
import lazyWithRetry from './utils/lazyWithRetry';
import RouteErrorBoundary from './components/RouteErrorBoundary';
import Home from './pages/Home';
const About = lazyWithRetry(() => import('./pages/About'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const Career = lazyWithRetry(() => import('./pages/Career'));
const CareerSub = lazyWithRetry(() => import('./pages/careersub'));
const BookKeeping = lazyWithRetry(() => import('./pages/BookKeeping'));
const TaxPlanning = lazyWithRetry(() => import('./pages/TaxPlanning'));
const VirtualAssistance = lazyWithRetry(() => import('./pages/VirtualAssistance'));

const CPAServices = lazyWithRetry(() => import('./pages/CPAServices'));
const FinancialControllerServices = lazyWithRetry(() => import('./pages/FinancialControllerServices'));
const DataEntryServices = lazyWithRetry(() => import('./pages/DataEntryServices'));
const DigitalMarketing = lazyWithRetry(() => import('./pages/DigitalMarketing'));
const PayrollManagement = lazyWithRetry(() => import('./pages/PayrollManagement'));
const ContractorsCompanies = lazyWithRetry(() => import('./pages/ContractorsCompanies'));
const LawFirms = lazyWithRetry(() => import('./pages/LawFirms'));
const ManufacturingCompanies = lazyWithRetry(() => import('./pages/ManufacturingCompanies'));
const RealEstateCompanies = lazyWithRetry(() => import('./pages/RealEstateCompanies'));
const NonProfit = lazyWithRetry(() => import('./pages/NonProfit'));
const HealthCare = lazyWithRetry(() => import('./pages/HealthCare'));
const RetailBusiness = lazyWithRetry(() => import('./pages/Retail'));
const Restaurant = lazyWithRetry(() => import('./pages/Restaurant'));
const Blog = lazyWithRetry(() => import('./pages/Blog'));
const BlogDetails = lazyWithRetry(() => import('./pages/BlogDetails'));
const Areas = lazyWithRetry(() => import('./pages/Areas'));
const BookkeepingCalifornia = lazyWithRetry(() => import('./states/California/Bookkeeping'));
const TaxCalifornia = lazyWithRetry(() => import('./states/California/Tax'));
const PayrollCalifornia = lazyWithRetry(() => import('./states/California/Payroll'));
const FinancialCalifornia = lazyWithRetry(() => import('./states/California/Financial'));
const DataEntryCalifornia = lazyWithRetry(() => import('./states/California/DataEntry'));
const VirtualAssistantCalifornia = lazyWithRetry(() => import('./states/California/VirtualAssistance'));
const CPACalifornia = lazyWithRetry(() => import('./states/California/CPAfirms'));
const DigitalMarketingCalifornia = lazyWithRetry(() => import('./states/California/DigitalMarketing'));
const BookkeepingFlorida = lazyWithRetry(() => import('./states/Florida/Bookkeeping'));
const TaxFlorida = lazyWithRetry(() => import('./states/Florida/Tax'));
const PayrollFlorida = lazyWithRetry(() => import('./states/Florida/Payroll'));
const FinancialFlorida = lazyWithRetry(() => import('./states/Florida/Financial'));
const DataEntryFlorida = lazyWithRetry(() => import('./states/Florida/DataEntry'));
const VirtualAssistantFlorida = lazyWithRetry(() => import('./states/Florida/VirtualAssistance'));
const CPAFlorida = lazyWithRetry(() => import('./states/Florida/CPAfirms'));
const DigitalMarketingFlorida = lazyWithRetry(() => import('./states/Florida/DigitalMarketing'));
const BookkeepingConnecticut = lazyWithRetry(() => import('./states/Connecticut/Bookkeeping'));
const TaxConnecticut = lazyWithRetry(() => import('./states/Connecticut/Tax'));
const PayrollConnecticut = lazyWithRetry(() => import('./states/Connecticut/Payroll'));
const FinancialConnecticut = lazyWithRetry(() => import('./states/Connecticut/Financial'));
const DataEntryConnecticut = lazyWithRetry(() => import('./states/Connecticut/DataEntry'));
const VirtualAssistantConnecticut = lazyWithRetry(() => import('./states/Connecticut/VirtualAssistance'));
const CPAConnecticut = lazyWithRetry(() => import('./states/Connecticut/CPAfirms'));
const DigitalMarketingConnecticut = lazyWithRetry(() => import('./states/Connecticut/DigitalMarketing'));
const BookkeepingDelaware = lazyWithRetry(() => import('./states/Delaware/Bookkeeping'));
const TaxDelaware = lazyWithRetry(() => import('./states/Delaware/Tax'));
const VirtualAssistantDelaware = lazyWithRetry(() => import('./states/Delaware/VirtualAssistance'));
const DataEntryDelaware = lazyWithRetry(() => import('./states/Delaware/DataEntry'));
const DigitalMarketingDelaware = lazyWithRetry(() => import('./states/Delaware/DigitalMarketing'));
const FinancialDelaware = lazyWithRetry(() => import('./states/Delaware/Financial'));
const PayrollDelaware = lazyWithRetry(() => import('./states/Delaware/Payroll'));
const CPADelaware = lazyWithRetry(() => import('./states/Delaware/CPAfirms'));
const BookkeepingIdaho = lazyWithRetry(() => import('./states/Idaho/Bookkeeping'));
const TaxIdaho = lazyWithRetry(() => import('./states/Idaho/Tax'));
const VirtualAssistantIdaho = lazyWithRetry(() => import('./states/Idaho/VirtualAssistance'));
const DataEntryIdaho = lazyWithRetry(() => import('./states/Idaho/DataEntry'));
const FinancialIdaho = lazyWithRetry(() => import('./states/Idaho/Financial'));
const DigitalMarketingIdaho = lazyWithRetry(() => import('./states/Idaho/DigitalMarketing'));
const CPAIdaho = lazyWithRetry(() => import('./states/Idaho/CPAfirms'));
const PayrollIdaho = lazyWithRetry(() => import('./states/Idaho/Payroll'));
const BookkeepingIndiana = lazyWithRetry(() => import('./states/Indiana/Bookkeeping'));
const TaxIndiana = lazyWithRetry(() => import('./states/Indiana/Tax'));
const CPAIndiana = lazyWithRetry(() => import('./states/Indiana/CPAfirms'));
const VirtualAssistantIndiana = lazyWithRetry(() => import('./states/Indiana/VirtualAssistance'));
const DigitalMarketingIndiana = lazyWithRetry(() => import('./states/Indiana/DigitalMarketing'));
const DataEntryIndiana = lazyWithRetry(() => import('./states/Indiana/DataEntry'));
const FinancialIndiana = lazyWithRetry(() => import('./states/Indiana/Financial'));
const PayrollIndiana = lazyWithRetry(() => import('./states/Indiana/Payroll'));
const BookkeepingMichigan = lazyWithRetry(() => import('./states/Michigan/Bookkeeping'));
const CPAMichigan = lazyWithRetry(() => import('./states/Michigan/CPAfirms'));
const BookkeepingNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/Bookkeeping'));
const TaxNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/Tax'));
const VirtualAssistantNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/VirtualAssistance'));
const DataEntryNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/DataEntry'));
const FinancialNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/Financial'));
const DigitalMarketingNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/DigitalMarketing'));
const CPANewHampshire = lazyWithRetry(() => import('./states/New Hampshire/CPAfirms'));
const PayrollNewHampshire = lazyWithRetry(() => import('./states/New Hampshire/Payroll'));
const PayrollMichigan = lazyWithRetry(() => import('./states/Michigan/Payroll'));
const DataEntryMichigan = lazyWithRetry(() => import('./states/Michigan/DataEntry'));
const FinancialMichigan = lazyWithRetry(() => import('./states/Michigan/Financial'));
const DigitalMarketingMichigan = lazyWithRetry(() => import('./states/Michigan/DigitalMarketing'));
const TaxMichigan = lazyWithRetry(() => import('./states/Michigan/Tax'));
const VirtualAssistantMichigan = lazyWithRetry(() => import('./states/Michigan/VirtualAssistance'));
const BookkeepingMaine = lazyWithRetry(() => import('./states/Maine/Bookkeeping'));
const CPAMaine = lazyWithRetry(() => import('./states/Maine/CPAfirms'));
const PayrollMaine = lazyWithRetry(() => import('./states/Maine/Payroll'));
const TaxMaine = lazyWithRetry(() => import('./states/Maine/Tax'));
const VirtualAssistantMaine = lazyWithRetry(() => import('./states/Maine/VirtualAssistance'));
const DataEntryMaine = lazyWithRetry(() => import('./states/Maine/DataEntry'));
const FinancialMaine = lazyWithRetry(() => import('./states/Maine/Financial'));
const DigitalMarketingMaine = lazyWithRetry(() => import('./states/Maine/DigitalMarketing'));
const BookkeepingKentucky = lazyWithRetry(() => import('./states/Kentucky/Bookkeeping'));
const CPAKentucky = lazyWithRetry(() => import('./states/Kentucky/CPAfirms'));
const PayrollKentucky = lazyWithRetry(() => import('./states/Kentucky/Payroll'));
const TaxKentucky = lazyWithRetry(() => import('./states/Kentucky/Tax'));
const VirtualAssistantKentucky = lazyWithRetry(() => import('./states/Kentucky/VirtualAssistance'));
const DataEntryKentucky = lazyWithRetry(() => import('./states/Kentucky/DataEntry'));
const FinancialKentucky = lazyWithRetry(() => import('./states/Kentucky/Financial'));
const DigitalMarketingKentucky = lazyWithRetry(() => import('./states/Kentucky/DigitalMarketing'));
const BookkeepingGeorgia = lazyWithRetry(() => import('./states/Gorgeia/Bookkeeping'));
const TaxGeorgia = lazyWithRetry(() => import('./states/Gorgeia/Tax'));
const PayrollGeorgia = lazyWithRetry(() => import('./states/Gorgeia/Payroll'));
const FinancialGeorgia = lazyWithRetry(() => import('./states/Gorgeia/Financial'));
const DataEntryGeorgia = lazyWithRetry(() => import('./states/Gorgeia/DataEntry'));
const VirtualAssistantGeorgia = lazyWithRetry(() => import('./states/Gorgeia/VirtualAssistance'));
const CPAGeorgia = lazyWithRetry(() => import('./states/Gorgeia/CPAfirms'));
const DigitalMarketingGeorgia = lazyWithRetry(() => import('./states/Gorgeia/DigitalMarketing'));
const DigitalMarketingMaryland = lazyWithRetry(() => import('./states/Maryland/DigitalMarketing'));
const CPAfirmsMaryland = lazyWithRetry(() => import('./states/Maryland/CPAfirms'));
const DataEntryMaryland = lazyWithRetry(() => import('./states/Maryland/DataEntry'));
const BookkeepingMaryland = lazyWithRetry(() => import('./states/Maryland/Bookkeeping'));
const TaxMaryland = lazyWithRetry(() => import('./states/Maryland/Tax'));
const VirtualAssistantMaryland = lazyWithRetry(() => import('./states/Maryland/VirtualAssistance'));
const FinancialMaryland = lazyWithRetry(() => import('./states/Maryland/Financial'));
const PayrollMaryland = lazyWithRetry(() => import('./states/Maryland/Payroll'));
const PayrollMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/Payroll'));
const BookkeepingMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/Bookkeeping'));
const TaxMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/Tax'));
const CPAMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/CPAfirms'));
const VirtualAssistantMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/VirtualAssistance'));
const DigitalMarketingMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/DigitalMarketing'));
const DataEntryMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/DataEntry'));
const FinancialControllerMassachusetts = lazyWithRetry(() => import('./states/Massachusetts/Financial'));
const BookkeepingNewJersey = lazyWithRetry(() => import('./states/NewJersey/Bookkeeping'));
const TaxNewJersey = lazyWithRetry(() => import('./states/NewJersey/Tax'));
const CPANewJersey = lazyWithRetry(() => import('./states/NewJersey/CPAfirms'));
const VirtualAssistantNewJersey = lazyWithRetry(() => import('./states/NewJersey/VirtualAssistance'));
const DigitalMarketingNewJersey = lazyWithRetry(() => import('./states/NewJersey/DigitalMarketing'));
const DataEntryNewJersey = lazyWithRetry(() => import('./states/NewJersey/DataEntry'));
const FinancialNewJersey = lazyWithRetry(() => import('./states/NewJersey/Financial'));
const PayrollNewJersey = lazyWithRetry(() => import('./states/NewJersey/Payroll'));
const BookkeepingNewYork = lazyWithRetry(() => import('./states/Newyork/Bookkeeping'));
const TaxNewYork = lazyWithRetry(() => import('./states/Newyork/Tax'));
const CPANewYork = lazyWithRetry(() => import('./states/Newyork/CPAfirms'));
const VirtualAssistantNewYork = lazyWithRetry(() => import('./states/Newyork/VirtualAssistance'));
const DigitalMarketingNewYork = lazyWithRetry(() => import('./states/Newyork/DigitalMarketing'));
const DataEntryNewYork = lazyWithRetry(() => import('./states/Newyork/DataEntry'));
const FinancialNewYork = lazyWithRetry(() => import('./states/Newyork/Financial'));
const PayrollNewYork = lazyWithRetry(() => import('./states/Newyork/Payroll'));
const BookkeepingNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/Bookkeeping'));
const TaxNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/Tax'));
const CPANorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/CPAfirms'));
const VirtualAssistantNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/VirtualAssistance'));
const DigitalMarketingNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/DigitalMarketing'));
const DataEntryNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/DataEntry'));
const FinancialNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/Financial'));
const PayrollNorthCarolina = lazyWithRetry(() => import('./states/NorthCarolina/Payroll'));
const BookkeepingOhio = lazyWithRetry(() => import('./states/Ohio/Bookkeeping'));
const TaxOhio = lazyWithRetry(() => import('./states/Ohio/Tax'));
const CPAOhio = lazyWithRetry(() => import('./states/Ohio/CPAfirms'));
const VirtualAssistantOhio = lazyWithRetry(() => import('./states/Ohio/VirtualAssistance'));
const DigitalMarketingOhio = lazyWithRetry(() => import('./states/Ohio/DigitalMarketing'));
const DataEntryOhio = lazyWithRetry(() => import('./states/Ohio/DataEntry'));
const FinancialOhio = lazyWithRetry(() => import('./states/Ohio/Financial'));
const PayrollOhio = lazyWithRetry(() => import('./states/Ohio/Payroll'));
const BookkeepingPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/Bookkeeping'));
const TaxPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/Tax'));
const CPAPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/CPAfirms'));
const VirtualAssistantPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/VirtualAssistance'));
const DigitalMarketingPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/DigitalMarketing'));
const DataEntryPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/DataEntry'));
const FinancialPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/Financial'));
const PayrollPennsylvania = lazyWithRetry(() => import('./states/Pennsylvania/Payroll'));
const BookkeepingSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/Bookkeeping'));
const TaxSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/Tax'));
const CPASouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/CPAfirms'));
const VirtualAssistantSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/VirtualAssistance'));
const DigitalMarketingSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/DigitalMarketing'));
const DataEntrySouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/DataEntry'));
const FinancialSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/Financial'));
const PayrollSouthCarolina = lazyWithRetry(() => import('./states/SouthCarolina/Payroll'));
const BookkeepingTexas = lazyWithRetry(() => import('./states/Texas/Bookkeeping'));
const TaxTexas = lazyWithRetry(() => import('./states/Texas/Tax'));
const CPATexas = lazyWithRetry(() => import('./states/Texas/CPAfirms'));
const VirtualAssistantTexas = lazyWithRetry(() => import('./states/Texas/VirtualAssistance'));
const DigitalMarketingTexas = lazyWithRetry(() => import('./states/Texas/DigitalMarketing'));
const DataEntryTexas = lazyWithRetry(() => import('./states/Texas/DataEntry'));
const FinancialTexas = lazyWithRetry(() => import('./states/Texas/Financial'));
const PayrollTexas = lazyWithRetry(() => import('./states/Texas/Payroll'));
const BookkeepingVirginia = lazyWithRetry(() => import('./states/Virginia/Bookkeeping'));
const TaxVirginia = lazyWithRetry(() => import('./states/Virginia/Tax'));
const CPAVirginia = lazyWithRetry(() => import('./states/Virginia/CPAfirms'));
const VirtualAssistantVirginia = lazyWithRetry(() => import('./states/Virginia/VirtualAssistance'));
const DigitalMarketingVirginia = lazyWithRetry(() => import('./states/Virginia/DigitalMarketing'));
const DataEntryVirginia = lazyWithRetry(() => import('./states/Virginia/DataEntry'));
const FinancialVirginia = lazyWithRetry(() => import('./states/Virginia/Financial'));
const PayrollVirginia = lazyWithRetry(() => import('./states/Virginia/Payroll'));
const BookkeepingWashington = lazyWithRetry(() => import('./states/Washington/Bookkeeping'));
const TaxWashington = lazyWithRetry(() => import('./states/Washington/Tax'));
const CPAWashington = lazyWithRetry(() => import('./states/Washington/CPAfirms'));
const VirtualAssistantWashington = lazyWithRetry(() => import('./states/Washington/VirtualAssistance'));
const DigitalMarketingWashington = lazyWithRetry(() => import('./states/Washington/DigitalMarketing'));
const DataEntryWashington = lazyWithRetry(() => import('./states/Washington/DataEntry'));
const FinancialWashington = lazyWithRetry(() => import('./states/Washington/Financial'));
const PayrollWashington = lazyWithRetry(() => import('./states/Washington/Payroll'));
const BookkeepingNevada = lazyWithRetry(() => import('./states/Nevada/Bookkeeping'));
const TaxNevada = lazyWithRetry(() => import('./states/Nevada/Tax'));
const CPANevada = lazyWithRetry(() => import('./states/Nevada/CPAfirms'));
const VirtualAssistantNevada = lazyWithRetry(() => import('./states/Nevada/VirtualAssistance'));
const DigitalMarketingNevada = lazyWithRetry(() => import('./states/Nevada/DigitalMarketing'));
const DataEntryNevada = lazyWithRetry(() => import('./states/Nevada/DataEntry'));
const FinancialNevada = lazyWithRetry(() => import('./states/Nevada/Financial'));
const PayrollNevada = lazyWithRetry(() => import('./states/Nevada/Payroll'));
const BookkeepingSalem = lazyWithRetry(() => import('./states/Salem/Bookkeeping'));
const TaxSalem = lazyWithRetry(() => import('./states/Salem/Tax'));
const CPASalem = lazyWithRetry(() => import('./states/Salem/CPAfirms'));
const VirtualAssistantSalem = lazyWithRetry(() => import('./states/Salem/VirtualAssistance'));
const DigitalMarketingSalem = lazyWithRetry(() => import('./states/Salem/DigitalMarketing'));
const DataEntrySalem = lazyWithRetry(() => import('./states/Salem/DataEntry'));
const FinancialSalem = lazyWithRetry(() => import('./states/Salem/Financial'));
const PayrollSalem = lazyWithRetry(() => import('./states/Salem/Payroll'));
const BookkeepingUtah = lazyWithRetry(() => import('./states/Utah/Bookkeeping'));
const TaxUtah = lazyWithRetry(() => import('./states/Utah/Tax'));
const CPAUtah = lazyWithRetry(() => import('./states/Utah/CPAfirms'));
const VirtualAssistantUtah = lazyWithRetry(() => import('./states/Utah/VirtualAssistance'));
const DigitalMarketingUtah = lazyWithRetry(() => import('./states/Utah/DigitalMarketing'));
const DataEntryUtah = lazyWithRetry(() => import('./states/Utah/DataEntry'));
const FinancialUtah = lazyWithRetry(() => import('./states/Utah/Financial'));
const PayrollUtah = lazyWithRetry(() => import('./states/Utah/Payroll'));
const BookkeepingWyoming = lazyWithRetry(() => import('./states/Wyoming/Bookkeeping'));
const TaxWyoming = lazyWithRetry(() => import('./states/Wyoming/Tax'));
const CPAWyoming = lazyWithRetry(() => import('./states/Wyoming/CPAfirms'));
const VirtualAssistantWyoming = lazyWithRetry(() => import('./states/Wyoming/VirtualAssistance'));
const DigitalMarketingWyoming = lazyWithRetry(() => import('./states/Wyoming/DigitalMarketing'));
const DataEntryWyoming = lazyWithRetry(() => import('./states/Wyoming/DataEntry'));
const FinancialWyoming = lazyWithRetry(() => import('./states/Wyoming/Financial'));
const PayrollWyoming = lazyWithRetry(() => import('./states/Wyoming/Payroll'));
const BookkeepingNewMexico = lazyWithRetry(() => import('./states/NewMexico/Bookkeeping'));
const TaxNewMexico = lazyWithRetry(() => import('./states/NewMexico/Tax'));
const CPANewMexico = lazyWithRetry(() => import('./states/NewMexico/CPAfirms'));
const VirtualAssistantNewMexico = lazyWithRetry(() => import('./states/NewMexico/VirtualAssistance'));
const DigitalMarketingNewMexico = lazyWithRetry(() => import('./states/NewMexico/DigitalMarketing'));
const DataEntryNewMexico = lazyWithRetry(() => import('./states/NewMexico/DataEntry'));
const FinancialNewMexico = lazyWithRetry(() => import('./states/NewMexico/Financial'));
const PayrollNewMexico = lazyWithRetry(() => import('./states/NewMexico/Payroll'));
const BookkeepingMontana = lazyWithRetry(() => import('./states/Montana/Bookkeeping'));
const TaxMontana = lazyWithRetry(() => import('./states/Montana/Tax'));
const CPAMontana = lazyWithRetry(() => import('./states/Montana/CPAfirms'));
const VirtualAssistantMontana = lazyWithRetry(() => import('./states/Montana/VirtualAssistance'));
const DigitalMarketingMontana = lazyWithRetry(() => import('./states/Montana/DigitalMarketing'));
const DataEntryMontana = lazyWithRetry(() => import('./states/Montana/DataEntry'));
const FinancialMontana = lazyWithRetry(() => import('./states/Montana/Financial'));
const PayrollMontana = lazyWithRetry(() => import('./states/Montana/Payroll'));
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
const PrivacyPolicy = lazyWithRetry(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazyWithRetry(() => import('./pages/TermsofService'));
const Services = lazyWithRetry(() => import('./pages/Services'));
const AccountingSoftware = lazyWithRetry(() => import('./pages/AccountingSoftware'));
const QuickBooksDesktop = lazyWithRetry(() => import('./pages/QuickBooksDesktop'));
const QuickBooksOnline = lazyWithRetry(() => import('./pages/quickBooksOnline'));
const Xero = lazyWithRetry(() => import('./pages/Xero'));
const WaveAccounting = lazyWithRetry(() => import('./pages/WaveAccounting'));

// ── UK site (rendered inside UkLayout under /uk) ──
const UkLayout = lazyWithRetry(() => import('./uk-pages/UkLayout'));
const UkHome = lazyWithRetry(() => import('./uk-pages/Home'));
const UkAbout = lazyWithRetry(() => import('./uk-pages/About'));
const UkWhyMilta = lazyWithRetry(() => import('./uk-pages/WhyMilta'));
const UkServices = lazyWithRetry(() => import('./uk-pages/Services'));
const UkBookKeeping = lazyWithRetry(() => import('./uk-pages/BookKeeping'));
const UkAccountsPayable = lazyWithRetry(() => import('./uk-pages/AccountsPayable'));
const UkAccountsReceivable = lazyWithRetry(() => import('./uk-pages/AccountsReceivable'));
const UkDigitalMarketing = lazyWithRetry(() => import('./uk-pages/DigitalMarketing'));
const UkPayroll = lazyWithRetry(() => import('./uk-pages/PayrollOutsourcing'));
const UkVirtualAssistance = lazyWithRetry(() => import('./uk-pages/VirtualAssistance'));
const UkDataEntry = lazyWithRetry(() => import('./uk-pages/DataEntry'));
const UkEcommerce = lazyWithRetry(() => import('./uk-pages/Ecommerce-accounting'));
const UkHealthcare = lazyWithRetry(() => import('./uk-pages/Healthcare'));
const UkLawFirms = lazyWithRetry(() => import('./uk-pages/LawFirms'));
const UkRealEstate = lazyWithRetry(() => import('./uk-pages/RealEstate'));
const UkHospitality = lazyWithRetry(() => import('./uk-pages/Hospitality'));
const UkBlog = lazyWithRetry(() => import('./uk-pages/Blog'));
const UkBlogDetails = lazyWithRetry(() => import('./uk-pages/BlogDetails'));
const UkContact = lazyWithRetry(() => import('./uk-pages/Contact'));
const UkPrivacy = lazyWithRetry(() => import('./uk-pages/PrivacyPolicy'));
const UkTerms = lazyWithRetry(() => import('./uk-pages/TermsofService'));
const UkContractors = lazyWithRetry(() => import('./uk-pages/Contractors'));
const UkManufacturing = lazyWithRetry(() => import('./uk-pages/Manufacturing'));
const UkNonProfit = lazyWithRetry(() => import('./uk-pages/Non-Profit'));
const UkRestaurant = lazyWithRetry(() => import('./uk-pages/Restaurant'));
const UkRetail = lazyWithRetry(() => import('./uk-pages/RetailBusiness'));
const UkController = lazyWithRetry(() => import('./uk-pages/ControllerService'));
const UkFinancialReporting = lazyWithRetry(() => import('./uk-pages/FinancialReporting'));
const UkInvoiceProcessing = lazyWithRetry(() => import('./uk-pages/InvoiceProcessing'));
const UkAccountingOutsourcing = lazyWithRetry(() => import('./uk-pages/AccountingOutsourcing'));
const UkTaxPlanning = lazyWithRetry(() => import('./uk-pages/TaxPlanning'));
const UkAddblog = lazyWithRetry(() => import('./uk-pages/Addblog'));

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialBar from './components/SocialBar';
import { Box } from '@mui/material';
import { ConsultationProvider } from './components/ConsultationModal';

// Shell for the software sub-pages (QuickBooks, Xero, Wave), which are
// authored as bare content sections. Adds the shared navbar/footer and top
// clearance for the fixed navbar so they render as complete pages.
const SoftwareLayout = ({ children }) => (
  <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
    <Navbar />
    <Box component="main" sx={{ pt: { xs: 10, md: 12 } }}>{children}</Box>
    <Footer />
    <ScrollToTop />
  </Box>
);

// Shown while a lazily-loaded route chunk is being fetched.
//
// On the first paint after a reload this is what the visitor sees, because the
// client boots un-hydrated (see index.jsx): render() empties #root and every
// route is lazy, so the tree suspends before anything of the page exists. The
// container it just emptied held the prerendered HTML for this exact URL, so
// when that snapshot is available it is shown verbatim — the finished page
// stays on screen, unchanged, until React can take over. That is the whole
// reason a reload no longer flashes a blank page with a spinner.
//
// Without a snapshot (a client-side navigation, or a route that was never
// prerendered) it falls back to a spinner under a <Navbar/>. The navbar is
// rendered explicitly: every page carries its own, so omitting it here would
// unmount and remount one across the fallback swap, blinking the logo.
const PageLoader = () => {
  const { pathname, search } = useLocation();
  const shell = prerenderedShellFor(pathname + search);

  // Static markup only — it is inert for the moment it is on screen, and it is
  // this build's own prerender output, never anything user-supplied.
  if (shell) return <div dangerouslySetInnerHTML={{ __html: shell }} />;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress sx={{ color: 'primary.main' }} />
      </Box>
    </Box>
  );
};

function ThemedApp() {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsultationProvider>
      <Router>
        <ScrollToTopOnNavigate />
        <RouteErrorBoundary>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/us/software/tools-we-use/" element={<AccountingSoftware />} />
          <Route path="/us/software/bookkeeping-with-quickbook-desktop/" element={<SoftwareLayout><QuickBooksDesktop /></SoftwareLayout>} />
          <Route path="/us/software/bookkeeping-with-quickbook-online/" element={<SoftwareLayout><QuickBooksOnline /></SoftwareLayout>} />
          <Route path="/us/software/xero-for-small-business/" element={<SoftwareLayout><Xero /></SoftwareLayout>} />
          <Route path="/us/software/wave-accounting-for-small-business/" element={<SoftwareLayout><WaveAccounting /></SoftwareLayout>} />

          {/* ── UK site ── */}
          <Route path="/uk" element={<UkLayout />}>
            <Route index element={<UkHome />} />
            <Route path="about" element={<UkAbout />} />
            <Route path="why-choose-milta" element={<UkWhyMilta />} />
            <Route path="services" element={<UkServices />} />
            <Route path="bookkeeping-services-for-small-business" element={<UkBookKeeping />} />
            <Route path="accounts-payable-services-in-uk" element={<UkAccountsPayable />} />
            <Route path="accounts-receivable-services-in-uk" element={<UkAccountsReceivable />} />
            <Route path="best-digital-marketing-service-in-uk" element={<UkDigitalMarketing />} />
            <Route path="payroll-services-for-small-business" element={<UkPayroll />} />
            <Route path="virtual-assistant-services-in-the-uk" element={<UkVirtualAssistance />} />
            <Route path="accounting-data-entry-services-uk" element={<UkDataEntry />} />
            <Route path="ecommerce-accounting-service" element={<UkEcommerce />} />
            <Route path="accounting-services-for-healthcare" element={<UkHealthcare />} />
            <Route path="law-firm-accounting-services" element={<UkLawFirms />} />
            <Route path="accounting-services-for-real-estate" element={<UkRealEstate />} />
            <Route path="hospitality-accounting-services" element={<UkHospitality />} />
            <Route path="blogs" element={<UkBlog />} />
            <Route path="blogs/:slug" element={<UkBlogDetails />} />
            <Route path="contact" element={<UkContact />} />
            <Route path="privacy-policy" element={<UkPrivacy />} />
            <Route path="terms-of-service" element={<UkTerms />} />
            <Route path="accounting-services-for-contractors" element={<UkContractors />} />
            <Route path="accounting-services-for-manufacturing" element={<UkManufacturing />} />
            <Route path="accounting-services-for-non-profit" element={<UkNonProfit />} />
            <Route path="accounting-services-for-restaurants" element={<UkRestaurant />} />
            <Route path="accounting-services-for-retail-business" element={<UkRetail />} />
            <Route path="controller-services" element={<UkController />} />
            <Route path="financial-reporting-services" element={<UkFinancialReporting />} />
            <Route path="invoice-processing-services" element={<UkInvoiceProcessing />} />
            <Route path="accounting-outsourcing-services" element={<UkAccountingOutsourcing />} />
            <Route path="tax-planning-services" element={<UkTaxPlanning />} />
            <Route path="addblog" element={<UkAddblog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/open-positions" element={<CareerSub />} />
          <Route path="/us/services/bookkeeping-company-in-the-usa/" element={<BookKeeping />} />
          <Route path="/us/services/tax-planning-and-preparation-services-usa/" element={<TaxPlanning />} />
          <Route path="/us/services/virtual-assistant-service-in-the-usa/" element={<VirtualAssistance />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-usa/" element={<CPAServices />} />
          <Route path="/us/services/financial-controller-services-in-the-usa/" element={<FinancialControllerServices />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-services-in-the-usa/" element={<DataEntryServices />} />
          <Route path="/us/services/best-digital-marketing-agency-in-usa/" element={<DigitalMarketing />} />
          <Route path="/us/services/payroll-management-services-in-the-usa/" element={<PayrollManagement />} />
          <Route path="/us/industry/bookkeeping-for-contractors-companies/" element={<ContractorsCompanies />} />
          <Route path="/us/industry/accounting-services-for-lawfirms/" element={<LawFirms />} />
          <Route path="/us/industry/accounting-services-for-manufacturing/" element={<ManufacturingCompanies />} />
          <Route path="/us/industry/bookkeeping-for-real-estate-companies/" element={<RealEstateCompanies />} />
          <Route path="/us/industry/accounting-services-for-nonprofit-organizations/" element={<NonProfit />} />
          <Route path="/us/industry/accounting-services-for-healthcare/" element={<HealthCare />} />
          <Route path="/us/industry/accounting-services-for-restaurant-businesses/" element={<Restaurant />} />
          <Route path="/us/industry/accounting-services-for-retail-businesses/" element={<RetailBusiness />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/us/blogs/:slug" element={<BlogDetails />} />
          <Route path="/areas-we-serve" element={<Areas />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/us/services/best-bookkeeping-services-in-california/" element={<BookkeepingCalifornia />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-california/" element={<TaxCalifornia />} />
          <Route path="/us/services/payroll-management-services-in-the-california/" element={<PayrollCalifornia />} />
          <Route path="/us/services/financial-controller-services-in-california/" element={<FinancialCalifornia />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-california/" element={<DataEntryCalifornia />} />
          <Route path="/us/services/virtual-assistant-service-in-california/" element={<VirtualAssistantCalifornia />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-california/" element={<CPACalifornia />} />
          <Route path="/us/services/best-digital-marketing-agency-in-california/" element={<DigitalMarketingCalifornia />} />

          {/* Florida */}
          <Route path="/us/services/best-bookkeeping-services-in-florida/" element={<BookkeepingFlorida />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-florida/" element={<TaxFlorida />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-florida/" element={<CPAFlorida />} />
          <Route path="/us/services/virtual-assistant-service-in-florida/" element={<VirtualAssistantFlorida />} />
          <Route path="/us/services/best-digital-marketing-agency-in-florida" element={<DigitalMarketingFlorida />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-florida/" element={<DataEntryFlorida />} />
          <Route path="/us/services/financial-controller-services-in-florida/" element={<FinancialFlorida />} />
          <Route path="/us/services/payroll-management-services-in-the-florida/" element={<PayrollFlorida />} />

          {/* Connecticut */}
          <Route path="/us/services/best-bookkeeping-services-in-connecticut-usa/" element={<BookkeepingConnecticut />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-connecticut/" element={<TaxConnecticut />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-connecticut/" element={<CPAConnecticut />} />
          <Route path="/us/services/virtual-assistant-service-in-connecticut/" element={<VirtualAssistantConnecticut />} />
          <Route path="/us/services/best-digital-marketing-agency-in-connecticut" element={<DigitalMarketingConnecticut />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-connecticut/" element={<DataEntryConnecticut />} />
          <Route path="/us/services/financial-controller-services-in-connecticut/" element={<FinancialConnecticut />} />
          <Route path="/us/services/payroll-management-services-in-the-connecticut/" element={<PayrollConnecticut />} />

          {/* Delaware */}
          <Route path="/us/services/best-bookkeeping-services-in-delaware/" element={<BookkeepingDelaware />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-delaware/" element={<TaxDelaware />} />
          <Route path="/us/services/virtual-assistant-service-in-delaware/" element={<VirtualAssistantDelaware />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-delaware/" element={<DataEntryDelaware />} />
          <Route path="/us/services/best-digital-marketing-agency-in-delaware" element={<DigitalMarketingDelaware />} />
          <Route path="/us/services/financial-controller-services-in-delaware/" element={<FinancialDelaware />} />
          <Route path="/us/services/payroll-management-services-in-the-delaware/" element={<PayrollDelaware />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-delaware/" element={<CPADelaware />} />

          {/* Idaho */}
          <Route path="/us/services/best-bookkeeping-services-in-idaho/" element={<BookkeepingIdaho />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-idaho/" element={<TaxIdaho />} />
          <Route path="/us/services/virtual-assistant-service-in-idaho/" element={<VirtualAssistantIdaho />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-idaho/" element={<DataEntryIdaho />} />
          <Route path="/us/services/financial-controller-services-in-idaho/" element={<FinancialIdaho />} />
          <Route path="/us/services/best-digital-marketing-agency-in-idaho" element={<DigitalMarketingIdaho />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-idaho/" element={<CPAIdaho />} />
          <Route path="/us/services/payroll-management-services-in-the-idaho/" element={<PayrollIdaho />} />

          {/* Indiana */}
          <Route path="/us/services/best-bookkeeping-services-in-indiana/" element={<BookkeepingIndiana />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-indiana/" element={<TaxIndiana />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-indiana/" element={<CPAIndiana />} />
          <Route path="/us/services/virtual-assistant-service-in-indiana/" element={<VirtualAssistantIndiana />} />
          <Route path="/us/services/best-digital-marketing-agency-in-indiana" element={<DigitalMarketingIndiana />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-indiana/" element={<DataEntryIndiana />} />
          <Route path="/us/services/financial-controller-services-in-indiana/" element={<FinancialIndiana />} />
          <Route path="/us/services/payroll-management-services-in-the-indiana/" element={<PayrollIndiana />} />

          {/* Michigan */}
          <Route path="/us/services/best-bookkeeping-services-in-michigan/" element={<BookkeepingMichigan />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-michigan/" element={<TaxMichigan />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-michigan/" element={<CPAMichigan />} />
          <Route path="/us/services/payroll-management-services-in-the-michigan/" element={<PayrollMichigan />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-michigan/" element={<DataEntryMichigan />} />
          <Route path="/us/services/financial-controller-services-in-michigan/" element={<FinancialMichigan />} />
          <Route path="/us/services/best-digital-marketing-agency-in-michigan" element={<DigitalMarketingMichigan />} />

          {/* New Hampshire */}
          <Route path="/us/services/best-bookkeeping-services-in-newhampshire/" element={<BookkeepingNewHampshire />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-newhampshire/" element={<TaxNewHampshire />} />
          <Route path="/us/services/virtual-assistant-service-in-newhampshire/" element={<VirtualAssistantNewHampshire />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-newhampshire/" element={<DataEntryNewHampshire />} />
          <Route path="/us/services/financial-controller-services-in-newhampshire/" element={<FinancialNewHampshire />} />
          <Route path="/us/services/best-digital-marketing-agency-in-newhampshire" element={<DigitalMarketingNewHampshire />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newhampshire/" element={<CPANewHampshire />} />
          <Route path="/us/services/payroll-management-services-in-the-newhampshire/" element={<PayrollNewHampshire />} />
          <Route path="/us/services/virtual-assistant-service-in-michigan/" element={<VirtualAssistantMichigan />} />

          {/* Maine */}
          <Route path="/us/services/best-bookkeeping-services-in-maine/" element={<BookkeepingMaine />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-maine/" element={<TaxMaine />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-maine/" element={<CPAMaine />} />
          <Route path="/us/services/payroll-management-services-in-the-maine/" element={<PayrollMaine />} />
          <Route path="/us/services/virtual-assistant-service-in-maine/" element={<VirtualAssistantMaine />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-maine/" element={<DataEntryMaine />} />
          <Route path="/us/services/financial-controller-services-in-maine/" element={<FinancialMaine />} />
          <Route path="/us/services/best-digital-marketing-agency-in-maine" element={<DigitalMarketingMaine />} />

          {/* Kentucky */}
          <Route path="/us/services/best-bookkeeping-services-in-kentucky/" element={<BookkeepingKentucky />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-kentucky/" element={<TaxKentucky />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-kentucky/" element={<CPAKentucky />} />
          <Route path="/us/services/payroll-management-services-in-the-kentucky/" element={<PayrollKentucky />} />
          <Route path="/us/services/virtual-assistant-service-in-kentucky/" element={<VirtualAssistantKentucky />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-kentucky/" element={<DataEntryKentucky />} />
          <Route path="/us/services/financial-controller-services-in-kentucky/" element={<FinancialKentucky />} />
          <Route path="/us/services/best-digital-marketing-agency-in-kentucky" element={<DigitalMarketingKentucky />} />

          {/* Georgia */}
          <Route path="/us/services/best-bookkeeping-services-in-georgia/" element={<BookkeepingGeorgia />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-georgia/" element={<TaxGeorgia />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-georgia/" element={<CPAGeorgia />} />
          <Route path="/us/services/virtual-assistant-service-in-georgia/" element={<VirtualAssistantGeorgia />} />
          <Route path="/us/services/best-digital-marketing-agency-in-georgia" element={<DigitalMarketingGeorgia />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-georgia/" element={<DataEntryGeorgia />} />
          <Route path="/us/services/financial-controller-services-in-georgia/" element={<FinancialGeorgia />} />
          <Route path="/us/services/payroll-management-services-in-the-georgia/" element={<PayrollGeorgia />} />
          
          {/*MaryLand */}
           <Route path="/us/services/best-digital-marketing-agency-in-maryland/" element={<DigitalMarketingMaryland />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-maryland/" element={<DataEntryMaryland />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-maryland/" element={<CPAfirmsMaryland />} />
           <Route path="/us/services/best-bookkeeping-services-in-maryland/" element={<BookkeepingMaryland />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-maryland/" element={<TaxMaryland />} />
           <Route path="/us/services/virtual-assistant-service-in-maryland/" element={<VirtualAssistantMaryland />} />
           <Route path="/us/services/financial-controller-services-in-maryland/" element={<FinancialMaryland />} />
           <Route path="/us/services/payroll-management-services-in-the-maryland/" element={<PayrollMaryland />} />

          {/*Massachusetts */}
           <Route path="/us/services/payroll-management-services-in-the-massachusetts/" element={<PayrollMassachusetts />} />
           <Route path="/us/services/best-bookkeeping-services-in-massachusetts/" element={<BookkeepingMassachusetts />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-massachusetts/" element={<TaxMassachusetts />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-massachusetts/" element={<CPAMassachusetts />} />
           <Route path="/us/services/virtual-assistant-service-in-massachusetts/" element={<VirtualAssistantMassachusetts />} />
           <Route path="/us/services/best-digital-marketing-agency-in-massachusetts/" element={<DigitalMarketingMassachusetts />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-massachusetts/" element={<DataEntryMassachusetts />} />
           <Route path="/us/services/financial-controller-services-in-massachusetts/" element={<FinancialControllerMassachusetts />} />

          {/*New Jersey */}
           <Route path="/us/services/best-bookkeeping-services-in-newjersey/" element={<BookkeepingNewJersey />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-newjersey/" element={<TaxNewJersey />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newjersey/" element={<CPANewJersey />} />
           <Route path="/us/services/virtual-assistant-service-in-newjersey/" element={<VirtualAssistantNewJersey />} />
           <Route path="/us/services/best-digital-marketing-agency-in-newjersey/" element={<DigitalMarketingNewJersey />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-newjersey/" element={<DataEntryNewJersey />} />
           <Route path="/us/services/financial-controller-services-in-newjersey/" element={<FinancialNewJersey />} />
           <Route path="/us/services/payroll-management-services-in-the-newjersey/" element={<PayrollNewJersey />} />

          {/*New York */}
           <Route path="/us/services/best-bookkeeping-services-in-newyork/" element={<BookkeepingNewYork />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-newyork/" element={<TaxNewYork />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newyork/" element={<CPANewYork />} />
           <Route path="/us/services/virtual-assistant-service-in-newyork/" element={<VirtualAssistantNewYork />} />
           <Route path="/us/services/best-digital-marketing-agency-in-newyork/" element={<DigitalMarketingNewYork />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-newyork/" element={<DataEntryNewYork />} />
           <Route path="/us/services/financial-controller-services-in-newyork/" element={<FinancialNewYork />} />
           <Route path="/us/services/payroll-management-services-in-the-newyork/" element={<PayrollNewYork />} />

          {/*North Carolina */}
           <Route path="/us/services/best-bookkeeping-services-in-northcarolina/" element={<BookkeepingNorthCarolina />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-northcarolina/" element={<TaxNorthCarolina />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-northcarolina/" element={<CPANorthCarolina />} />
           <Route path="/us/services/virtual-assistant-service-in-northcarolina/" element={<VirtualAssistantNorthCarolina />} />
           <Route path="/us/services/best-digital-marketing-agency-in-northcarolina/" element={<DigitalMarketingNorthCarolina />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-northcarolina/" element={<DataEntryNorthCarolina />} />
           <Route path="/us/services/financial-controller-services-in-northcarolina/" element={<FinancialNorthCarolina />} />
           <Route path="/us/services/payroll-management-services-in-the-northcarolina/" element={<PayrollNorthCarolina />} />

          {/*Ohio */}
           <Route path="/us/services/best-bookkeeping-services-in-ohio/" element={<BookkeepingOhio />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-ohio/" element={<TaxOhio />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-ohio/" element={<CPAOhio />} />
           <Route path="/us/services/virtual-assistant-service-in-ohio/" element={<VirtualAssistantOhio />} />
           <Route path="/us/services/best-digital-marketing-agency-in-ohio/" element={<DigitalMarketingOhio />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-ohio/" element={<DataEntryOhio />} />
           <Route path="/us/services/financial-controller-services-in-ohio/" element={<FinancialOhio />} />
           <Route path="/us/services/payroll-management-services-in-the-ohio/" element={<PayrollOhio />} />

          {/*Pennsylvania */}
           <Route path="/us/services/best-bookkeeping-services-in-pennsylvania/" element={<BookkeepingPennsylvania />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-pennsylvania/" element={<TaxPennsylvania />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-pennsylvania/" element={<CPAPennsylvania />} />
           <Route path="/us/services/virtual-assistant-service-in-pennsylvania/" element={<VirtualAssistantPennsylvania />} />
           <Route path="/us/services/best-digital-marketing-agency-in-pennsylvania/" element={<DigitalMarketingPennsylvania />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-pennsylvania/" element={<DataEntryPennsylvania />} />
           <Route path="/us/services/financial-controller-services-in-pennsylvania/" element={<FinancialPennsylvania />} />
           <Route path="/us/services/payroll-management-services-in-the-pennsylvania/" element={<PayrollPennsylvania />} />

          {/*South Carolina */}
           <Route path="/us/services/best-bookkeeping-services-in-southcarolina/" element={<BookkeepingSouthCarolina />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-southcarolina/" element={<TaxSouthCarolina />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-southcarolina/" element={<CPASouthCarolina />} />
           <Route path="/us/services/virtual-assistant-service-in-southcarolina/" element={<VirtualAssistantSouthCarolina />} />
           <Route path="/us/services/best-digital-marketing-agency-in-southcarolina/" element={<DigitalMarketingSouthCarolina />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-southcarolina/" element={<DataEntrySouthCarolina />} />
           <Route path="/us/services/financial-controller-services-in-southcarolina/" element={<FinancialSouthCarolina />} />
           <Route path="/us/services/payroll-management-services-in-the-southcarolina/" element={<PayrollSouthCarolina />} />

          {/*Texas */}
           <Route path="/us/services/best-bookkeeping-services-in-texas/" element={<BookkeepingTexas />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-texas/" element={<TaxTexas />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-texas/" element={<CPATexas />} />
           <Route path="/us/services/virtual-assistant-service-in-texas/" element={<VirtualAssistantTexas />} />
           <Route path="/us/services/best-digital-marketing-agency-in-texas/" element={<DigitalMarketingTexas />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-texas/" element={<DataEntryTexas />} />
           <Route path="/us/services/financial-controller-services-in-texas/" element={<FinancialTexas />} />
           <Route path="/us/services/payroll-management-services-in-the-texas/" element={<PayrollTexas />} />

          {/*Virginia */}
           <Route path="/us/services/best-bookkeeping-services-in-virginia/" element={<BookkeepingVirginia />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-virginia/" element={<TaxVirginia />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-virginia/" element={<CPAVirginia />} />
           <Route path="/us/services/virtual-assistant-service-in-virginia/" element={<VirtualAssistantVirginia />} />
           <Route path="/us/services/best-digital-marketing-agency-in-virginia/" element={<DigitalMarketingVirginia />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-virginia/" element={<DataEntryVirginia />} />
           <Route path="/us/services/financial-controller-services-in-virginia/" element={<FinancialVirginia />} />
           <Route path="/us/services/payroll-management-services-in-the-virginia/" element={<PayrollVirginia />} />

          {/* Washington */}
           <Route path="/us/services/best-bookkeeping-services-in-washington/" element={<BookkeepingWashington />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-washington/" element={<TaxWashington />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-washington/" element={<CPAWashington />} />
           <Route path="/us/services/virtual-assistant-service-in-washington/" element={<VirtualAssistantWashington />} />
           <Route path="/us/services/best-digital-marketing-agency-in-washington/" element={<DigitalMarketingWashington />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-washington/" element={<DataEntryWashington />} />
           <Route path="/us/services/financial-controller-services-in-washington/" element={<FinancialWashington />} />
           <Route path="/us/services/payroll-management-services-in-the-washington/" element={<PayrollWashington />} />

          {/* Nevada */}
           <Route path="/us/services/best-bookkeeping-services-in-nevada/" element={<BookkeepingNevada />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-nevada/" element={<TaxNevada />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-nevada/" element={<CPANevada />} />
           <Route path="/us/services/virtual-assistant-service-in-nevada/" element={<VirtualAssistantNevada />} />
           <Route path="/us/services/best-digital-marketing-agency-in-nevada" element={<DigitalMarketingNevada />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-nevada/" element={<DataEntryNevada />} />
           <Route path="/us/services/financial-controller-services-in-nevada/" element={<FinancialNevada />} />
           <Route path="/us/services/payroll-management-services-in-the-nevada/" element={<PayrollNevada />} />

          {/* Salem */}
           <Route path="/us/services/best-bookkeeping-services-in-salem/" element={<BookkeepingSalem />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-salem/" element={<TaxSalem />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-salem/" element={<CPASalem />} />
           <Route path="/us/services/virtual-assistant-service-in-salem/" element={<VirtualAssistantSalem />} />
           <Route path="/us/services/best-digital-marketing-agency-in-salem" element={<DigitalMarketingSalem />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-salem/" element={<DataEntrySalem />} />
           <Route path="/us/services/financial-controller-services-in-salem/" element={<FinancialSalem />} />
           <Route path="/us/services/payroll-management-services-in-the-salem/" element={<PayrollSalem />} />

          {/* Utah */}
           <Route path="/us/services/best-bookkeeping-services-in-utah/" element={<BookkeepingUtah />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-utah/" element={<TaxUtah />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-utah/" element={<CPAUtah />} />
           <Route path="/us/services/virtual-assistant-service-in-utah/" element={<VirtualAssistantUtah />} />
           <Route path="/us/services/best-digital-marketing-agency-in-utah" element={<DigitalMarketingUtah />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-utah/" element={<DataEntryUtah />} />
           <Route path="/us/services/financial-controller-services-in-utah/" element={<FinancialUtah />} />
           <Route path="/us/services/payroll-management-services-in-the-utah/" element={<PayrollUtah />} />

          {/* Wyoming */}
           <Route path="/us/services/best-bookkeeping-services-in-wyoming/" element={<BookkeepingWyoming />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-wyoming/" element={<TaxWyoming />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-wyoming/" element={<CPAWyoming />} />
           <Route path="/us/services/virtual-assistant-service-in-wyoming/" element={<VirtualAssistantWyoming />} />
           <Route path="/us/services/best-digital-marketing-agency-in-wyoming" element={<DigitalMarketingWyoming />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-wyoming/" element={<DataEntryWyoming />} />
           <Route path="/us/services/financial-controller-services-in-wyoming/" element={<FinancialWyoming />} />
           <Route path="/us/services/payroll-management-services-in-the-wyoming/" element={<PayrollWyoming />} />

          {/* New Mexico */}
           <Route path="/us/services/best-bookkeeping-services-in-newmexico/" element={<BookkeepingNewMexico />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-newmexico/" element={<TaxNewMexico />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-newmexico/" element={<CPANewMexico />} />
           <Route path="/us/services/virtual-assistant-service-in-newmexico/" element={<VirtualAssistantNewMexico />} />
           <Route path="/us/services/best-digital-marketing-agency-in-newmexico" element={<DigitalMarketingNewMexico />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-newmexico/" element={<DataEntryNewMexico />} />
           <Route path="/us/services/financial-controller-services-in-newmexico/" element={<FinancialNewMexico />} />
           <Route path="/us/services/payroll-management-services-in-the-newmexico/" element={<PayrollNewMexico />} />

          {/* Montana */}
           <Route path="/us/services/best-bookkeeping-services-in-montana/" element={<BookkeepingMontana />} />
           <Route path="/us/services/tax-planning-and-preparation-service-in-montana/" element={<TaxMontana />} />
           <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-montana/" element={<CPAMontana />} />
           <Route path="/us/services/virtual-assistant-service-in-montana/" element={<VirtualAssistantMontana />} />
           <Route path="/us/services/best-digital-marketing-agency-in-montana/" element={<DigitalMarketingMontana />} />
           <Route path="/us/services/outsourcing-accounting-data-entry-montana/" element={<DataEntryMontana />} />
           <Route path="/us/services/financial-controller-services-in-montana/" element={<FinancialMontana />} />
           <Route path="/us/services/payroll-management-services-in-the-montana/" element={<PayrollMontana />} />

        </Routes>
        </Suspense>
        </RouteErrorBoundary>
        <SocialBar />
      </Router>
      </ConsultationProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <ThemedApp />
    </ThemeContextProvider>
  );
}

export default App;
