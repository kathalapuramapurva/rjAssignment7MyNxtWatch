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

export const SavedVideosContainer = styled.div`
  height: 90vh;

  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const SavedHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 10px 20px;
`

export const SavedIconButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
  border: none;
  border-radius: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
`

export const SavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`

export const VideosListSaved = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
export const NoSavedImage = styled.img`
  width: 250px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-bottom: 40px;
  }
`

export const NoSavedHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 23px;
  }
`

export const NoSavedPara = styled.p`
  color: #64748b;
  color: ${props => (props.isDarkTheme ? '#7e858e' : '#64748b')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
