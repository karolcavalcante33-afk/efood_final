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
  background-color: #fff;
  padding: 24px;
  max-width: 700px;
  width: 100%;
  border-radius: 8px;
  position: relative;

  display: flex;
  gap: 16px;
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