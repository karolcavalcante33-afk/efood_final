import { Banner, Logo, Title } from './styles'
import logo from '../../assets/logo.png'

const Hero = () => {
  return (
    <Banner>
      <Logo src={logo} alt="efood" />
      <Title>
  Viva experiências gastronômicas <br />
  no conforto da sua casa
</Title>
    </Banner>
  )
}

export default Hero