import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SideBarContainer,
  RoutesContainer,
  RouteContainer,
  RouteHeading,
  ContactContainer,
  ContactHeading,
  MediaIconsContainer,
  MediaIcon,
  ContactPara,
  NavigateLink,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {activeRoute} = this.props
          return (
            <SideBarContainer isDarkTheme={isDarkTheme}>
              <RoutesContainer>
                <NavigateLink to="/">
                  <RouteContainer
                    activeRoute={activeRoute === 'Home'}
                    isDarkTheme={isDarkTheme}
                  >
                    <AiFillHome
                      size={20}
                      color={activeRoute === 'Home' ? '#ff0000' : '#616e7c'}
                    />
                    <RouteHeading isDarkTheme={isDarkTheme}>Home</RouteHeading>
                  </RouteContainer>
                </NavigateLink>

                <NavigateLink to="/trending">
                  <RouteContainer
                    activeRoute={activeRoute === 'Trending'}
                    isDarkTheme={isDarkTheme}
                  >
                    <HiFire
                      size={20}
                      color={activeRoute === 'Trending' ? '#ff0000' : '#616e7c'}
                    />
                    <RouteHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </RouteHeading>
                  </RouteContainer>
                </NavigateLink>
                <NavigateLink to="/gaming">
                  <RouteContainer
                    activeRoute={activeRoute === 'Gaming'}
                    isDarkTheme={isDarkTheme}
                  >
                    <SiYoutubegaming
                      size={20}
                      color={activeRoute === 'Gaming' ? '#ff0000' : '#616e7c'}
                    />
                    <RouteHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </RouteHeading>
                  </RouteContainer>
                </NavigateLink>
                <NavigateLink to="/saved-videos">
                  <RouteContainer
                    activeRoute={activeRoute === 'SavedVideos'}
                    isDarkTheme={isDarkTheme}
                  >
                    <BiListPlus
                      size={20}
                      color={
                        activeRoute === 'SavedVideos' ? '#ff0000' : '#616e7c'
                      }
                    />
                    <RouteHeading isDarkTheme={isDarkTheme}>
                      Saved videos
                    </RouteHeading>
                  </RouteContainer>
                </NavigateLink>
              </RoutesContainer>

              <ContactContainer>
                <ContactHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactHeading>
                <MediaIconsContainer>
                  <MediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <MediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <MediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </MediaIconsContainer>
                <ContactPara isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </ContactContainer>
            </SideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SideBar
