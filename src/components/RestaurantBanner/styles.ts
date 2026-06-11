import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 280px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  display: flex;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > div {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    padding-bottom: 32px;

    color: #fff;
  }
`

export const Category = styled.span`
  display: block;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 32px;

  color: #fff;

  margin-bottom: 156px;
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 37px;

  color: #fff;

  margin: 0;
`