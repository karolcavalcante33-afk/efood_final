import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    );
  }

  > div {
    position: relative;
    z-index: 1;
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    padding: 24px;
  }
`

export const Category = styled.span`
  color: #fff;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  margin: 0;
`