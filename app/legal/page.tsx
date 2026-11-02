import type { Metadata } from "next";
import { Certificates } from "@/components/Certificates";
import { ExportCompliance } from "@/components/ExportCompliance";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Legal" };

export default function LegalPage() {
  return (
    <>
      <PageHero label="Compliance" title={["Legal", "Certifications"]} image="/images/inspection.jpg" />
      <section className="py-12 md:py-17">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <Reveal direction="left" className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Welcome to our Legal Documentation and Certifications page. Here, you will find essential documents that affirm our compliance with national and international standards, ensuring the authenticity and quality of our products and services. Our available certificates include the GST Certificate, ISO Certificate, ICE Certificate, and Trademark Certificate, which validate our adherence to regulatory and business standards.</p>
              <p>For international trade and export requirements, we also provide Veterinary Health Certificates, issued as per the importing country&apos;s requirements, along with Export Shipment Clearance Certificates and Phytosanitary Certificates. These documents guarantee that all shipments meet health and safety standards, facilitating seamless cross-border transactions.</p>
              <p>Additionally, each shipment includes the Certificate of Origin, whether Preferential or Non-Preferential, based on the specific requirements of each destination country. This ensures compliance with global trade protocols and assists in the efficient processing of our exports.</p>
          </Reveal>
          <div className="mt-14"><Certificates /></div>
        </div>
      </section>
      <ExportCompliance />
    </>
  );
}
