import "./TextField.css";

const TextField = (props) => {
  const onType = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onType}
        required={props.required}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default TextField;
