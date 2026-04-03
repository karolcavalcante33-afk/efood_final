
import styled from 'styled-components'

export const Banner = styled.section`
  height: 350px;
  background-image: url('/images/hero.png');
  background-size: cover;
  background-position: center; // 🔥 muda aqui
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 🔥 muda aqui

  h2 {
    color: #e66767;
    font-size: 36px;
    text-align: center;
    max-width: 600px;
  }
`