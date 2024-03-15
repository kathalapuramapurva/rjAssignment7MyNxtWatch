import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContentContainer,
  SideBarRouteContainer,
  SavedVideosContainer,
  SavedHeaderContainer,
  SavedIconButton,
  SavedHeading,
  VideosListSaved,
  NoSavedVideosContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        return (
          <>
            <SavedHeaderContainer isDarkTheme={isDarkTheme}>
              <SavedIconButton type="button" isDarkTheme={isDarkTheme}>
                <BiListPlus size={30} color="#ff0000" />
              </SavedIconButton>
              <SavedHeading isDarkTheme={isDarkTheme}>
                Saved Videos
              </SavedHeading>
            </SavedHeaderContainer>
            <VideosListSaved>
              {savedVideos.map(eachVideo => (
                <TrendingVideoItem
                  videoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </VideosListSaved>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          return (
            <MainContentContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              <Header activeRoute="SavedVideos" />
              <SideBarRouteContainer>
                <SideBar activeRoute="SavedVideos" />
                <SavedVideosContainer>
                  {savedVideos.length === 0 ? (
                    <NoSavedVideosContainer>
                      <NoSavedImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoSavedHeading isDarkTheme={isDarkTheme}>
                        No Saved videos found
                      </NoSavedHeading>
                      <NoSavedPara isDarkTheme={isDarkTheme}>
                        You can save your videos while watching them
                      </NoSavedPara>
                    </NoSavedVideosContainer>
                  ) : (
                    this.renderSavedVideos()
                  )}
                </SavedVideosContainer>
              </SideBarRouteContainer>
            </MainContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
