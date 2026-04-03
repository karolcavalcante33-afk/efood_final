import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch; /* 🔥 ESSA LINHA RESOLVE */
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  display: flex;
  flex-direction: column;
  height: 100%; /* 🔥 ESSENCIAL */
`

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
  background-color: #eee; // 👈 importante
`

export const Title = styled.h3`
  font-size: 16px;
  margin: 12px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 0 12px 12px;
  color: #666;
`

export const Button = styled.button`
  margin-top: auto; /* 🔥 ISSO É O SEGREDO */
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`