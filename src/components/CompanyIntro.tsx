import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

export default function CompanyIntro() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionDivider />

        <ScrollReveal>
          <div className="mt-12 space-y-8 text-center">
            <p className="text-lg leading-[1.9] text-foreground/70 md:text-xl">
              Bughra LLC is a comprehensive service provider involved in health
              management support, the sale of quasi-drugs and health-related
              products, translation/interpretation services, E-commerce, and OEM
              product planning, as well as the planning and operation of medical
              tourism.
            </p>
            <p className="text-lg leading-[1.9] text-foreground/70 md:text-xl">
              With a support system that leverages our expertise and
              multilingual capabilities for both domestic and international
              clients, we provide reliable services ranging from health and
              medical support to sightseeing information. For international
              visitors, we offer total support tailored to diverse needs,
              including interpretation for medical checkups and hospital visits,
              translation of medical documents, and lifestyle/tourism
              information during their stay.
            </p>
            <p className="pt-4 text-sm italic text-text-secondary">
              Please note: We are not a medical institution and do not perform
              medical acts (diagnosis, treatment, etc.).
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
