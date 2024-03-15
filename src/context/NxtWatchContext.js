import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
  savedVideos: [],
  onSaveVideo: () => {},
  onDeleteVideo: () => {},
})

export default NxtWatchContext
