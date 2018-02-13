import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { login } from '../../redux/user.redux'

@connect(
  state => state.user,
  { login },
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    this.state = {
      user: '',
      pwd: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(key, v) {
    this.setState({
      [key]: v,
    })
  }
  register() {
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
        <Logo />
        <h2>登录页面</h2>
        <WingBlank>
          <List>
            <InputItem
              onChange={v => this.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <Button type="primary"
            onClick={this.handleLogin}
          >登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login