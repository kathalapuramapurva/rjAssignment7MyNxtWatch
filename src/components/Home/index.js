import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import {
  MainContentContainer,
  SideBarRouteContainer,
  HomeContainer,
  BannerContainer,
  BannerCloseButton,
  BannerLogo,
  BannerHeading,
  BannerButton,
  HomeContentContainer,
  HomeSearchContainer,
  HomeSearchInput,
  HomeSearchButton,
  VideosListHome,
  LoaderHome,
  NoSearchResultsHomeContainer,
  NoSearchImgHome,
  NoSearchHeadingHome,
  NoSearchParaHome,
  NoSearchRetryHomeButton,
  FailureHomeContainer,
  FailureImgHome,
  FailureHeadingHome,
  FailureParaHome,
  FailureRetryHomeButton,
} from './styledComponents'

const allApiStatusHome = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerVisible: true,
    searchInput: '',
    videosList: [],
    apiStatusHome: allApiStatusHome.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatusHome: allApiStatusHome.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onCloseBanner = () => {
    this.setState({bannerVisible: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = () => {
    this.getVideosList()
  }

  renderSuccessHome = () => {
    const {videosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {videosList.length === 0 ? (
                <NoSearchResultsHomeContainer>
                  <NoSearchImgHome
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoSearchHeadingHome isDarkTheme={isDarkTheme}>
                    No Search results found
                  </NoSearchHeadingHome>
                  <NoSearchParaHome>
                    Try different key words or remove search filter
                  </NoSearchParaHome>
                  <NoSearchRetryHomeButton type="button">
                    Retry
                  </NoSearchRetryHomeButton>
                </NoSearchResultsHomeContainer>
              ) : (
                <VideosListHome>
                  {videosList.map(eachVideo => (
                    <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
                  ))}
                </VideosListHome>
              )}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoaderHome = () => (
    <LoaderHome data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderHome>
  )

  renderFailureHome = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureHomeContainer>
            <FailureImgHome src={failureImage} alt="failure view" />
            <FailureHeadingHome isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeadingHome>
            <FailureParaHome>
              We are having some trouble to complete your request. Please try
              again.
            </FailureParaHome>
            <FailureRetryHomeButton type="button" onClick={this.getVideosList}>
              Retry
            </FailureRetryHomeButton>
          </FailureHomeContainer>
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
          const {bannerVisible, searchInput} = this.state

          return (
            <MainContentContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header activeRoute="Home" />
              <SideBarRouteContainer>
                <SideBar activeRoute="Home" />
                <HomeContainer>
                  {bannerVisible && (
                    <BannerContainer data-testid="banner">
                      <BannerCloseButton
                        type="button"
                        isDarkTheme={isDarkTheme}
                        onClick={this.onCloseBanner}
                        data-testid="close"
                      >
                        <IoMdClose size={20} color="#231f20" />
                      </BannerCloseButton>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <HomeContentContainer>
                    <HomeSearchContainer>
                      <HomeSearchInput
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        type="search"
                        placeholder="Search"
                      />
                      <HomeSearchButton
                        type="button"
                        onClick={this.onEnterSearchInput}
                        data-testid="searchButton"
                      >
                        <FaSearch size={15} color="#909090" />
                      </HomeSearchButton>
                    </HomeSearchContainer>

                    {this.renderSwitchHome()}
                  </HomeContentContainer>
                </HomeContainer>
              </SideBarRouteContainer>
            </MainContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
