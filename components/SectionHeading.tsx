type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      <span className="kicker">{eyebrow}</span>
      <h2 className="display-title mt-4 text-4xl sm:text-5xl">{title}</h2>
      {description ? <p className="editorial-copy mt-4">{description}</p> : null}
    </div>
  );
}