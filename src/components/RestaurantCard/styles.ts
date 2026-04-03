import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e66767;

  overflow: hidden; /* 🔥 mantém corte da imagem correto */

  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`

export const Content = styled.div`
  padding: 12px; /* 🔥 mais espaço igual Figma */
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 18px; /* 🔥 mais destaque */
  font-weight: bold;
  margin: 0;
  color: #e66767;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #666;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin: 0;
`

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px 12px; /* 🔥 mais “botão de verdade” */
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;

  width: fit-content;
  margin-top: 8px;

  &:hover {
    background-color: #d65656;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #e66767;
`

export const Star = styled.span`
  color: #ffb930;
`

/* 🔥 IMPORTANTE: essas tags funcionam com position relative no pai */
export const Highlight = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;

  background-color: #e66767;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
`

export const CategoryTag = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;

  background-color: #e66767;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
`