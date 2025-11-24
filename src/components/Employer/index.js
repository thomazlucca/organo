import { AiFillCloseCircle } from "react-icons/ai";
import "./Employer.css";

const Employer = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
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
      </div>
    </div>
  );
};

export default Employer;
