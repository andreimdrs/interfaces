import Conteiner from './components/Conteiner';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "16px",
        background: "#eaeaea",
        gap: "16px",
      }}
    >
      <Conteiner titulo="Concluída" backgroundColor="green" />
      <Conteiner titulo="Pendente" backgroundColor="orange" />
      <Conteiner titulo="Não-concluída" backgroundColor="red" />
    </div>
  );
}

export default App;