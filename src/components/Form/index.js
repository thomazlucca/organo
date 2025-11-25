import { useState } from "react";
import Button from "../Button";
import DropList from "../DropList";
import Field from "../Field";
import "./Form.css";
import hexToRgba from "hex-to-rgba";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const onSave = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setTime("");
    setImagem("");
    setCargo("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Field
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Field
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropList
          required={true}
          label="Time"
          items={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        ></DropList>
        <Button>Criar Card</Button>
      </form>

      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({
            nome: nomeTime,
            corPrimaria: corTime,
            corSecundaria: hexToRgba(corTime, 0.5),
          });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Field
          type="color"
          required={true}
          label="Cor"
          placeholder="Digita cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
