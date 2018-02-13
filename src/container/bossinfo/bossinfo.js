import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { NavBar, TextareaItem, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { update } from '../../redux/user.redux'

@connect(
  state => state.user,
  { update },
)
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
      company: '',
      money: '',
    }
    this.onChange = this.onChange.bind(this)
    this.selectAvatar = this.selectAvatar.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  onChange(key, v) {
    this.setState({
      [key]: v,
    })
  }
  selectAvatar() {
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        { redirect && redirect !== path ? <Redirect to={this.props.redirectTo } /> : null
        }
        <NavBar mode="dark">Boss 完善信息页</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {this.setState({
            avatar: imgname,
          })}}
        />
        <InputItem
          onChange={(v) => this.onChange('title', v)}
        >
          招聘职位
        </InputItem>
        <InputItem
          onChange={(v) => this.onChange('company', v)}
        >
          公司名称
        </InputItem>
        <InputItem
          onChange={(v) => this.onChange('money', v)}
        >
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={(v) => this.onChange('desc', v)}
          row={3}
          autoHeight
          title='职位要求'
        >
        </TextareaItem>
        <Button
          onClick={() => {
            this.props.update(this.state)
          }}
          type="primary"
        >保存</Button>
      </div>
    )
  }
}

export default BossInfo