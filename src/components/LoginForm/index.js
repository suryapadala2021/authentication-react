import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', result: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangepass = event => {
    this.setState({password: event.target.value})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
        this.setState({result:""})
      const{history}=this.props
      history.replace("/")
    } else {
      this.setState({result: `* ${data.error_msg}`})
      
    }
  }

  renderUserInput = () => {
    const {username} = this.state
    return (
      <div className="login-input-box">
        <label htmlFor="userName" className="login-label">
          USERNAME
        </label>
        <br />
        <input
          onChange={this.onChangeUsername}
          className="login-user-input"
          type="text"
          id="userName"
          value={username}
          placeholder="Username"
        />
      </div>
    )
  }

  renderUserPass = () => {
    const {password} = this.state
    return (
      <div className="login-input-box">
        <label className="login-label" htmlFor="userPass">
          PASSWORD
        </label>
        <br />
        <input
          onChange={this.onChangepass}
          placeholder="Password"
          className="login-user-input"
          type="password"
          id="userPass"
          value={password}
        />
      </div>
    )
  }

  render() {
    const {result} = this.state
    return (
      <div className="bg-container">
        <div className="responsive-box-lg">
          <div className="website-logo-box-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="website-login-img-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt=" website login"
              className="website-login-img"
            />
          </div>
          <div className="login-form-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-lg"
            />{' '}
            <form onSubmit={this.onLogin}>
              {this.renderUserInput()}
              {this.renderUserPass()}
              <button type="submit" className="submit-btn">
                Login
              </button>
              <p className="failure-status">{result}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
