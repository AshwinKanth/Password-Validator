import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CardContainer = styled.div`
  background-color: #434451;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 16px #434451 solid;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  height: 35px;
  width: 350px;
  padding: 10px;
  outline: none;
  border-width: 0px;
`
export const WarningText = styled.p`
  color: #ef4444;
  font-size: 11px;
  font-family: 'Roboto';
`
