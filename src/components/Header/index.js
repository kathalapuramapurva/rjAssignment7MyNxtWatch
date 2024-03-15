import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoReorderThreeOutline, IoSunnyOutline} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainer,
  HeaderWebsiteLogo,
  IconsContainer,
  ButtonIcon,
  ThreeLinesButton,
  ProfileImg,
  LogoutIcon,
  LogoutButton,
  PopUpContainer,
  PopUpQuestion,
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  PopupMain,
  MenusContainer,
  MenuContainer,
  MenuHeading,
  MenuLink,
  ThreeLinesContainer,
  CloseButton,
  CloseIcon,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const {activeRoute} = props
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onToggleTheme = () => {
        toggleTheme()
      }

      const onConfirmLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <HeaderWebsiteLogo src={websiteLogo} alt="website logo" />
          </Link>
          <IconsContainer>
            <ButtonIcon
              type="button"
              onClick={onToggleTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <IoSunnyOutline size={25} color="#f9f9f9" />
              ) : (
                <FaMoon size={25} color="#181818" />
              )}
            </ButtonIcon>
            <Popup
              modal
              trigger={
                <ThreeLinesButton type="button" isDarkTheme={isDarkTheme}>
                  <IoReorderThreeOutline
                    size={25}
                    color={isDarkTheme ? '#f9f9f9' : '#181818'}
                  />
                </ThreeLinesButton>
              }
            >
              {close => (
                <ThreeLinesContainer isDarkTheme={isDarkTheme}>
                  <CloseButton
                    type="button"
                    isDarkTheme={isDarkTheme}
                    onClick={() => close()}
                  >
                    <CloseIcon />
                  </CloseButton>
                  <MenusContainer>
                    <MenuLink to="/">
                      <MenuContainer
                        activeRoute={activeRoute === 'Home'}
                        isDarkTheme={isDarkTheme}
                      >
                        <AiFillHome
                          size={20}
                          color={activeRoute === 'Home' ? '#ff0000' : '#616e7c'}
                        />
                        <MenuHeading isDarkTheme={isDarkTheme}>
                          Home
                        </MenuHeading>
                      </MenuContainer>
                    </MenuLink>

                    <MenuLink to="/trending">
                      <MenuContainer
                        activeRoute={activeRoute === 'Trending'}
                        isDarkTheme={isDarkTheme}
                      >
                        <HiFire
                          size={20}
                          color={
                            activeRoute === 'Trending' ? '#ff0000' : '#616e7c'
                          }
                        />
                        <MenuHeading isDarkTheme={isDarkTheme}>
                          Trending
                        </MenuHeading>
                      </MenuContainer>
                    </MenuLink>
                    <MenuLink to="/gaming">
                      <MenuContainer
                        activeRoute={activeRoute === 'Gaming'}
                        isDarkTheme={isDarkTheme}
                      >
                        <SiYoutubegaming
                          size={20}
                          color={
                            activeRoute === 'Gaming' ? '#ff0000' : '#616e7c'
                          }
                        />
                        <MenuHeading isDarkTheme={isDarkTheme}>
                          Gaming
                        </MenuHeading>
                      </MenuContainer>
                    </MenuLink>
                    <MenuLink to="/saved-videos">
                      <MenuContainer
                        activeRoute={activeRoute === 'SavedVideos'}
                        isDarkTheme={isDarkTheme}
                      >
                        <BiListPlus
                          size={20}
                          color={
                            activeRoute === 'SavedVideos'
                              ? '#ff0000'
                              : '#616e7c'
                          }
                        />
                        <MenuHeading isDarkTheme={isDarkTheme}>
                          Saved videos
                        </MenuHeading>
                      </MenuContainer>
                    </MenuLink>
                  </MenusContainer>
                </ThreeLinesContainer>
              )}
            </Popup>

            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutIcon type="button" isDarkTheme={isDarkTheme}>
                  <FiLogOut
                    size={25}
                    color={isDarkTheme ? '#f9f9f9' : '#181818'}
                  />
                </LogoutIcon>
              }
              className="popup-container"
            >
              {close => (
                <PopupMain>
                  <PopUpContainer isDarkTheme={isDarkTheme}>
                    <PopUpQuestion isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout?
                    </PopUpQuestion>
                    <ButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </PopUpContainer>
                </PopupMain>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
              className="popup-container"
            >
              {close => (
                <PopupMain>
                  <PopUpContainer isDarkTheme={isDarkTheme}>
                    <PopUpQuestion isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout?
                    </PopUpQuestion>
                    <ButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onConfirmLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </PopUpContainer>
                </PopupMain>
              )}
            </Popup>
          </IconsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
