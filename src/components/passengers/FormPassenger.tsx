export default function FormPassenger() {
  return (
    <form>
      <label htmlFor="first-name">
        <span className="font-nunito text-light-50">First name:</span>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter your first name"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="last-name">
        <span className="font-nunito text-light-50">Last name:</span>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter your last name"
          autoComplete="off"
          required
        />
      </label>
    </form>
  );
}
