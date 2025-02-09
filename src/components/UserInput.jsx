export default function UserInput({ label, value, handleNewInput, index }) {
  function handleChange(event) {
    handleNewInput(event.target.value, index);
  }
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="number" onChange={handleChange} value={value} />
    </div>
  );
}
