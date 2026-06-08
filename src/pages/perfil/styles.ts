import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0 80px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 32px;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #e66767;

  padding: 8px;

  display: flex;
  flex-direction: column;

  width: 320px;
 /* min-height: 320px; */

  border: 1px solid #e66767;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;

  object-fit: cover;
  display: block;

  border: 1px solid #ffe8d9;
`

export const Content = styled.div`
  padding: 12px 8px 0;

  display: flex;
  flex-direction: column;

  flex: 1;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #ffe8d9;

  margin-bottom: 8px;
`

export const Button = styled.button`
  margin-top: auto;

  width: 100%;
  height: 24px;

  background-color: #ffe8d9;
  color: #e66767;

  border: none;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`