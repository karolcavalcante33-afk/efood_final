import logo from '../../assets/logo.png'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

import {
  Container,
  Logo,
  Icons,
  Icon,
  Text
} from './styles'

const Footer = () => (
  <Container>
    <Logo>
      <img src={logo} alt="efood" />
    </Logo>

    <Icons>
      <Icon>
        <FaInstagram />
      </Icon>

      <Icon>
        <FaFacebookF />
      </Icon>

      <Icon>
        <FaTwitter />
      </Icon>
    </Icons>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer