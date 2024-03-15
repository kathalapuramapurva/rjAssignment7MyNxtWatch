import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import NxtWatchContext from './context/NxtWatchContext'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onSaveVideo = newVideo => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, newVideo],
    }))
  }

  onDeleteVideo = givenId => {
    const {savedVideos} = this.state
    const updatedSavedVideosList = savedVideos.filter(
      eachVideo => eachVideo.id !== givenId,
    )
    this.setState({savedVideos: updatedSavedVideosList})
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          toggleTheme: this.toggleTheme,
          onSaveVideo: this.onSaveVideo,
          onDeleteVideo: this.onDeleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
