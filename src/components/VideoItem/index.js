import {formatDistanceToNow} from 'date-fns'

import {
  VideoListItem,
  VideoNavigateLink,
  VideoThumbnailImage,
  VideoLogoContentContainer,
  VideoChannelLogo,
  VideoContentContainer,
  VideoTitle,
  ChannelNameViewsYearsContainer,
  VideoChannelName,
  VideoViewsTimeContainer,
  VideoViews,
  VideoTime,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        channelName,
        channelProfileImageUrl,
        viewCount,
        publishedAt,
      } = videoDetails
      const years = formatDistanceToNow(new Date(publishedAt))
      const split = years.split(' ')
      console.log(split)
      const publishedTime = split[1].concat(' ', split[2])
      console.log(publishedTime)
      return (
        <VideoListItem>
          <VideoNavigateLink to={`/videos/${id}`}>
            <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoLogoContentContainer>
              <VideoChannelLogo
                src={channelProfileImageUrl}
                alt="channel logo"
              />
              <VideoContentContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelNameViewsYearsContainer>
                  <VideoChannelName>{channelName}</VideoChannelName>
                  <VideoViewsTimeContainer>
                    <VideoViews>{viewCount} views</VideoViews>
                    <VideoTime>{publishedTime} ago</VideoTime>
                  </VideoViewsTimeContainer>
                </ChannelNameViewsYearsContainer>
              </VideoContentContainer>
            </VideoLogoContentContainer>
          </VideoNavigateLink>
        </VideoListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
