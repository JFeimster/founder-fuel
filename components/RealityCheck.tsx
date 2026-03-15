type Props = {
  items: { title: string; copy: string; tone: "blush" | "cyan" | "mint" | "lilac" }[];
};

const toneMap = {
  blush: "bg-blush",
  cyan: "bg-cyan",
  mint: "bg-mint",
  lilac: "bg-lilac"
};

export function RealityCheck({ items }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className={`brutal-card p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-xl font-black uppercase">{item.title}</h3>
          <p className="mt-3 text-sm font-bold leading-6">{item.copy}</p>
        </article>
      ))}
    </div>
  );
}