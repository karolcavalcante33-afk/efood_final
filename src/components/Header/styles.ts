import styled from 'styled-components'
import fundo from '../../assets/vetor-do-fundo.png'

export const HeaderBar = styled.header`
  background-color: #FFF8F2;
  background-image: url(${fundo});
  height: 186px;

  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const NavText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #E66767;

  margin: 0;
`