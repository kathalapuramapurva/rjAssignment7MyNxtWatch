import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f1f1f1')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
`

export const LoginFormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const Logo = styled.img`
  width: 90px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 150px;
    margin-bottom: 15px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const LabelElement = styled.label`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#475569')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`

export const InputElement = styled.input`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #94a3b8;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 10px 15px 10px 15px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
    margin-bottom: 25px;
  }
`

export const DisplayInput = styled.input`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`

export const DisplayPassword = styled.label`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const SubmitFormButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 10px 15px 10px 15px;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
