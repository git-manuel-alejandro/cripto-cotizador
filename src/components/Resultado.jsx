import styled from "@emotion/styled";


const ResultadoDiv = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Precio = styled.p`
  font-size: 24px;

  span {
    font-weight: 700;
  }
`;
const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;


const Span = styled.span`
margin-top: 50px;

`;
const Resultado = ({ resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <ResultadoDiv>
          <img
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt="imagen"
            width="120px"
            height="120px"
          />
          <div>
            <Precio>
              El precio es de : <span>{PRICE}</span>
            </Precio>
            <Texto>
              Precio más alto del día : <span>{HIGHDAY}</span>
            </Texto>
            <Texto>
              Precio más bajo del día : <span>{LOWDAY}</span>
            </Texto>
            <Texto>
              Cambio últimas 24 hrs. : <span>{CHANGEPCT24HOUR}</span>
            </Texto>
            <p>
              Última actualización : <span>{LASTUPDATE}</span>
            </p>
          </div>
        </ResultadoDiv>
  );
};

export default Resultado;
