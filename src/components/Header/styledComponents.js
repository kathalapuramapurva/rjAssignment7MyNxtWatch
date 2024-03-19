import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const HeaderWebsiteLogo = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
export const ProfileImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-left: 5px;
    margin-right: 5px;
  }
`

export const ThreeLinesButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  @media screen and (max-width: 767px) {
      display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    border: 1px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    background-color: transparent;
    border-radius: 5px;
    padding 5px 15px 5px 15px;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
  }
`

export const PopUpContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  border: none;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopUpQuestion = styled.p`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#00306e')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CancelButton = styled.button`
    border: 1px solid #7e858e;
    color: #7e858e;
    background-color: transparent;
    border-radius: 3px;
    padding 5px 15px 5px 15px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
`

export const ConfirmButton = styled.button`
    border: none;
    color: #ebebeb;
    background-color: #3b82f6;
    border-radius: 3px;
    padding 5px 15px 5px 15px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
`

export const PopupMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`

export const MenusContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  text-decoration: none;
  flex-grow: 1;
`

export const MenuContainer = styled.li`
  display: flex;
  align-items: center;
  padding-left: 80px;
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

export const MenuHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
`

export const ThreeLinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const CloseIcon = styled(IoMdClose)`
  font-size: 20px;
  margin: 20px;
`
