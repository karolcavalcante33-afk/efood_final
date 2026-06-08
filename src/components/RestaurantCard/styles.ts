import styled from 'styled-components'

export const Card = styled.div`
  width: 472px;

  background-color: #fff8f2;

  border: 1px solid #e66767;

  position: relative;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;

  object-fit: cover;
  display: block;
`

export const Content = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;

  color: #e66767;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;

  font-size: 18px;
  font-weight: 700;

  color: #e66767;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 18px;

  color: #e66767;

  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #ffebd9;

  border: none;

  padding: 4px 6px;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  width: fit-content;
`

export const TagsContainer = styled.div`
  position: absolute;

  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: #e66767;
  color: #ffebd9;

  padding: 6px 8px;

  font-size: 12px;
  font-weight: 700;

  line-height: 14px;
`