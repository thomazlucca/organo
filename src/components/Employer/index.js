import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Employer.css";

const Employer = ({
  id,
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoDeletar,
  favorito,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="employer">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => {
          aoDeletar();
        }}
      />
      <div className="header" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart {...propsFavorito} color="FF0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Employer;
