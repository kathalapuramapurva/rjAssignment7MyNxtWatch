import styled from 'styled-components'

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const SideBarRouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow: scroll;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`

export const BannerLogo = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 160px;
    margin-bottom: 10px;
  }
`
export const BannerHeading = styled.h1`
  color: #231f20;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 400px;
    margin-bottom: 20px;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  color: #231f20;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #231f20;
  padding: 7px 15px 7px 15px;
  border-radius: 3px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 10px 18px 10px 18px;
  }
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`
export const HomeSearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const HomeSearchInput = styled.input`
  background-color: transparent;
  color: #909090;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #909090;
  padding: 5px 15px 5px 15px;
  border-radius: 2px;
  flex-grow: 1;
`

export const HomeSearchButton = styled.button`
  background-color: #cccccc;
  padding: 5px 20px 5px 20px;
  border-radius: 2px;
  border: 1px solid #909090;
  text-align: center;
  outline: none;
  cursor: pointer;
`

export const VideosListHome = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0px;
`

export const LoaderHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const NoSearchResultsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`

export const NoSearchImgHome = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const NoSearchHeadingHome = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const NoSearchParaHome = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`

export const NoSearchRetryHomeButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  padding: 7px 20px 7px 20px;
  border-radius: 3px;
`
export const FailureHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-grow: 1;
`

export const FailureImgHome = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const FailureHeadingHome = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#212121')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const FailureParaHome = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`

export const FailureRetryHomeButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  padding: 7px 20px 7px 20px;
  border-radius: 3px;
`
