import React from 'react';
import Tratamento from './components/Tratamento';
import NameTable from './components/NameTable';
import UsernameTable from './components/UsernameTable';
import CityTable from './components/CityTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
        <h1>Sistema de Usuários</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Tratamento>
          {({ nomes, usernames, cidades, loading, error }) => (
            <>
              <NameTable nomes={nomes} loading={loading} error={error} />
              <UsernameTable usernames={usernames} loading={loading} error={error} />
              <CityTable cidades={cidades} loading={loading} error={error} />
            </>
          )}
        </Tratamento>
      </main>
    </div>
  );
}

export default App;