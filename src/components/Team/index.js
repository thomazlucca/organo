import Employer from "../Employer";
import "./Team.css";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="employers">
          {props.colaboradores.map((colaborador) => (
            <Employer
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            ></Employer>
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
