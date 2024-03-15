import styled from 'styled-components'

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SideBarRouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
`
export const GamingMainContainer = styled.div`
  height: 90vh;

  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const GamingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 10px 20px;
`

export const GamingIconButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
  border: none;
  border-radius: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
`

export const GamingHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`

export const VideosListGaming = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
  padding: 10px;
`

export const LoaderGaming = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const FailureGamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`

export const FailureImgGaming = styled.img`
  width: 200px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const FailureHeadingGaming = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const FailureParaGaming = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 450px;
  }
`

export const FailureRetryGamingButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  padding: 7px 20px 7px 20px;
  border-radius: 3px;
`
