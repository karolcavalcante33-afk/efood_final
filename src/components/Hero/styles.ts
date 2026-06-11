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

  padding-top: 32px;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 100px;
`

export const Title = styled.h1`
  width: 539px;

  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 100%;

  text-align: center;
  color: #E66767;

  margin: 0 auto;
  padding: 0;
`
