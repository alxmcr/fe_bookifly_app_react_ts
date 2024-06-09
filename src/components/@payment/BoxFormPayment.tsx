import FormPayment from './FormPayment';

export default function BoxFormPayment() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-riptide-200 p-2">
      <h3 className="font-semibold text-riptide-200">Buyer</h3>
      <FormPayment />
    </div>
  );
}
