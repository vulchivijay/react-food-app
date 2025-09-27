export default function SuccessMessage ({ actions, message }) {
  return (
    <>
      <p>{message}</p>
      <div className="modal-actions">
        {actions}
      </div>
    </>
  )
}