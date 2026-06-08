import fundoImg from '../../assets/fundo.png'
import logoImg from '../../assets/logo.png'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 186px;

  background-image: url(${fundoImg});
  background-size: auto;
  background-repeat: repeat;

  display: flex;
  align-items: center;
`

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 32px;
`

const Text = styled.span`
  color: #E66767;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`

const Logo = styled.img`
  height: 50px;
`

const ProfileHeader = () => {
  return (
    <Container>
      <Content>
        <Text>Restaurantes</Text>

        <Logo src={logoImg} alt="efood" />

        <Text>0 produto(s) no carrinho</Text>
      </Content>
    </Container>
  )
}

export default ProfileHeader