import fundoImg from '../../assets/fundo.png'
import logoImg from '../../assets/logo.png'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 186px;

  background-image: url(${fundoImg});
  background-repeat: repeat;
  background-size: auto;

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

  padding: 0 16px;
`

const LeftText = styled.span`
  width: 109px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 18px;

  color: #e66767;

  text-align: center;
`

const RightText = styled.span`
  width: 256px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 900;
  line-height: 18px;

  color: #e66767;

  text-align: right;
`

const Logo = styled.img`
  width: 125px;
  height: auto;
`

const ProfileHeader = () => {
  return (
    <Container>
      <Content>
        <LeftText>Restaurantes</LeftText>

        <Logo src={logoImg} alt="efood" />

        <RightText>0 produto(s) no carrinho</RightText>
      </Content>
    </Container>
  )
}

export default ProfileHeader