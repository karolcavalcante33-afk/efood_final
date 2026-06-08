import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`

export const Container = styled.div`
  background-color: #E66767;
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  position: relative;

  display: flex;
  gap: 24px;

  color: #FFEBD9;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`