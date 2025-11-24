import Employer from "../Employer";
import "./Team.css";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: props.corSecundaria,
        }}
      >
        <input
          value={props.corPrimaria}
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="employers">
          {props.colaboradores.map((colaborador) => {
            return (
              <Employer
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corPrimaria}
                aoDeletar={props.aoDeletar}
              ></Employer>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
