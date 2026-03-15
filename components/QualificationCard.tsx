type Props = {
  title: string;
  points: string[];
  tone?: "white" | "mint" | "blush" | "lilac";
};

const toneMap = {
  white: "bg-white",
  mint: "bg-mint",
  blush: "bg-blush",
  lilac: "bg-lilac"
};

export function QualificationCard({ title, points, tone = "white" }: Props) {
  return (
    <article className={`brutal-card p-6 ${toneMap[tone]}`}>
      <h3 className="text-2xl font-black uppercase">{title}</h3>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li key={point} className="brutal-card-sm bg-white p-3 text-sm font-bold leading-6">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}