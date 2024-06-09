export default function FormPassenger() {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="first-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">First name:</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter your first name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="last-name" className="flex flex-col gap-2">
        <span className="font-nunito text-light-50">Last name:</span>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter your last name"
          className="h-[40px] rounded-lg border border-riptide-200 bg-transparent px-[12px] py-[9px] text-riptide-200"
          autoComplete="off"
          required
        />
      </label>
    </form>
  );
}
