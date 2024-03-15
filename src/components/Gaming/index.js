import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContentContainer,
  SideBarRouteContainer,
  GamingMainContainer,
  GamingHeaderContainer,
  GamingIconButton,
  GamingHeading,
  VideosListGaming,
  LoaderGaming,
  FailureGamingContainer,
  FailureImgGaming,
  FailureHeadingGaming,
  FailureParaGaming,
  FailureRetryGamingButton,
} from './styledComponents'

const allApiStatusHome = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatusHome: allApiStatusHome.initial,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatusHome: allApiStatusHome.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        videosList: updatedVideosList,
        apiStatusHome: allApiStatusHome.success,
      })
    } else {
      this.setState({apiStatusHome: allApiStatusHome.failure})
    }
  }

  onFailureRetryRequest = () => {
    this.getGamingVideosList()
  }

  renderSuccessHome = () => {
    const {videosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GamingHeaderContainer isDarkTheme={isDarkTheme}>
                <GamingIconButton type="button" isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming size={30} color="#ff0000" />
                </GamingIconButton>
                <GamingHeading isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
              </GamingHeaderContainer>
              <VideosListGaming>
                {videosList.map(eachVideo => (
                  <GamingVideoItem
                    videoDetails={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </VideosListGaming>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoaderHome = () => (
    <LoaderGaming data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderGaming>
  )

  renderFailureHome = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureGamingContainer>
            <FailureImgGaming src={failureImage} alt="failure view" />
            <FailureHeadingGaming isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeadingGaming>
            <FailureParaGaming>
              We are having some trouble to complete your request. Please try
              again.
            </FailureParaGaming>
            <FailureRetryGamingButton
              type="button"
              onClick={this.onFailureRetryRequest}
            >
              Retry
            </FailureRetryGamingButton>
          </FailureGamingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSwitchHome = () => {
    const {apiStatusHome} = this.state
    switch (apiStatusHome) {
      case allApiStatusHome.success:
        return this.renderSuccessHome()
      case allApiStatusHome.inProgress:
        return this.renderLoaderHome()
      case allApiStatusHome.failure:
        return this.renderFailureHome()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainContentContainer
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
            >
              <Header activeRoute="Gaming" />
              <SideBarRouteContainer>
                <SideBar activeRoute="Gaming" />
                <GamingMainContainer>
                  {this.renderSwitchHome()}
                </GamingMainContainer>
              </SideBarRouteContainer>
            </MainContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
