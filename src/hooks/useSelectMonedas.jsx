import { useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: white;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 6px;
`;

const Option = styled.option`
  color: #0d2235;
`;

const useSelectMonedas = (label, opciones) => {

  const [state , setState] =useState('')
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={ e => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <Option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </Option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
