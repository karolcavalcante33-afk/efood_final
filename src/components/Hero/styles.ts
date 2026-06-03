import styled from 'styled-components'
import fundo from '../../assets/vetor-do-fundo.png'

export const Banner = styled.section`
  width: 100%;
  height: 384px;

  background-color: #FFF8F2;
  background-image: url(${fundo});
  background-repeat: repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 40px;
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
  font-weight: 900;

  line-height: 36px;

  text-align: center;
  color: #E66767;

  margin: 0 auto;


  @media (max-width: 768px) {
    width: 90%;

    font-size: 24px;
    line-height: 30px;
  }
`