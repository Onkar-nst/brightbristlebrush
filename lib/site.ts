import { BadgeCheck, Cog, Factory, Gem, Globe2, Headphones, Medal, Package, PackageOpen, Plane, Video, Waypoints, type LucideIcon } from "lucide-react";
import { CATALOGUE } from "./catalogue";

export const COMPANY = "Bright Brush and Bristle Works India";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Processing", href: "/processing/" },
  { label: "Legal", href: "/legal/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const EMAIL = "sales@brightbristlebrush.com";
export const PHONES = ["+91-5561354044", "+91-9565914040", "+91-8858256451", "+91-8756796451"];
export const HOURS = ["Mon-Sat: 9:00 - 19:00", "Closed on Sunday"];

export const telHref = (phone: string) => `tel:${phone.replace(/-/g, "")}`;

export const HIGHLIGHTS: { icon: LucideIcon; title: string }[] = [
  { icon: Gem, title: "Premium Quality Natural Bristles" },
  { icon: Cog, title: "Consistent Grading and Processing" },
  { icon: Package, title: "Export Ready Packaging" },
  { icon: Globe2, title: "Trusted by Buyers Worldwide" },
];

export const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Factory, title: "Manufacturing", body: "We are certified manufacturers of pig bristles and boar bristles, employing highly trained workers to ensure the highest quality products." },
  { icon: BadgeCheck, title: "EU & UK Authorisation", body: "First Manufacturing Unit to receive the authorisation to export Pig Hair/Boar Bristles for EU and Great Britain." },
  { icon: Waypoints, title: "Sales & Export", body: "Our products are sold and exported to national and international markets, ensuring global reach with consistent service." },
  { icon: Globe2, title: "Market", body: "We operate in Europe, Asia, Australia, and North America, with Europe and Asia serving as our dominant markets." },
  { icon: Video, title: "Live Factory Tour", body: "Customers can take a live virtual tour of our production facilities through Google Meeting or Skype, available Mon to Sat, 7 AM to 5 PM (IST)." },
  { icon: Headphones, title: "Support", body: "We offer comprehensive pre-sale and after-sale support, setting us apart by ensuring customer satisfaction throughout every transaction." },
  { icon: Medal, title: "Gold Member", body: "We are honored to be a part of brushexpert.com, a renowned platform in the United Kingdom." },
  { icon: PackageOpen, title: "Free Samples", body: "We provide free product samples for buyers to ensure satisfaction and confidence in our offerings." },
  { icon: Plane, title: "DHL", body: "We maintain a dedicated account with DHL for reliable and efficient product deliveries worldwide." },
];

export const FACTORY_PREMISES =
  "Our factory is located in a small town, 80 km away from the city of Gorakhpur, where we have been established for over 200 years. The factory spans 5,000 sq. ft. per floor across four levels (ground + three floors), providing a total area of 20,000 sq. ft. We specialize exclusively in the manufacturing of pig hair and boar bristles, employing 50 to 70 workmen on-site, along with two official staff members.";

export const TRANSPORT =
  "Our shipments are cleared through Indira Gandhi International Airport (IGI), New Delhi. We offer both air and sea shipping, with most shipments delivered by air. Our transit partners include DTDC and DHL for door-to-door deliveries, and Top Notch Logistics Pvt. Ltd. for port-to-port services. It takes 4 days for shipments to reach New Delhi, with same-day customs clearance before dispatch.";

export const BANK = [
  ["Bank Name", "HDFC Bank Ltd."],
  ["Account Name", COMPANY],
  ["SWIFT Code", "HDFCINBBTRS"],
  ["Account Number", "50200035313100"],
  ["Branch", "HO No 65/S.A., Nadana, Ward No 18, Barhaj, Deoria, Uttar Pradesh, India – 274601"],
];

export type Product = {
  name: string;
  body: string;
  specs: [string, string][];
  image: string;
};

const GREY_BODY =
  "Our high-quality pig bristles are sourced from India and offer exceptional durability, natural color, and extra stiffness. These bristles are ideal for a wide range of applications, including paintbrushes, floor brushes, scrub brushes, and industrial brushes. ISO 9001 certified and available in 25 kg cartons with company-marked wrappers, our premium grey pig hair is the perfect choice for demanding applications.";

const GREY_SPECS: [string, string][] = [
  ["Source", "High-quality pig bristles from India"],
  ["Color", "Natural grey"],
  ["Grade", "70-90% tops"],
  ["Size", "51-140mm"],
  ["Stiffness", "Soft to medium stiff"],
  ["Packaging", "25 kg cartons"],
];

