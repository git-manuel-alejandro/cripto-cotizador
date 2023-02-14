import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: white;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', open sans-serif;
    font-weight: 700;
    text-align: center;

`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error