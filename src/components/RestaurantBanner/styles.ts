import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 280px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > div {
    position: relative;
    z-index: 1;

    max-width: 1024px;
    width: 100%;

    margin: 0 auto;
    padding: 32px 16px;

    color: #fff;
  }
`

export const Category = styled.span`
  display: block;

  color: #fff;
  font-size: 32px;
  font-weight: 100;

  margin-bottom: 156px;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 900;

  margin: 0;
`