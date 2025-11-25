import Employer from "../Employer";
import "./Team.css";

const Team = ({
  mudarCor,
  time,
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
  aoFavoritar,
}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: corSecundaria,
        }}
      >
        <input
          value={corPrimaria}
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="employers">
          {colaboradores.map((colaborador) => {
            return (
              <Employer
                id={colaborador.id}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={corPrimaria}
                aoDeletar={() => aoDeletar(colaborador.id)}
                aoFavoritar={aoFavoritar}
                favorito={colaborador.favorito}
              ></Employer>
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
