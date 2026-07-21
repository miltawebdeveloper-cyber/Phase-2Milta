import React from "react";

import SubscriptionBanner from "../uk-components/Blog/SubscriptionBanner";
import BlogGridSection from "../uk-components/Blog/BlogGridSection";

// The UK header/footer come from UkLayout (the /uk route layout), so this page
// renders its sections only — wrapping it in the US MainLayout here would
// duplicate the navbar and footer.
const Blog = () => {
  return (
    <>
      <SubscriptionBanner />
      <BlogGridSection />
    </>
  );
};

export default Blog;
