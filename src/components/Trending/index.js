import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContentContainer,
  SideBarRouteContainer,
  TrendingMainContainer,
  TrendingHeaderContainer,
  TrendingIconButton,
  TrendingHeading,
  VideosListTrending,
  LoaderTrending,
  FailureTrendingContainer,
  FailureImgTrending,
  FailureHeadingTrending,
  FailureParaTrending,
  FailureRetryTrendingButton,
} from './styledComponents'

const allApiStatusHome = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Trending extends Component {
  state = {
    videosList: [],
    apiStatusHome: allApiStatusHome.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatusHome: allApiStatusHome.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channelName: eachVideo.channel.name,
        channelProfileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
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
    this.getTrendingVideosList()
  }

  renderSuccessHome = () => {
    const {videosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TrendingHeaderContainer isDarkTheme={isDarkTheme}>
                <TrendingIconButton type="button" isDarkTheme={isDarkTheme}>
                  <HiFire size={30} color="#ff0000" />
                </TrendingIconButton>
                <TrendingHeading isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingHeaderContainer>
              <VideosListTrending>
                {videosList.map(eachVideo => (
                  <TrendingVideoItem
                    videoDetails={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </VideosListTrending>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoaderHome = () => (
    <LoaderTrending data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderTrending>
  )

  renderFailureHome = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureTrendingContainer>
            <FailureImgTrending src={failureImage} alt="failure view" />
            <FailureHeadingTrending isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeadingTrending>
            <FailureParaTrending>
              We are having some trouble to complete your request. Please try
              again.
            </FailureParaTrending>
            <FailureRetryTrendingButton
              type="button"
              onClick={this.onFailureRetryRequest}
            >
              Retry
            </FailureRetryTrendingButton>
          </FailureTrendingContainer>
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
              data-testid="trending"
            >
              <Header activeRoute="Trending" />
              <SideBarRouteContainer>
                <SideBar activeRoute="Trending" />
                <TrendingMainContainer>
                  {this.renderSwitchHome()}
                </TrendingMainContainer>
              </SideBarRouteContainer>
            </MainContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
