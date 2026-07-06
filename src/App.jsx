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
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
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
          <Route path="/us/services/best-bookkeeping-services-in-california/" element={<BookkeepingCalifornia />} />
          <Route path="/us/services/tax-planning-and-preparation-service-in-california/" element={<TaxCalifornia />} />
          <Route path="/us/services/payroll-management-services-in-the-california/" element={<PayrollCalifornia />} />
          <Route path="/us/services/financial-controller-services-in-california/" element={<FinancialCalifornia />} />
          <Route path="/us/services/outsourcing-accounting-data-entry-california/" element={<DataEntryCalifornia />} />
          <Route path="/us/services/virtual-assistant-service-in-california/" element={<VirtualAssistantCalifornia />} />
          <Route path="/us/services/best-cpa-services-for-small-businesses-in-the-california/" element={<CPACalifornia />} />
          <Route path="/us/services/best-digital-marketing-agency-in-california/" element={<DigitalMarketingCalifornia />} />
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
