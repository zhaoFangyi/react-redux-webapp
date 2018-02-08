import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import { register } from '../../redux/user.redux'

@connect(
  state => state.user,
  { register },
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius',
    }
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
  }
  handleChange(key, v) {
    this.setState({
      [key]: v,
    })
  }
  register() {
    console.log(this.state)
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
        <Logo />
        <h2>注册页面</h2>
        <List>
          <InputItem
            onChange={(v) => this.handleChange('user', v)}
          >用户名</InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={(v) => this.handleChange('pwd', v)}
          >密码</InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={(v) => this.handleChange('repeatpwd', v)}
          >确认密码</InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={(v) => this.handleChange('type', 'genius')}
          >牛人</RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={(v) => this.handleChange('type', 'boss')}
          >老板</RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </List>
      </div>
    )
  }
}

export default Register