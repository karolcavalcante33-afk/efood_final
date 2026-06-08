import styled from 'styled-components'
import fundo from '../../assets/vetor-do-fundo.png'

export const Banner = styled.section`
  width: 100%;
  height: 384px;

  background-image: url(${fundo});
  background-size: cover; 
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 64px;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 138px;
`

export const Title = styled.h1`
  max-width: 700px;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: bold; /* Tente bold se 900 ficar muito grosso */
  line-height: 42px; /* Ajuste para o texto não ficar colado */
  text-align: center;
  color: #E66767;
  margin: 0; 
  padding: 0 16px; /* Garante que não encoste nas laterais em telas pequenas */

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`