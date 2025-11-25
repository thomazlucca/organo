import "./Field.css";

const Field = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  required,
}) => {
  const onType = (event) => {
    aoAlterado(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={onType}
        required={required}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Field;
