import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../../component/navlink/navlink'
import { update } from '../../redux/user.redux'
import Boss from '../../component/boss/boss'

class Genius extends React.Component {
  render() {
    return (
      <h1>genius列表</h1>
    )
  }
}
class Msg extends React.Component {
  render() {
    return (
      <h1>消息列表</h1>
    )
  }
}
class User extends React.Component {
  render() {
    return (
      <h1>个人中心</h1>
    )
  }
}

@connect(
  state => state,
  { update },
)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { pathname } = this.props.location
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'sifuoDUQdAFKAVcFGROC',
        selectedIcon: 'iSrlOTqrKddqbOmlvUfq',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius',
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'BTSsmHkPsQSPTktcXyTV',
        selectedIcon: 'iSrlOTqrKddqbOmlvUfq',
        title: 'boss列表',
        component: Genius,
        hide: user.type === 'boss',
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'psUFoAMjkCcjqtUCNPxB',
        selectedIcon: 'IIRLrXXrFAhXVdhMWgUI',
        title: '消息列表',
        component: Msg,
      },
      {
        path: '/me',
        text: '我',
        icon: 'asJMfBrNqpMMlVpeInPQ',
        selectedIcon: 'gjpzzcrPMkhfEqgbYvmN',
        title: '个人中心',
        component: User,
      },
    ]
    return (
      <div>
        <NavBar className='fixd-header' mode='dard'>
          {(navList.find(v => v.path === pathname) || {}).title}
        </NavBar>
        <div style={{ marginTop: 45 }}>
          <Switch>
            {
              navList.map(v => (
                <Route key={v.path} path={v.path} component={v.component}
                />
              ))
            }
          </Switch>
        </div>
        <NavLinkBar data={navList} />
      </div>
    )
  }
}

export default Dashboard