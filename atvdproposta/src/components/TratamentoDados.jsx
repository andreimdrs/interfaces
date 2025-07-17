import { useState, useEffect } from 'react';

const Tratamento = () => {
  // Estados para os dados
  const [nomes, setNomes] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [cidades, setCidades] = useState([]);
  
  // Estados auxiliares
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/users');
        
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Verifica se a API retorna um objeto com propriedade 'users'
        const usuarios = data.users || data;
        
        // Processamento mais eficiente com map
        setNomes(usuarios.map(user => user.name));
        setUsernames(usuarios.map(user => user.username));
        setCidades(usuarios.map(user => user.city));
        
      } catch (err) {
        setError(err.message);
        console.error("Erro na requisição:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>Erro: {error}</p>;

  return children ({
    nomes, 
    usernames,
    cidades,
    loading,
    error
  });
};

export default Tratamento