import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Error from "./Error";

import { monedas } from "../data/data";

const InputSubmit = styled.input`
  background-color: #9497ff;
  /* display: block; */

  width: 100%;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
  transition: all 0.3s;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

export const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas("Elige tu criptomoneda", criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);


    };
    consultarAPI();
  }, []);

  const handleSubmit = (e)=> {
    e.preventDefault()
    
    if([moneda , criptomoneda].includes('')){
      setError(true)
      return 
    }

    setError(false)
    setMonedas({moneda, criptomoneda})

    
  }



  return (
    <>
    {error && <Error > Todos los campos son obligatorios</Error>}
    <form onSubmit={ handleSubmit}>
      <SelectMonedas />
      <SelectCriptoMonedas />
      
      <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>
  );
};
