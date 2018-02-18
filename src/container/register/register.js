import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import { register } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

@connect(
  state => state.user,
  { register },
)
@imoocForm
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.register = this.register.bind(this)
  }
  componentDidMount() {
    this.props.handleChange('type', 'genius')
  }
  register() {
    console.log(this.props.state)
    this.props.register(this.props.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
        <Logo />
        <h2>注册页面</h2>
        <WingBlank>
          <List>
            <InputItem
              onChange={(v) => this.props.handleChange('user', v)}
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={(v) => this.props.handleChange('pwd', v)}
            >密码</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={(v) => this.props.handleChange('repeatpwd', v)}
            >确认密码</InputItem>
            <WhiteSpace />
            <RadioItem
              checked={this.props.state.type === 'genius'}
              onChange={(v) => this.props.handleChange('type', 'genius')}
            >牛人</RadioItem>
            <RadioItem
              checked={this.props.state.type === 'boss'}
              onChange={(v) => this.props.handleChange('type', 'boss')}
            >老板</RadioItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.register}>注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register