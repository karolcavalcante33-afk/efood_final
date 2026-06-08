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
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 125px; // Ajustado para o tamanho padrão do Figma
`

export const NavText = styled.h1` // Alterado para h1 para semântica correta
  font-family: 'Roboto', sans-serif;
  font-size: 24px; // O tamanho que o instrutor exigiu
  font-weight: 900;
  color: #E66767;
  margin: 0;
`