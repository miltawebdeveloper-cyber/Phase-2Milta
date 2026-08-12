import React from "react";

import SubscriptionBanner from "../uk-components/Blog/SubscriptionBanner";
import BlogGridSection from "../uk-components/Blog/BlogGridSection";
import useFullSEO from "../utils/useFullSEO";

// The UK header/footer come from UkLayout (the /uk route layout), so this page
// renders its sections only — wrapping it in the US MainLayout here would
// duplicate the navbar and footer.
const Blog = () => {

  useFullSEO({
    title: "Accounting & Finance Insights for UK Businesses | Milta Financial Services",
    description:
      "Guides and updates on UK accounting, payroll, tax and outsourcing from the Milta team.",
    keywords:
      "uk accounting blog, bookkeeping insights uk, payroll guides uk, uk tax updates",
    author: "Milta Accounting Services",
    // Trailing slash required — /uk/blogs is also the parent of
    // /uk/blogs/:slug, so DirectorySlash 301s the no-slash form.
    canonical: "https://www.miltafs.com/uk/blogs/",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Accounting & Finance Insights for UK Businesses | Milta Financial Services",
    ogDescription: "Guides and updates on UK accounting, payroll, tax and outsourcing from the Milta team.",
    ogUrl: "https://www.miltafs.com/uk/blogs/",
  });

  return (
    <>
      <SubscriptionBanner />
      <BlogGridSection />
    </>
  );
};

export default Blog;
