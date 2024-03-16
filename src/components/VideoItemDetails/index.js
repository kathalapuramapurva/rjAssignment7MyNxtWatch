import {Component} from 'react'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContentContainer,
  SideBarRouteContainer,
  VideoDetailsMainContainer,
  VideoPlayerContainer,
  VideoContentContainer,
  VideoSpecificDetailsContainer,
  Title,
  ViewsTimeResponseContainer,
  ViewsPublishedTimeContainer,
  Views,
  PublishedTime,
  ResponseContainer,
  LikeDislikeSaveButton,
  ResponseText,
  HorizontalLine,
  VideoChannelContainer,
  LogoNameSubscriberContainer,
  ChannelLogo,
  NameSubscribersContainers,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  LoaderVideoDetails,
  FailureVideoDetailsContainer,
  FailureImgVideoDetails,
  FailureHeadingVideoDetails,
  FailureParaVideoDetails,
  FailureRetryVideoDetailsButton,
} from './styledComponents'

const allApiStatusHome = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatusHome: allApiStatusHome.initial,
    active: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatusHome: allApiStatusHome.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        channelProfileImageUrl: data.video_details.channel.profile_image_url,
        channelSubscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        apiStatusHome: allApiStatusHome.success,
      })
    } else {
      this.setState({apiStatusHome: allApiStatusHome.failure})
    }
  }

  onFailureRetryRequest = () => {
    this.getVideoDetails()
  }

  LikeVideo = () => {
    this.setState({active: 'LIKE'})
  }

  DisLikeVideo = () => {
    this.setState({active: 'DISLIKE'})
  }

  renderSuccessHome = () => {
    const {videoDetails, active} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, onSaveVideo, onDeleteVideo} = value
          const {
            id,
            title,
            viewCount,
            publishedAt,
            videoUrl,
            channelName,
            channelProfileImageUrl,
            channelSubscriberCount,
            description,
          } = videoDetails
          const years = formatDistanceToNow(new Date(publishedAt), {
            addSuffix: true,
          }).split(' ')[1]

          const toggleSavedVideo = () => {
            const videoFound = savedVideos.find(
              eachVideo => eachVideo.id === id,
            )
            if (videoFound) {
              onDeleteVideo(id)
            } else {
              onSaveVideo(videoDetails)
            }
          }

          const isItemFound = savedVideos.find(eachVideo => eachVideo.id === id)

          return (
            <>
              <VideoPlayerContainer>
                <ReactPlayer url={videoUrl} width="100%" height="100%" />
              </VideoPlayerContainer>
              <VideoContentContainer>
                <VideoSpecificDetailsContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ViewsTimeResponseContainer>
                    <ViewsPublishedTimeContainer>
                      <Views isDarkTheme={isDarkTheme}>{viewCount} views</Views>
                      <PublishedTime isDarkTheme={isDarkTheme}>
                        {years} years ago
                      </PublishedTime>
                    </ViewsPublishedTimeContainer>
                    <ResponseContainer>
                      <LikeDislikeSaveButton
                        type="button"
                        onClick={this.LikeVideo}
                        active={active === 'LIKE'}
                      >
                        <BiLike
                          size={20}
                          color={active === 'LIKE' ? '#2563eb' : '#64748b'}
                        />
                        <ResponseText
                          active={active === 'LIKE'}
                          isDarkTheme={isDarkTheme}
                        >
                          Like
                        </ResponseText>
                      </LikeDislikeSaveButton>
                      <LikeDislikeSaveButton
                        type="button"
                        onClick={this.DisLikeVideo}
                        active={active === 'DISLIKE'}
                      >
                        <BiDislike
                          size={20}
                          color={active === 'DISLIKE' ? '#2563eb' : '#64748b'}
                        />
                        <ResponseText
                          active={active === 'DISLIKE'}
                          isDarkTheme={isDarkTheme}
                        >
                          Dislike
                        </ResponseText>
                      </LikeDislikeSaveButton>
                      <LikeDislikeSaveButton
                        type="button"
                        onClick={toggleSavedVideo}
                        active={isItemFound}
                      >
                        <BiListPlus size={20} />
                        <ResponseText
                          active={isItemFound}
                          isDarkTheme={isDarkTheme}
                        >
                          {isItemFound ? 'Saved' : 'Save'}
                        </ResponseText>
                      </LikeDislikeSaveButton>
                    </ResponseContainer>
                  </ViewsTimeResponseContainer>
                </VideoSpecificDetailsContainer>
                <HorizontalLine />
                <VideoChannelContainer>
                  <LogoNameSubscriberContainer>
                    <ChannelLogo
                      src={channelProfileImageUrl}
                      alt="channel logo"
                    />
                    <NameSubscribersContainers>
                      <ChannelName isDarkTheme={isDarkTheme}>
                        {channelName}
                      </ChannelName>
                      <ChannelSubscribers isDarkTheme={isDarkTheme}>
                        {channelSubscriberCount} subscribers
                      </ChannelSubscribers>
                      <ChannelDescription isDarkTheme={isDarkTheme}>
                        {description}
                      </ChannelDescription>
                    </NameSubscribersContainers>
                  </LogoNameSubscriberContainer>
                </VideoChannelContainer>
              </VideoContentContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoaderHome = () => (
    <LoaderVideoDetails data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderVideoDetails>
  )

  renderFailureHome = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureVideoDetailsContainer>
            <FailureImgVideoDetails src={failureImage} alt="failure view" />
            <FailureHeadingVideoDetails isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeadingVideoDetails>
            <FailureParaVideoDetails>
              We are having some trouble to complete your request. Please try
              again.
            </FailureParaVideoDetails>
            <FailureRetryVideoDetailsButton
              type="button"
              onClick={this.onFailureRetryRequest}
            >
              Retry
            </FailureRetryVideoDetailsButton>
          </FailureVideoDetailsContainer>
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
              data-testid="videoItemDetails"
            >
              <Header />
              <SideBarRouteContainer>
                <SideBar />
                <VideoDetailsMainContainer>
                  {this.renderSwitchHome()}
                </VideoDetailsMainContainer>
              </SideBarRouteContainer>
            </MainContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
