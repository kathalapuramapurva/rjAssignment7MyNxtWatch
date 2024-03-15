import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 45%;
  margin-bottom: 40px;
  @media screen and (min-width: 576px) {
    width: 31%;
  }
`

export const VideoNavigateLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
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
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const VideoViewsWorldwideContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`

export const VideoViewsWorldwide = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 576px) {
    list-style-type: none;
    font-size: 11px;
  }
  @media screen and (min-width: 768px) {
    list-style-type: none;
    font-size: 15px;
  }
`
