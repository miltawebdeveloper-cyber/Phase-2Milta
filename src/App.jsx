import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, CircularProgress } from '@mui/material';
import { ThemeContextProvider, useThemeMode } from './ThemeContext';
import { createAppTheme } from './theme';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Career = lazy(() => import('./pages/Career'));
const CareerSub = lazy(() => import('./pages/careersub'));
const BookKeeping = lazy(() => import('./pages/BookKeeping'));
const TaxPlanning = lazy(() => import('./pages/TaxPlanning'));
const VirtualAssistance = lazy(() => import('./pages/VirtualAssistance'));
const CPAServices = lazy(() => import('./pages/CPAServices'));
const FinancialControllerServices = lazy(() => import('./pages/FinancialControllerServices'));
const DataEntryServices = lazy(() => import('./pages/DataEntryServices'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const PayrollManagement = lazy(() => import('./pages/PayrollManagement'));
const ContractorsCompanies = lazy(() => import('./pages/ContractorsCompanies'));
const LawFirms = lazy(() => import('./pages/LawFirms'));
const ManufacturingCompanies = lazy(() => import('./pages/ManufacturingCompanies'));
const RealEstateCompanies = lazy(() => import('./pages/RealEstateCompanies'));
const NonProfit = lazy(() => import('./pages/NonProfit'));
const HealthCare = lazy(() => import('./pages/HealthCare'));
const RetailBusiness = lazy(() => import('./pages/Retail'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Areas = lazy(() => import('./pages/Areas'));
const BookkeepingCalifornia = lazy(() => import('./states/California/Bookkeeping'));
const TaxCalifornia = lazy(() => import('./states/California/Tax'));
const PayrollCalifornia = lazy(() => import('./states/California/Payroll'));
const FinancialCalifornia = lazy(() => import('./states/California/Financial'));
const DataEntryCalifornia = lazy(() => import('./states/California/DataEntry'));
const VirtualAssistantCalifornia = lazy(() => import('./states/California/VirtualAssistance'));
const CPACalifornia = lazy(() => import('./states/California/CPAfirms'));
const DigitalMarketingCalifornia = lazy(() => import('./states/California/DigitalMarketing'));
const BookkeepingFlorida = lazy(() => import('./states/Florida/Bookkeeping'));
const TaxFlorida = lazy(() => import('./states/Florida/Tax'));
const PayrollFlorida = lazy(() => import('./states/Florida/Payroll'));
const FinancialFlorida = lazy(() => import('./states/Florida/Financial'));
const DataEntryFlorida = lazy(() => import('./states/Florida/DataEntry'));
const VirtualAssistantFlorida = lazy(() => import('./states/Florida/VirtualAssistance'));
const CPAFlorida = lazy(() => import('./states/Florida/CPAfirms'));
const DigitalMarketingFlorida = lazy(() => import('./states/Florida/DigitalMarketing'));
const BookkeepingConnecticut = lazy(() => import('./states/Connecticut/Bookkeeping'));
const TaxConnecticut = lazy(() => import('./states/Connecticut/Tax'));
const PayrollConnecticut = lazy(() => import('./states/Connecticut/Payroll'));
const FinancialConnecticut = lazy(() => import('./states/Connecticut/Financial'));
const DataEntryConnecticut = lazy(() => import('./states/Connecticut/DataEntry'));
const VirtualAssistantConnecticut = lazy(() => import('./states/Connecticut/VirtualAssistance'));
const CPAConnecticut = lazy(() => import('./states/Connecticut/CPAfirms'));
const DigitalMarketingConnecticut = lazy(() => import('./states/Connecticut/DigitalMarketing'));
const BookkeepingGeorgia = lazy(() => import('./states/Gorgeia/Bookkeeping'));
const TaxGeorgia = lazy(() => import('./states/Gorgeia/Tax'));
const PayrollGeorgia = lazy(() => import('./states/Gorgeia/Payroll'));
const FinancialGeorgia = lazy(() => import('./states/Gorgeia/Financial'));
const DataEntryGeorgia = lazy(() => import('./states/Gorgeia/DataEntry'));
const VirtualAssistantGeorgia = lazy(() => import('./states/Gorgeia/VirtualAssistance'));
const CPAGeorgia = lazy(() => import('./states/Gorgeia/CPAfirms'));
const DigitalMarketingGeorgia = lazy(() => import('./states/Gorgeia/DigitalMarketing'));
const DigitalMarketingMaryland = lazy(() => import('./states/Maryland/DigitalMarketing'));
const CPAfirmsMaryland = lazy(() => import('./states/Maryland/CPAfirms'));
const DataEntryMaryland = lazy(() => import('./states/Maryland/DataEntry'));
const BookkeepingMaryland = lazy(() => import('./states/Maryland/Bookkeeping'));
const TaxMaryland = lazy(() => import('./states/Maryland/Tax'));
const VirtualAssistantMaryland = lazy(() => import('./states/Maryland/VirtualAssistance'));
const FinancialMaryland = lazy(() => import('./states/Maryland/Financial'));
const PayrollMaryland = lazy(() => import('./states/Maryland/Payroll'));
const PayrollMassachusetts = lazy(() => import('./states/Massachusetts/Payroll'));
const BookkeepingMassachusetts = lazy(() => import('./states/Massachusetts/Bookkeeping'));
const TaxMassachusetts = lazy(() => import('./states/Massachusetts/Tax'));
const CPAMassachusetts = lazy(() => import('./states/Massachusetts/CPAfirms'));
const VirtualAssistantMassachusetts = lazy(() => import('./states/Massachusetts/VirtualAssistance'));
const DigitalMarketingMassachusetts = lazy(() => import('./states/Massachusetts/DigitalMarketing'));
const DataEntryMassachusetts = lazy(() => import('./states/Massachusetts/DataEntry'));
const FinancialControllerMassachusetts = lazy(() => import('./states/Massachusetts/Financial'));
const BookkeepingNewJersey = lazy(() => import('./states/NewJersey/Bookkeeping'));
const TaxNewJersey = lazy(() => import('./states/NewJersey/Tax'));
const CPANewJersey = lazy(() => import('./states/NewJersey/CPAfirms'));
const VirtualAssistantNewJersey = lazy(() => import('./states/NewJersey/VirtualAssistance'));
const DigitalMarketingNewJersey = lazy(() => import('./states/NewJersey/DigitalMarketing'));
const DataEntryNewJersey = lazy(() => import('./states/NewJersey/DataEntry'));
const FinancialNewJersey = lazy(() => import('./states/NewJersey/Financial'));
const PayrollNewJersey = lazy(() => import('./states/NewJersey/Payroll'));
const BookkeepingNewYork = lazy(() => import('./states/Newyork/Bookkeeping'));
const TaxNewYork = lazy(() => import('./states/Newyork/Tax'));
const CPANewYork = lazy(() => import('./states/Newyork/CPAfirms'));
const VirtualAssistantNewYork = lazy(() => import('./states/Newyork/VirtualAssistance'));
const DigitalMarketingNewYork = lazy(() => import('./states/Newyork/DigitalMarketing'));
const DataEntryNewYork = lazy(() => import('./states/Newyork/DataEntry'));
const FinancialNewYork = lazy(() => import('./states/Newyork/Financial'));
const PayrollNewYork = lazy(() => import('./states/Newyork/Payroll'));
const BookkeepingNorthCarolina = lazy(() => import('./states/NorthCarolina/Bookkeeping'));
const TaxNorthCarolina = lazy(() => import('./states/NorthCarolina/Tax'));
const CPANorthCarolina = lazy(() => import('./states/NorthCarolina/CPAfirms'));
const VirtualAssistantNorthCarolina = lazy(() => import('./states/NorthCarolina/VirtualAssistance'));
const DigitalMarketingNorthCarolina = lazy(() => import('./states/NorthCarolina/DigitalMarketing'));
const DataEntryNorthCarolina = lazy(() => import('./states/NorthCarolina/DataEntry'));
const FinancialNorthCarolina = lazy(() => import('./states/NorthCarolina/Financial'));
const PayrollNorthCarolina = lazy(() => import('./states/NorthCarolina/Payroll'));
const BookkeepingOhio = lazy(() => import('./states/Ohio/Bookkeeping'));
const TaxOhio = lazy(() => import('./states/Ohio/Tax'));
const CPAOhio = lazy(() => import('./states/Ohio/CPAfirms'));
const VirtualAssistantOhio = lazy(() => import('./states/Ohio/VirtualAssistance'));
const DigitalMarketingOhio = lazy(() => import('./states/Ohio/DigitalMarketing'));
const DataEntryOhio = lazy(() => import('./states/Ohio/DataEntry'));
const FinancialOhio = lazy(() => import('./states/Ohio/Financial'));
const PayrollOhio = lazy(() => import('./states/Ohio/Payroll'));
const BookkeepingPennsylvania = lazy(() => import('./states/Pennsylvania/Bookkeeping'));
const TaxPennsylvania = lazy(() => import('./states/Pennsylvania/Tax'));
const CPAPennsylvania = lazy(() => import('./states/Pennsylvania/CPAfirms'));
const VirtualAssistantPennsylvania = lazy(() => import('./states/Pennsylvania/VirtualAssistance'));
const DigitalMarketingPennsylvania = lazy(() => import('./states/Pennsylvania/DigitalMarketing'));
const DataEntryPennsylvania = lazy(() => import('./states/Pennsylvania/DataEntry'));
const FinancialPennsylvania = lazy(() => import('./states/Pennsylvania/Financial'));
const PayrollPennsylvania = lazy(() => import('./states/Pennsylvania/Payroll'));
const BookkeepingSouthCarolina = lazy(() => import('./states/SouthCarolina/Bookkeeping'));
const TaxSouthCarolina = lazy(() => import('./states/SouthCarolina/Tax'));
const CPASouthCarolina = lazy(() => import('./states/SouthCarolina/CPAfirms'));
const VirtualAssistantSouthCarolina = lazy(() => import('./states/SouthCarolina/VirtualAssistance'));
const DigitalMarketingSouthCarolina = lazy(() => import('./states/SouthCarolina/DigitalMarketing'));
const DataEntrySouthCarolina = lazy(() => import('./states/SouthCarolina/DataEntry'));
const FinancialSouthCarolina = lazy(() => import('./states/SouthCarolina/Financial'));
const PayrollSouthCarolina = lazy(() => import('./states/SouthCarolina/Payroll'));
const BookkeepingTexas = lazy(() => import('./states/Texas/Bookkeeping'));
const TaxTexas = lazy(() => import('./states/Texas/Tax'));
const CPATexas = lazy(() => import('./states/Texas/CPAfirms'));
const VirtualAssistantTexas = lazy(() => import('./states/Texas/VirtualAssistance'));
const DigitalMarketingTexas = lazy(() => import('./states/Texas/DigitalMarketing'));
const DataEntryTexas = lazy(() => import('./states/Texas/DataEntry'));
const FinancialTexas = lazy(() => import('./states/Texas/Financial'));
const PayrollTexas = lazy(() => import('./states/Texas/Payroll'));
const BookkeepingVirginia = lazy(() => import('./states/Virginia/Bookkeeping'));
const TaxVirginia = lazy(() => import('./states/Virginia/Tax'));
const CPAVirginia = lazy(() => import('./states/Virginia/CPAfirms'));
const VirtualAssistantVirginia = lazy(() => import('./states/Virginia/VirtualAssistance'));
const DigitalMarketingVirginia = lazy(() => import('./states/Virginia/DigitalMarketing'));
const DataEntryVirginia = lazy(() => import('./states/Virginia/DataEntry'));
const FinancialVirginia = lazy(() => import('./states/Virginia/Financial'));
const PayrollVirginia = lazy(() => import('./states/Virginia/Payroll'));
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsofService'));
const Services = lazy(() => import('./pages/Services'));
const AccountingSoftware = lazy(() => import('./pages/AccountingSoftware'));
const QuickBooksDesktop = lazy(() => import('./pages/QuickBooksDesktop'));
const QuickBooksOnline = lazy(() => import('./pages/quickBooksOnline'));
const Xero = lazy(() => import('./pages/Xero'));
const WaveAccounting = lazy(() => import('./pages/WaveAccounting'));
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
const PageLoader = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
    <CircularProgress sx={{ color: 'primary.main' }} />
  </Box>
);

function ThemedApp() {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsultationProvider>
      <Router>
        <ScrollToTopOnNavigate />
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
           <Route path="/us/services/services/financial-controller-services-in-massachusetts/" element={<FinancialControllerMassachusetts />} />

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

        </Routes>
        </Suspense>
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
