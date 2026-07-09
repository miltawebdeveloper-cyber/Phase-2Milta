import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeContextProvider, useThemeMode } from './ThemeContext';
import { createAppTheme } from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CareerSub from './pages/careersub';
import BookKeeping from './pages/BookKeeping';
import TaxPlanning from './pages/TaxPlanning';
import VirtualAssistance from './pages/VirtualAssistance';
import Services from './pages/Services';
import CPAServices from './pages/CPAServices';
import FinancialControllerServices from './pages/FinancialControllerServices';
import DataEntryServices from './pages/DataEntryServices';
import DigitalMarketing from './pages/DigitalMarketing';
import PayrollManagement from './pages/PayrollManagement';
import ContractorsCompanies from './pages/ContractorsCompanies';
import LawFirms from './pages/LawFirms';
import ManufacturingCompanies from './pages/ManufacturingCompanies';
import RealEstateCompanies from './pages/RealEstateCompanies';
import NonProfit from './pages/NonProfit';
import HealthCare from './pages/HealthCare';
import RetailBusiness from './pages/Retail';
import Restaurant from './pages/Restaurant';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Areas from './pages/Areas';
import BookkeepingCalifornia from './states/California/Bookkeeping';
import TaxCalifornia from './states/California/Tax';
import PayrollCalifornia from './states/California/Payroll';
import FinancialCalifornia from './states/California/Financial';
import DataEntryCalifornia from './states/California/DataEntry';
import VirtualAssistantCalifornia from './states/California/VirtualAssistance';
import CPACalifornia from './states/California/CPAfirms';
import DigitalMarketingCalifornia from './states/California/DigitalMarketing';
import BookkeepingFlorida from './states/Florida/Bookkeeping';
import TaxFlorida from './states/Florida/Tax';
import PayrollFlorida from './states/Florida/Payroll';
import FinancialFlorida from './states/Florida/Financial';
import DataEntryFlorida from './states/Florida/DataEntry';
import VirtualAssistantFlorida from './states/Florida/VirtualAssistance';
import CPAFlorida from './states/Florida/CPAfirms';
import DigitalMarketingFlorida from './states/Florida/DigitalMarketing';
import BookkeepingConnecticut from './states/Connecticut/Bookkeeping';
import TaxConnecticut from './states/Connecticut/Tax';
import PayrollConnecticut from './states/Connecticut/Payroll';
import FinancialConnecticut from './states/Connecticut/Financial';
import DataEntryConnecticut from './states/Connecticut/DataEntry';
import VirtualAssistantConnecticut from './states/Connecticut/VirtualAssistance';
import CPAConnecticut from './states/Connecticut/CPAfirms';
import DigitalMarketingConnecticut from './states/Connecticut/DigitalMarketing';
import BookkeepingGeorgia from './states/Gorgeia/Bookkeeping';
import TaxGeorgia from './states/Gorgeia/Tax';
import PayrollGeorgia from './states/Gorgeia/Payroll';
import FinancialGeorgia from './states/Gorgeia/Financial';
import DataEntryGeorgia from './states/Gorgeia/DataEntry';
import VirtualAssistantGeorgia from './states/Gorgeia/VirtualAssistance';
import CPAGeorgia from './states/Gorgeia/CPAfirms';
import DigitalMarketingGeorgia from './states/Gorgeia/DigitalMarketing';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsofService';

function ThemedApp() {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
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
          <Route path="/us/industries/contractors-companies/" element={<ContractorsCompanies />} />
          <Route path="/us/industries/law-firms/" element={<LawFirms />} />
          <Route path="/us/industries/manufacturing-companies/" element={<ManufacturingCompanies />} />
          <Route path="/us/industries/real-estate-companies/" element={<RealEstateCompanies />} />
          <Route path="/us/industries/non-profit-organizations/" element={<NonProfit />} />
          <Route path="/us/industries/health-care-industry/" element={<HealthCare />} />
          <Route path="/us/industries/restaurant-industry/" element={<Restaurant />} />
          <Route path="/us/industries/retail-business/" element={<RetailBusiness />} />
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
        </Routes>
      </Router>
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
