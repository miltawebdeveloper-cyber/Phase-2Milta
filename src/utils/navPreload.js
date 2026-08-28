// Warms a route's JS chunk before the user commits to the click.
//
// Every route in App.jsx is lazyWithRetry()'d, so a nav click starts a chunk
// download and Suspense swaps the whole page for PageLoader's spinner while it
// runs. On a warm connection that is a flicker; on a slow one it is a second or
// more of spinner for a page whose HTML was already prerendered. Kicking the
// import off on hover/focus/touch — a few hundred ms before the click — means
// the promise is usually settled by the time React asks for it, so the route
// renders on the first frame and the fallback never appears.
//
// The specifiers below must stay character-identical to the ones in App.jsx.
// Vite keys a chunk by resolved module, so an identical specifier warms the
// exact chunk React.lazy() will await; a drifted one would quietly fetch a
// second copy and warm nothing. Nothing here is load-bearing — an unknown path
// is ignored and a failed fetch is swallowed, because lazyWithRetry still owns
// the real load, including its retry and stale-chunk reload.
const loaders = {
  '/about': () => import('../pages/About'),
  '/services': () => import('../pages/Services'),
  '/blogs': () => import('../pages/Blog'),
  '/career': () => import('../pages/Career'),
  '/contact': () => import('../pages/Contact'),

  '/us/services/bookkeeping-company-in-the-usa/': () => import('../pages/BookKeeping'),
  '/us/services/payroll-management-services-in-the-usa/': () => import('../pages/PayrollManagement'),
  '/us/services/best-cpa-services-for-small-businesses-in-the-usa/': () => import('../pages/CPAServices'),
  '/us/services/financial-controller-services-in-the-usa/': () => import('../pages/FinancialControllerServices'),
  '/us/services/tax-planning-and-preparation-services-usa/': () => import('../pages/TaxPlanning'),
  '/us/services/best-digital-marketing-agency-in-usa/': () => import('../pages/DigitalMarketing'),
  '/us/services/virtual-assistant-service-in-the-usa/': () => import('../pages/VirtualAssistance'),
  '/us/services/outsourcing-accounting-data-entry-services-in-the-usa/': () => import('../pages/DataEntryServices'),

  '/us/industry/bookkeeping-for-contractors-companies/': () => import('../pages/ContractorsCompanies'),
  '/us/industry/accounting-services-for-lawfirms/': () => import('../pages/LawFirms'),
  '/us/industry/accounting-services-for-manufacturing/': () => import('../pages/ManufacturingCompanies'),
  '/us/industry/bookkeeping-for-real-estate-companies/': () => import('../pages/RealEstateCompanies'),
  '/us/industry/accounting-services-for-nonprofit-organizations/': () => import('../pages/NonProfit'),
  '/us/industry/accounting-services-for-healthcare/': () => import('../pages/HealthCare'),
  '/us/industry/accounting-services-for-restaurant-businesses/': () => import('../pages/Restaurant'),
  '/us/industry/accounting-services-for-retail-businesses/': () => import('../pages/Retail'),
};

// Hover fires repeatedly as a pointer crosses a menu; one attempt per path is
// enough because the module registry caches the result either way.
const started = new Set();

export default function preloadRoute(path) {
  if (!path || started.has(path)) return;
  const load = loaders[path];
  if (!load) return;
  started.add(path);
  // Let it fail silently and allow a later retry: this is only a head start.
  load().catch(() => started.delete(path));
}
