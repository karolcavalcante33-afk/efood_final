import styled from 'styled-components'
import fundo from '../../assets/vetor-do-fundo.png'

export const HeaderBar = styled.header`
  background-color: #FFF8F2;
  background-image: url(${fundo});
  background-repeat: repeat;

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
  width: 140px;
`

export const NavText = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #E66767;
`