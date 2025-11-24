import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import hexToRgba from "hex-to-rgba";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([
    { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
    { nome: "Front End", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
    { nome: "Data Science", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
    { nome: "Devops", corPrimaria: "#e06b69", corSecundaria: "#fde7e8" },
    { nome: "UX e Design", corPrimaria: "#db6ebf", corSecundaria: "#fae9f5" },
    { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador() {
    console.log("Deletando colaborador");
  }

  function mudarCorTime(cor, nome) {
    setTeams(
      teams.map((time) => {
        if (time.nome === nome) {
          time.corPrimaria = cor;
          time.corSecundaria = hexToRgba(cor, "0.5");
        }
        return time;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Form
        times={teams.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {teams.map((team) => (
        <Team
          mudarCor={mudarCorTime}
          key={team.nome}
          nome={team.nome}
          corPrimaria={team.corPrimaria}
          corSecundaria={team.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === team.nome
          )}
          aoDeletar={deletarColaborador}
        ></Team>
      ))}
      <Footer />
    </div>
  );
}

export default App;
