import ItemAccordionPassenger from '../accordion-item-passengers/ItemAccordionPassenger';
import './AccordionPassengers.css';

export default function AccordionPassengers() {
  return (
    <div className="accordion">
      <ItemAccordionPassenger summary="Element #1">111111</ItemAccordionPassenger>
      <ItemAccordionPassenger summary="Element #2">222222</ItemAccordionPassenger>
    </div>
  );
}
