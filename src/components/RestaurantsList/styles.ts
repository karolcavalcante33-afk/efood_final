import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff8f2; /* 👈 FUNDO ROSINHA */

  padding: 32px 0 80px;
`

export const List = styled.ul`
  max-width: 1024px;
  width: 100%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 472px);

  justify-content: center;

  column-gap: 48px;
  row-gap: 32px;

  list-style: none;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    justify-items: center;
  }
`