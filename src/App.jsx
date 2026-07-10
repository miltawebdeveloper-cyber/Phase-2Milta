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
import DigitalMarketingMaryland from './states/Maryland/DigitalMarketing';
import CPAfirmsMaryland from './states/Maryland/CPAfirms';
import DataEntryMaryland from './states/Maryland/DataEntry';
import BookkeepingMaryland from './states/Maryland/Bookkeeping';
import TaxMaryland from './states/Maryland/Tax';
import VirtualAssistantMaryland from './states/Maryland/VirtualAssistance';
import FinancialMaryland from './states/Maryland/Financial';
import PayrollMaryland from './states/Maryland/Payroll';
import PayrollMassachusetts from './states/Massachusetts/Payroll';
import BookkeepingMassachusetts from './states/Massachusetts/Bookkeeping';
import TaxMassachusetts from './states/Massachusetts/Tax';
import CPAMassachusetts from './states/Massachusetts/CPAfirms';
import VirtualAssistantMassachusetts from './states/Massachusetts/VirtualAssistance';
import DigitalMarketingMassachusetts from './states/Massachusetts/DigitalMarketing';
import DataEntryMassachusetts from './states/Massachusetts/DataEntry';
import FinancialControllerMassachusetts from './states/Massachusetts/Financial';
import BookkeepingNewJersey from './states/NewJersey/Bookkeeping';
import TaxNewJersey from './states/NewJersey/Tax';
import CPANewJersey from './states/NewJersey/CPAfirms';
import VirtualAssistantNewJersey from './states/NewJersey/VirtualAssistance';
import DigitalMarketingNewJersey from './states/NewJersey/DigitalMarketing';
import DataEntryNewJersey from './states/NewJersey/DataEntry';
import FinancialNewJersey from './states/NewJersey/Financial';
import PayrollNewJersey from './states/NewJersey/Payroll';
import BookkeepingNewYork from './states/Newyork/Bookkeeping';
import TaxNewYork from './states/Newyork/Tax';
import CPANewYork from './states/Newyork/CPAfirms';
import VirtualAssistantNewYork from './states/Newyork/VirtualAssistance';
import DigitalMarketingNewYork from './states/Newyork/DigitalMarketing';
import DataEntryNewYork from './states/Newyork/DataEntry';
import FinancialNewYork from './states/Newyork/Financial';
import PayrollNewYork from './states/Newyork/Payroll';
import BookkeepingNorthCarolina from './states/NorthCarolina/Bookkeeping';
import TaxNorthCarolina from './states/NorthCarolina/Tax';
import CPANorthCarolina from './states/NorthCarolina/CPAfirms';
import VirtualAssistantNorthCarolina from './states/NorthCarolina/VirtualAssistance';
import DigitalMarketingNorthCarolina from './states/NorthCarolina/DigitalMarketing';
import DataEntryNorthCarolina from './states/NorthCarolina/DataEntry';
import FinancialNorthCarolina from './states/NorthCarolina/Financial';
import PayrollNorthCarolina from './states/NorthCarolina/Payroll';
import BookkeepingOhio from './states/Ohio/Bookkeeping';
import TaxOhio from './states/Ohio/Tax';
import CPAOhio from './states/Ohio/CPAfirms';
import VirtualAssistantOhio from './states/Ohio/VirtualAssistance';
import DigitalMarketingOhio from './states/Ohio/DigitalMarketing';
import DataEntryOhio from './states/Ohio/DataEntry';
import FinancialOhio from './states/Ohio/Financial';
import PayrollOhio from './states/Ohio/Payroll';
import BookkeepingPennsylvania from './states/Pennsylvania/Bookkeeping';
import TaxPennsylvania from './states/Pennsylvania/Tax';
import CPAPennsylvania from './states/Pennsylvania/CPAfirms';
import VirtualAssistantPennsylvania from './states/Pennsylvania/VirtualAssistance';
import DigitalMarketingPennsylvania from './states/Pennsylvania/DigitalMarketing';
import DataEntryPennsylvania from './states/Pennsylvania/DataEntry';
import FinancialPennsylvania from './states/Pennsylvania/Financial';
import PayrollPennsylvania from './states/Pennsylvania/Payroll';
import BookkeepingSouthCarolina from './states/SouthCarolina/Bookkeeping';
import TaxSouthCarolina from './states/SouthCarolina/Tax';
import CPASouthCarolina from './states/SouthCarolina/CPAfirms';
import VirtualAssistantSouthCarolina from './states/SouthCarolina/VirtualAssistance';
import DigitalMarketingSouthCarolina from './states/SouthCarolina/DigitalMarketing';
import DataEntrySouthCarolina from './states/SouthCarolina/DataEntry';
import FinancialSouthCarolina from './states/SouthCarolina/Financial';
import PayrollSouthCarolina from './states/SouthCarolina/Payroll';
import BookkeepingTexas from './states/Texas/Bookkeeping';
import TaxTexas from './states/Texas/Tax';
import CPATexas from './states/Texas/CPAfirms';
import VirtualAssistantTexas from './states/Texas/VirtualAssistance';
import DigitalMarketingTexas from './states/Texas/DigitalMarketing';
import DataEntryTexas from './states/Texas/DataEntry';
import FinancialTexas from './states/Texas/Financial';
import PayrollTexas from './states/Texas/Payroll';
import BookkeepingVirginia from './states/Virginia/Bookkeeping';
import TaxVirginia from './states/Virginia/Tax';
import CPAVirginia from './states/Virginia/CPAfirms';
import VirtualAssistantVirginia from './states/Virginia/VirtualAssistance';
import DigitalMarketingVirginia from './states/Virginia/DigitalMarketing';
import DataEntryVirginia from './states/Virginia/DataEntry';
import FinancialVirginia from './states/Virginia/Financial';
import PayrollVirginia from './states/Virginia/Payroll';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsofService';
import Services from './pages/Services';
import { ConsultationProvider } from './components/ConsultationModal';
function ThemedApp() {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsultationProvider>
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
