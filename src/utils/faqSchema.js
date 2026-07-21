/**
 * Builds FAQPage JSON-LD from a page's own FAQ data.
 *
 * Always pass the SAME array the page renders (the `FAQS` export from that
 * page's FAQ component). Google requires FAQPage markup to match question/
 * answer content that is actually visible on the page — generating it from the
 * rendered data guarantees that, and stops the schema drifting from the copy.
 */
export const faqSchema = (faqs = []) => {
  const items = Array.isArray(faqs) ? faqs : [];

  const mainEntity = items
    .map((item) => {
      const name = item.q ?? item.question;
      const text = item.a ?? item.answer;
      return {
        "@type": "Question",
        name: typeof name === "string" ? name.trim() : "",
        acceptedAnswer: {
          "@type": "Answer",
          text: typeof text === "string" ? text.trim() : "",
        },
      };
    })
    .filter(
      (entry) => entry.name && entry.acceptedAnswer?.text,
    );

  if (!mainEntity.length) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
};

export default faqSchema;
