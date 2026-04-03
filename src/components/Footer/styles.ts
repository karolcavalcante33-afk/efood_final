import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #ffe5d9;
  text-align: center;
  padding: 80px 0;
  margin-top: 120px; 
`

export const Logo = styled.h2`
  color: #e66767;
  border: 2px solid #e66767;
  display: inline-block;
  padding: 8px 20px;
  margin-bottom: 24px;
  font-weight: bold;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px; 
  margin-bottom: 24px;
`

export const Icon = styled.div`
  width: 28px; /* 👈 maior */
  height: 28px;
  background-color: #e66767;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

export const Text = styled.p`
  font-size: 12px; /* 👈 um pouco maior */
  color: #e66767;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`