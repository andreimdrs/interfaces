import { useState, useEffect } from 'react';

function Macaco() {
  // useState: Guardando bananas
  const [bananas, setBananas] = useState(0);
  const [subiu, setSubiu] = useState(false)
  
  // useEffect 1: Sempre que bananas mudam
  useEffect(() => {
    if (bananas > 0) alert(`GANHEI BANANA! Total: ${bananas}`);
  }, [bananas]);

  // useEffect 2: Só quando o macaco aparece
  useEffect(() => {
    console.log("Macaco nasceu!");
    if (bananas > 0 && subiu == false) {
      alert("macaco subiu na árvore")
      setSubiu(true)
    } 

    else if (bananas == 0 && subiu == true) {
      alert("macaco foi embora!")
      setSubiu(false)
    }
  }, [bananas]);

  return (
    <div>
      <p>🍌: {bananas}</p>
      <button onClick={() => setBananas(b => b + 1)}>Achar banana!</button>
      <button onClick={()=> setBananas(0)}>Apodrecer banana!</button>
    </div>
  );
}

export default Macaco