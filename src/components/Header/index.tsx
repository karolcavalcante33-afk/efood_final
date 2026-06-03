import logo from '../../assets/logo.png'

import {
  HeaderBar,
  HeaderContainer,
  Logo,
  NavText
} from './styles'

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <NavText>Restaurantes</NavText>

        <Logo src={logo} alt="efood" />

        <NavText>0 produto(s) no carrinho</NavText>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default Header