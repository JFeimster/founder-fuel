import type { FAQ } from "@/lib/data";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <details key={faq.question} className="brutal-card bg-white p-5">
          <summary className="cursor-pointer list-none pr-8 text-lg font-black">
            {faq.question}
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/80">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}