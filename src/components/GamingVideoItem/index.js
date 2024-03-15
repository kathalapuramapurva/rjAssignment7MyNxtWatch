import {
  VideoListItem,
  VideoNavigateLink,
  VideoThumbnailImage,
  VideoContentContainer,
  VideoTitle,
  VideoViewsWorldwideContainer,
  VideoViewsWorldwide,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails
      return (
        <VideoListItem>
          <VideoNavigateLink to={`/videos/${id}`}>
            <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoContentContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <VideoViewsWorldwideContainer>
                <VideoViewsWorldwide>{viewCount} Watching</VideoViewsWorldwide>
                <VideoViewsWorldwide>Worldwide</VideoViewsWorldwide>
              </VideoViewsWorldwideContainer>
            </VideoContentContainer>
          </VideoNavigateLink>
        </VideoListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
