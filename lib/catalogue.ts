// Product details taken from the 2026 Bright Brush catalogue (pages 01–07).

export const COUNTRIES = [
  { name: "United Kingdom", flag: "uk" },
  { name: "Germany", flag: "de" },
  { name: "Italy", flag: "it" },
  { name: "France", flag: "fr" },
  { name: "Switzerland", flag: "ch" },
  { name: "Austria", flag: "at" },
  { name: "Sweden", flag: "se" },
  { name: "Vietnam", flag: "vn" },
  { name: "Nepal", flag: "np" },
  { name: "Thailand", flag: "th" },
  { name: "South Korea", flag: "kr" },
];

export type Catalogue = {
  slug: string;
  tagline: string;
  hero: string;
  blocks?: { title: string; body: string }[];
  facts: [string, string][];
  measure?: { label: string; value: string; note: string };
  grades?: [string, string][];
  lengths?: { name: string; range: string; image: string }[];
  applications: string[];
  gallery: { src: string; caption?: string }[];
};

const NATURAL_APPLICATIONS = ["Paint brushes", "Industrial brushes", "Other brush applications"];
const NATURAL_LENGTHS = [
  { name: "Black Bristles", range: "70 – 146 mm", image: "/images/catalogue/natural-black.jpg" },
  { name: "Grey Bristles", range: "70 – 146 mm", image: "/images/catalogue/natural-grey.jpg" },
  { name: "White Bristles", range: "108 mm and above", image: "/images/catalogue/natural-white.jpg" },
];

// Same order as PRODUCTS in lib/site.ts.
export const CATALOGUE: Catalogue[] = [
  {
    slug: "calcutta-extra-stiff-boar-bristle",
    tagline: "Boar Bristles",
    hero: "/images/catalogue/calcutta-hand.jpg",
    blocks: [
      { title: "Origin & Sourcing", body: "Sourced from wild boar crossbreeds in West Bengal, including the Calcutta (Kolkata) region, and Bihar." },
      { title: "Limited Availability", body: "This raw material is available in limited quantities. Bright Brush & Bristle Works India purchases approximately 80–90% of the available raw bristles from these regions." },
    ],
    facts: [["Colour", "Natural Black"], ["Packing", "25 kg boxes"], ["Condition", "Thoroughly dried"], ["Durability", "Highly durable"]],
    measure: { label: "Calcutta Stiff Hair Diameter", value: "0.45–0.60 mm", note: "Selected bristles exceed 0.60 mm. Root diameter • Specification supplied by the manufacturer." },
    applications: ["Hairbrush industry", "Heavy industrial brushes"],
    gallery: [
      { src: "/images/catalogue/calcutta-measure.jpg" },
      { src: "/images/catalogue/calcutta-caliper.jpg" },
      { src: "/images/catalogue/calcutta-root.jpg", caption: "Root detail" },
    ],
  },
  {
    slug: "grey-pig-hair",
    tagline: "Boar bristle / Pig hair / Hog hair",
    hero: "/images/catalogue/natural-grey.jpg",
    facts: [["Colour", "Natural grey"], ["Length", "70 – 146 mm"], ["Quality", "95% tops"], ["Condition", "Thoroughly dried"], ["Packing", "25 kg boxes"]],
    applications: NATURAL_APPLICATIONS,
    gallery: [{ src: "/images/catalogue/strip-closeup.jpg" }, { src: "/images/catalogue/strip-bundles.jpg" }, { src: "/images/catalogue/hero-bundles.jpg" }],
  },
  {
    slug: "butt-cut-root-cut-pig-bristles",
    tagline: "Extra Stiff Root-Cut / Butt-Cut Boar Bristles",
    hero: "/images/catalogue/buttcut-range.jpg",
    grades: [
      ["Premium Calcutta Extra Stiff", "Our stiffest grade. Root-cut from double-XL Calcutta extra stiff bristles."],
      ["Extra Stiff", "First cut from extra-extra-long boar bristles."],
      ["Firm", "A blend of first and second cuts."],
      ["Medium Stiff", "Second cut only."],
      ["Soft", "Root-cut from shorter bristles for softer hairbrushes."],
    ],
    facts: [
      ["Finished lengths", "28–64 mm, customised to buyer requirements"],
      ["Natural colours", "White • Black • Grey"],
      ["Bulb options", "Bulbs normally retained on first-cut bristles. First cut with bulbs removed is available on request."],
    ],
    applications: ["Hairbrush industry"],
    gallery: [
      { src: "/images/catalogue/buttcut-detail.jpg", caption: "Cut-bristle detail" },
      { src: "/images/catalogue/buttcut-long.jpg", caption: "Long bristles before cutting" },
    ],
  },
  {
    slug: "white-grey-black-natural-pig-hair",
    tagline: "Boar bristle / Pig hair / Hog hair",
    hero: "/images/catalogue/hero-bundles.jpg",
    facts: [["Quality", "95% tops"], ["Condition", "Thoroughly dried"], ["Packing", "25 kg boxes"]],
    lengths: NATURAL_LENGTHS,
    applications: NATURAL_APPLICATIONS,
    gallery: [{ src: "/images/catalogue/strip-brush.jpg" }, { src: "/images/catalogue/strip-bundles.jpg" }, { src: "/images/catalogue/strip-closeup.jpg" }],
  },
];

