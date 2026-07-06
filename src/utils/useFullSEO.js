import { useEffect } from "react";

export default function useFullSEO(config = null) {
  useEffect(() => {
    // Exit early if no config is provided
    if (!config) return;

    const setTag = (selector, tagName, attributes) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement(tagName);
        Object.entries(attributes).forEach(([key, value]) => {
          if (key === "innerText") tag.innerText = value;
          else tag.setAttribute(key, value);
        });
        document.head.appendChild(tag);
      } else {
        Object.entries(attributes).forEach(([key, value]) => {
          if (key === "innerText") tag.innerText = value;
          else tag.setAttribute(key, value);
        });
      }
    };

    // Title
    if (config.title) document.title = config.title;

    // Regular meta tags
    if (config.description)
      setTag('meta[name="description"]', "meta", {
        name: "description",
        content: config.description,
      });

    if (config.keywords)
      setTag('meta[name="keywords"]', "meta", {
        name: "keywords",
        content: config.keywords,
      });

    if (config.author)
      setTag('meta[name="author"]', "meta", {
        name: "author",
        content: config.author,
      });

    if (config.canonical)
      setTag('link[rel="canonical"]', "link", {
        rel: "canonical",
        href: config.canonical,
      });
      

    // OPEN GRAPH TAGS
    if (config.ogTitle)
      setTag('meta[property="og:title"]', "meta", {
        property: "og:title",
        content: config.ogTitle,
      });

    if (config.ogDescription)
      setTag('meta[property="og:description"]', "meta", {
        property: "og:description",
        content: config.ogDescription,
      });

    if (config.ogImage)
      setTag('meta[property="og:image"]', "meta", {
        property: "og:image",
        content: config.ogImage,
      });

    if (config.ogUrl)
      setTag('meta[property="og:url"]', "meta", {
        property: "og:url",
        content: config.ogUrl,
      });

    if (config.ogType)
      setTag('meta[property="og:type"]', "meta", {
        property: "og:type",
        content: config.ogType,
      });

    // TWITTER TAGS
    if (config.twitterTitle)
      setTag('meta[name="twitter:title"]', "meta", {
        name: "twitter:title",
        content: config.twitterTitle,
      });

    if (config.twitterDescription)
      setTag('meta[name="twitter:description"]', "meta", {
        name: "twitter:description",
        content: config.twitterDescription,
      });

    if (config.twitterImage)
      setTag('meta[name="twitter:image"]', "meta", {
        name: "twitter:image",
        content: config.twitterImage,
      });

    if (config.twitterCard)
      setTag('meta[name="twitter:card"]', "meta", {
        name: "twitter:card",
        content: config.twitterCard,
      });

    // SCHEMA
    if (config.schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.type = "application/ld+json";
        scriptTag.text = JSON.stringify(config.schema);
        document.head.appendChild(scriptTag);
      } else {
        scriptTag.text = JSON.stringify(config.schema);
      }
    }
  }, [config]);
}
