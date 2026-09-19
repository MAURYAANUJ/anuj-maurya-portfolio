type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-title mt-3 text-5xl text-white sm:text-6xl md:text-7xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-mist-400 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
};
