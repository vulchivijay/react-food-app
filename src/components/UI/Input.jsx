export default function Input({ label, type, eleId, name }) {
  return (
    <div className="control">
      <label htmlFor={eleId}>{label}</label>
      <input type={type} id={eleId} name={name} required />
    </div>
  )
}