export const PROCESSING = {
  commitments: [
    "Sourced only from pigs fit for human consumption.",
    "Only boiled and bleached pig hair is dispatched.",
    "Bristles are thoroughly dried before packing.",
  ],
  photos: [
    { src: "/images/catalogue/process-boiling.jpg", title: "Boiling", detail: "100°C • More than 3 hours" },
    { src: "/images/catalogue/process-bleaching.jpg", title: "Hydrogen Peroxide Bleaching", detail: "60°C • More than 2 hours" },
  ],
  steps: [
    "Boiling at 100°C for more than 3 hours.",
    "Washing and drying.",
    "Hydrogen peroxide bleaching at 60°C for more than 2 hours.",
    "Washing again and thorough drying.",
    "Final production, packing and dispatch.",
  ],
  documents: [
    "Veterinary health certificate",
    "Shipment clearance certificate",
    "Quarantine certificate",
    "Naphthalene-free declaration",
    "Plant approval certificates",
  ],
  note: "Documentation supplied to support clearance in the EU, UK and USA, as applicable to the shipment and destination.",
};

export const EXPORT_INFO: [string, string][] = [
  ["Packaging", "20 kg or 25 kg cartons (secure and export ready)"],
  ["Minimum Order Quantity", "10 – 15 kg"],
  ["Lead Time", "15 – 20 days"],
  ["Shipment Modes", "Air freight (preferred), Sea freight"],
  ["Shipping Partners", "DHL, UPS and other established freight partners"],
  ["Incoterms", "EXW, FOB, CFR, CIF"],
  ["Payment Terms", "100% advance, or 50% advance + 50% balance against shipping bill and AWB"],
  ["Letter of Credit", "Letter of Credit accepted"],
];

export const COMPLIANCE = [
  "ISO 9001 Certified",
  "CAPEXIL Registration",
  "Animal Quarantine & Certification Services (Veterinary / Health Certificate)",
  "European Union Export Authorization",
  "Great Britain Export Authorization",
  "USA",
  "Wildlife NOC Available for All Shipments",
  "Pollution Control Board Compliance",
  "Other Export Documentation",
];

export const COMPLIANCE_BADGES = [
  { src: "/images/compliance/iso.jpg", label: "ISO 9001 Certified" },
  { src: "/images/compliance/capexil.jpg", label: "CAPEXIL Registration" },
  { src: "/images/compliance/quarantine.jpg", label: "Animal Quarantine & Certification Services (Veterinary / Health Certificate)" },
  { src: "/images/compliance/eu.jpg", label: "European Union Export Authorization" },
  { src: "/images/compliance/gb.jpg", label: "Great Britain Export Authorization" },
  { src: "/images/compliance/usa.jpg", label: "USA" },
  { src: "/images/compliance/wildlife.jpg", label: "Wildlife NOC Available for All Shipments" },
  { src: "/images/compliance/pollution.jpg", label: "Pollution Control Board Compliance" },
  { src: "/images/compliance/other.jpg", label: "Other Export Documentation" },
];

export const EU_VERIFY_STEPS = [
  "Open the official European Commission directory using the button or QR code.",
  "Select India under Country, if it is not already selected.",
  "Open the relevant Animal By-Products / Processing Plants establishment listing.",
  "Locate Bright Brush & Bristle Works India in the establishment list.",
  "Confirm approval number: NR/PAC/ABP-FSB/1920/239.",
];

export const EU_APPROVAL = {
  number: "NR/PAC/ABP-FSB/1920/239",
  url: "https://webgate.ec.europa.eu/tracesnt/directory/listing/establishment/publication/index#!/view/IN/PROCESSING_PLANTS",
};
