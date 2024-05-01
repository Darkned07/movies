type inputInterface = {
  lbName: string;
  type: string;
  placeholder: string;
  cls: string;
  rf?: any;
};

function Input({ lbName, type, placeholder, cls, rf }: inputInterface) {
  return (
    <label className={`form-control ${cls}`}>
      <div className="label">
        <span className="label-text">{lbName}:</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered`}
        ref={rf}
      />
    </label>
  );
}

export default Input;
