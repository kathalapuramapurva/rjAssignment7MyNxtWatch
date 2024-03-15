import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
    padding: 0px;
    height: 90vh;
  }
`

export const RoutesContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin: 0px;
  text-decoration: none;
`

export const RouteContainer = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-decoration: none;
  background-color: ${props => {
    if (props.activeRoute) {
      if (props.isDarkTheme) {
        return '#383838'
      }
      return '#cbd5e1'
    }
    return 'transparent'
  }};
`

export const RouteHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContactHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`

export const MediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const MediaIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ContactPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`

export const NavigateLink = styled(Link)`
  text-decoration: none;
`

export const RouteButton = styled.button`
  background: none;
  border: none;
`
