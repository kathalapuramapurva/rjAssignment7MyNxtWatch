import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppContainer,
  LoginFormContainer,
  InputContainer,
  LabelElement,
  InputElement,
  Logo,
  ShowPasswordContainer,
  DisplayInput,
  DisplayPassword,
  SubmitFormButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = event => {
    if (event.target.checked) {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            passwordType,
            showErrorMsg,
            errorMsg,
          } = this.state
          const websiteImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.submitForm}
              >
                <Logo src={websiteImageUrl} alt="website logo" />
                <InputContainer>
                  <LabelElement htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelElement htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    id="password"
                    type={passwordType}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <DisplayInput
                    type="checkbox"
                    id="displayPassword"
                    onChange={this.toggleShowPassword}
                  />
                  <DisplayPassword
                    htmlFor="displayPassword"
                    isDarkTheme={isDarkTheme}
                  >
                    Show Password
                  </DisplayPassword>
                </ShowPasswordContainer>
                <SubmitFormButton type="submit">Login</SubmitFormButton>
                {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </LoginFormContainer>
            </AppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
