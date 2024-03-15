import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContentContainer,
  SideBarRouteContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFound = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <MainContentContainer>
          <Header activeRoute="SavedVideos" />
          <SideBarRouteContainer>
            <SideBar activeRoute="SavedVideos" />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage src={notFound} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </SideBarRouteContainer>
        </MainContentContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
