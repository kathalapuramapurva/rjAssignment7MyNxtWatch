import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 48%;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
    margin-bottom: 40px;
  }
`

export const VideoNavigateLink = styled(Link)`
  text-decoration: none;
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
`

export const VideoLogoContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`

export const VideoChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  margin-top: 0px;
  line-height: 1.5;
`

export const ChannelNameViewsYearsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoChannelName = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin-right: 20px;
`

export const VideoViewsTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
`

export const VideoViews = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin-right: 20px;
`

export const VideoTime = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
`
