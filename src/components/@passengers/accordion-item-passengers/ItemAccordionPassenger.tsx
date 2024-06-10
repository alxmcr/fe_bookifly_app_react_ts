import './ItemAccordionPassenger.css';

type Props = {
  summary: string;
  children: React.ReactNode;
};

export default function ItemAccordionPassenger({ summary = '', children }: Props) {
  return (
    <details>
      <summary className="item-accordion-header list-none">{summary}</summary>
      <div className="item-accordion-content">{children}</div>
    </details>
  );
}
