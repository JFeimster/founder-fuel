type Row = {
  option: string;
  bestFor: string;
  speed: string;
  tradeoff: string;
  bankability: string;
};

type Props = {
  rows: Row[];
};

export function ComparisonTable({ rows }: Props) {
  return (
    <div className="table-wrap brutal-card bg-white p-2">
      <table>
        <thead>
          <tr>
            <th>Funding path</th>
            <th>Best for</th>
            <th>Typical speed</th>
            <th>Main tradeoff</th>
            <th>What it builds</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.option}>
              <td className="font-black uppercase">{row.option}</td>
              <td>{row.bestFor}</td>
              <td>{row.speed}</td>
              <td>{row.tradeoff}</td>
              <td>{row.bankability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}