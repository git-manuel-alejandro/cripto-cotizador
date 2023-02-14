import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import Resultado from "./components/Resultado";
import { Spinner } from "./components/spinner/Spinner";


import ImagenCripto from "./img/imagen-criptos.png"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem
    
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: white;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [monedas , setMonedas] = useState({})
  const [resultado , setResultado] = useState({})
  const [cargando , setCargando] = useState(false)
  useEffect(()=> {
    if(Object.keys(monedas).length > 0 ){

      const cotizarCripto = async () =>{
        setCargando(true)
     
        const {moneda , criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)

        const data = await respuesta.json()
        setResultado(data.DISPLAY[criptomoneda][moneda])
        setCargando(false)

        // console.log(resultado)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ ImagenCripto} alt='imagenes criptomonedas'></Imagen>
      <div>
      <Heading>Cotiza Criptomonedas al instante</Heading>

      <Formulario setMonedas={setMonedas}/>

      

      {resultado.PRICE && cargando ? <Spinner /> :   <Resultado resultado={ resultado}/>}
     
      </div>

    </Contenedor>
  );
}

export default App;
