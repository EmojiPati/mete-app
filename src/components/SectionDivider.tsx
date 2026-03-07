export default function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-xs items-center justify-center gap-3 py-4">
      <div className="section-divider-line h-px flex-1" />
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        className="shrink-0 text-accent-gold"
        aria-hidden="true"
      >
        <path d="M5 0L10 5L5 10L0 5Z" fill="currentColor" opacity="0.5" />
      </svg>
      <div className="section-divider-line h-px flex-1" />
    </div>
  );
}
