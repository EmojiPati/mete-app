import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

const companyInfo: {
  label: string;
  value: string | null;
  list?: string[];
}[] = [
  {
    label: "Company Name",
    value: "Bughra LLC (\u30DC\u30B0\u30E9\u5408\u540C\u4F1A\u793E)",
  },
  {
    label: "Established",
    value: "October 19, 2023",
  },
  {
    label: "Location",
    value: "3-4-43 Shinsuna, Koto-ku, Tokyo, 136-0075, Japan",
  },
  {
    label: "Representative",
    value: "Hidetoshi Imamura",
  },
  {
    label: "Business Activities",
    value: null,
    list: [
      "Health support business",
      "Sale of quasi-drugs and related products",
      "E-commerce business",
      "OEM product planning and sales",
      "Translation and interpretation services",
      "Information provision services",
    ],
  },
];

export default function CompanyProfile() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <SectionDivider />
            <h2 className="mt-8 mb-8 font-heading text-4xl text-primary md:text-5xl">
              Company Profile
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="font-heading text-lg italic leading-[1.9] text-foreground/70 md:text-xl">
                &ldquo;To realize a healthy and prosperous society, we provide
                value tailored to each individual through trusted products and
                expert support.&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-primary/[0.06] bg-white">
            {companyInfo.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col md:flex-row ${
                  index < companyInfo.length - 1
                    ? "border-b border-primary/[0.06]"
                    : ""
                }`}
              >
                <div className="bg-primary/[0.02] px-6 py-4 md:w-1/3 md:py-5">
                  <span className="text-sm font-semibold tracking-wide text-primary">
                    {item.label}
                  </span>
                </div>
                <div className="px-6 py-4 md:w-2/3 md:py-5">
                  {item.value && (
                    <span className="text-foreground/70">{item.value}</span>
                  )}
                  {item.list && (
                    <ul className="space-y-1.5">
                      {item.list.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-foreground/70"
                        >
                          <span className="mt-1 text-xs text-accent-gold">
                            ●
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
