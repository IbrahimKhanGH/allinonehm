import Reveal from "@/components/Reveal";

export default function SectionHeader({ eyebrow, title, intro, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow mb-4">
          <span className="h-px w-8 bg-bronze" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="h-section text-balance">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-concrete-light sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