const BASE_PRODUCTS: Product[] = [
  {
    name: "Calcutta Extra Stiff Boar Bristle",
    body: "Our high-quality pig bristles are sourced from India and offer exceptional durability, natural color, and extra stiffness. These bristles are ideal for a wide range of applications, including paintbrushes, floor brushes, scrub brushes, and industrial brushes. ISO 9001 certified and available in 25 kg cartons with company-marked wrappers, our premium pig hair is the perfect choice for demanding applications.",
    specs: [
      ["Grade", "70-90% tops"],
      ["Size", "51-140mm"],
      ["Stiffness", "Extra stiff"],
      ["Packaging", "25 kg cartons with company-marked wrappers"],
      ["Certification", "ISO 9001:2015"],
    ],
    image: "/images/p-black.jpg",
  },
  { name: "Grey Pig Hair", body: GREY_BODY, specs: GREY_SPECS, image: "/images/p-grey.jpg" },
  {
    name: "Butt Cut / Root Cut Pig Bristles",
    body: "Our high-quality Butt Cut / Root Cut Pig Bristles are sourced from India and offer exceptional durability, natural color, and extra stiffness. These bristles are ideal for a wide range of applications, including industrial brushes and household or self-care brushes. ISO 9001 certified and packaged in ropes, our premium Butt Cut / Root Cut Pig Bristles are the perfect choice for demanding applications.",
    specs: [
      ["Source", "High-quality pig bristles from India"],
      ["Color", "Natural black"],
      ["Grade", "100% tops"],
      ["Size", "26mm, 28mm, 40mm, 42mm, 44mm, 51mm, 55mm, 64mm"],
      ["Stiffness", "Extra stiff, premium bristle"],
      ["Packaging", "25kg cartons"],
    ],
    image: "/images/p-buttcut.jpg",
  },
  { name: "White/Grey/Black Natural Pig Hair", body: GREY_BODY, specs: GREY_SPECS, image: "/images/p-wgb.jpg" },
];

// Butt Cut / Root Cut is listed first, as the client asked.
export const PRODUCTS = BASE_PRODUCTS.map((p, i) => ({ ...p, ...CATALOGUE[i] })).sort(
  (a, b) => Number(b.slug === "butt-cut-root-cut-pig-bristles") - Number(a.slug === "butt-cut-root-cut-pig-bristles"),
);
export const productHref = (slug: string) => `/products/${slug}/`;

export const SERVICES = [
  { title: "Bristle Manufacturing", body: "We produce premium pig bristle and hair for brush making, offering quality ranging from 70% to 90% tops. Customized cuts are available on request, with free samples provided." },
  { title: "Packaging & Dispatch", body: "Select between air or sea shipment, with dispatch from IGI, New Delhi, taking 5 days. Sea shipments depart from Mumbai or Kolkata, delivering to agents within 5-10 days, also using DHL and FedEx for faster transport." },
  { title: "Visiting & Free Samples", body: "Free samples are available, including shipping, and buyers can visit our factory with accommodations and transfers arranged. We prioritize quality production and timely delivery." },
];

export const LOCATIONS = [
  { title: "1st Manufacturing Unit", address: "Main Road Barhaj, Azad Nagar, North Post Barhaj, District Deoria, Uttar Pradesh, 274601." },
  { title: "2nd Manufacturing Unit", address: "Bright Brush And Bristle Works India, Main Road Gaura, Next to HP Gas, Barhaj Deoria Uttar Pradesh, 274601.", phone: "+91-6387-519951", email: EMAIL },
  { title: "Office Address Mumbai", address: "Bright Brush And Bristle Works India, Office No. 1401, 14th Floor, Valentina, VFVA Lodha, Majiwada Thane West 400602.", phone: "+91-6387-519951", email: EMAIL },
  { title: "Mumbai Sales & Distribution Godown", address: "Bright Brush And Bristle Works India, Shop No 1 & 2 Sai Darshan Building, Ground Floor, Purna Road, Purna Bhiwandi. 421302.", phone: "+91-9565914040", email: "armaan@brightbristlebrush.com" },
];

export const CERTIFICATES = [
  { title: "ISO Certificate", src: "/images/iso.jpg" },
  { title: "ICE Certificate", src: "/images/ice.jpg" },
  { title: "GST Certificate", src: "/images/gst.jpg" },
  { title: "Trademark Certificate", src: "/images/trademark.jpg" },
];
