import "./DropList.css";

const DropList = (props) => {
  return (
    <div className="drop-list">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
      >
        <option></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropList;
