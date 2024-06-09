export default function FormPayment() {
  return (
    <form>
      <label htmlFor="first-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">Card holder name:</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter your card holder name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
        />
      </label>
    </form>
  );
}
