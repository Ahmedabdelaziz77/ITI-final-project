function FormRowVertical({ label, children, error }) {
  return (
    <div
      className="grid items-center gap-[2.4rem] py-[1.2rem] border-y border-solid border-gray-100 last:border-0 first:border-0"
      style={{ gridTemplateColumns: "4rem 1fr 2rem" }}
    >
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-gray-600 text-[1rem] sm:text-[1.1rem]"
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-[1.4rem] text-red-700">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
