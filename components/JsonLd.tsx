/**
 * JSON-LD structured data for SEO.
 * Helps Google understand the business type, services, and founder.
 */
export default function JsonLd() {
  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KritRaj Nexera",
    description:
      "We build sales engines, not websites — end-to-end growth systems combining websites with n8n automation to capture, route, and convert qualified leads.",
    url: "https://kritrajnexera.com",
    logo: "https://kritrajnexera.com/logo.png",
    email: "kritrajnexera@gmail.com",
    founder: {
      "@type": "Person",
      name: "Rajnish Singh",
      jobTitle: "Founder & CEO",
    },
    knowsAbout: [
      "Lead generation automation",
      "n8n workflows",
      "Web development",
      "Sales automation",
      "CRM integration",
    ],
    areaServed: "Worldwide",
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Growth System Development",
    provider: {
      "@type": "Organization",
      name: "KritRaj Nexera",
    },
    description:
      "End-to-end systems combining websites with automation to capture, route, and convert qualified leads into sales.",
    serviceType: "Web Development + Automation",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
