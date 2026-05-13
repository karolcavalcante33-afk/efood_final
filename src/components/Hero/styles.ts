import styled from 'styled-components'
import fundo from '../../assets/vetor-do-fundo.png'

export const Banner = styled.section`
  width: 100%;
  height: 384px;

  background-color: #fff8f2;
  background-image: url(${fundo});
  background-repeat: repeat;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 138px;
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #E66767;

  max-width: 480px;

  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
    margin-top: 40px;
    padding: 0 16px;
  }
`