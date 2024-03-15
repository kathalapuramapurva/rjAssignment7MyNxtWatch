import styled from 'styled-components'

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SideBarRouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const VideoDetailsMainContainer = styled.div`
  height: 90vh;

  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 55%;
  }
`

export const VideoContentContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  @media screen and (min-width: 768px) {
    padding: 0px;
    margin-top: 20px;
  }
`

export const VideoSpecificDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  margin-top: 0px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ViewsTimeResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0px;
  }
`

export const ViewsPublishedTimeContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;

  margin: 0px;
`

export const Views = styled.li`
  list-style-type: none;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const PublishedTime = styled.li`
  list-style-type: disc;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ResponseContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0px;
`

export const LikeDislikeSaveButton = styled.button`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  padding: 0px;
`

export const ResponseText = styled.p`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const HorizontalLine = styled.hr`
  width: 100%;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
`

export const VideoChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const LogoNameSubscriberContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;

  margin-right: 10px;
`
export const NameSubscribersContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 500;
  margin-top: 0px;
  line-height: 1.5;

  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ChannelSubscribers = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  margin-left: 5px;

  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ChannelDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 5px;

  margin-left: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ChannelDescriptionOut = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 9px;
  font-weight: 500;
  margin-left: 5px;

  margin-left: 0px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LoaderVideoDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const FailureVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`

export const FailureImgVideoDetails = styled.img`
  width: 200px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const FailureHeadingVideoDetails = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const FailureParaVideoDetails = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 450px;
  }
`

export const FailureRetryVideoDetailsButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  padding: 7px 20px 7px 20px;
  border-radius: 3px;
`
