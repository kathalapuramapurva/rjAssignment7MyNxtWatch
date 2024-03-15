import styled from 'styled-components'

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SideBarRouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const NotFoundContainer = styled.div`
  height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const NotFoundImage = styled.img`
  width: 250px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-bottom: 40px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const NotFoundPara = styled.p`
  color: #64748b;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#64748b')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
