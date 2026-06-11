import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #ffe5d9;
  text-align: center;
  padding: 40px 0;
`

export const Logo = styled.div`
  margin-bottom: 24px;

  img {
    width: 125px;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
`

export const Icon = styled.div`
  color: #e66767;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
`

export const Text = styled.p`
  width: 480px;
  max-width: 90%;

  margin: 0 auto;

  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  line-height: 14px;
  text-align: center;

  color: #e66767;
`