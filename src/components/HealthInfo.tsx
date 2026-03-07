import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

const blogPosts = [
  {
    title: "Tips for a Healthier Lifestyle",
    excerpt:
      "Discover practical daily habits that promote long-term health and wellness.",
    category: "Wellness",
  },
  {
    title: "Seasonal Health Guide",
    excerpt:
      "How to prepare your body and mind for each season\u2019s unique challenges.",
    category: "Prevention",
  },
  {
    title: "Improving Daily Habits",
    excerpt:
      "Small changes in your routine that can make a significant impact on your health.",
    category: "Lifestyle",
  },
];

export default function HealthInfo() {
  return (
    <section id="blog" className="bg-light-teal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <SectionDivider />
            <h2 className="mt-8 mb-4 font-heading text-4xl text-primary md:text-5xl">
              Health Information
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-text-secondary">
              We publish reliable health columns, including tips for maintaining
              health, seasonal health measures, and points for improving
              lifestyle habits.
            </p>
            <p className="mx-auto max-w-xl text-sm italic text-text-secondary/70">
              The information provided is general health information and is not
              intended as medical advice or treatment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 100}>
              <article className="blog-card flex h-full flex-col overflow-hidden rounded-2xl border border-primary/[0.06] bg-white">
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary/[0.06] to-accent-gold/[0.06]">
                  <span className="font-heading text-6xl text-primary opacity-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-white">
                    Coming Soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-accent-gold">
                    {post.category}
                  </span>
                  <h3 className="mb-3 font-heading text-xl text-primary">
                    {post.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
