import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
@connect(
  state => state.chat,
)  
class NavLinkBar extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  render() {
    const { pathname } =  this.props.location
    const navList = this.props.data.filter(v => !v.hide)
    return (
      <TabBar>
        {navList.map(v => (
         <TabBar.Item
           badge={v.path === '/msg' ? this.props.unread : 0 }
           title={v.text}
           key={v.path}
           icon={{ uri: `https://zos.alipayobjects.com/rmsportal/${v.icon}.svg` }}
           selectedIcon={{ uri: `https://zos.alipayobjects.com/rmsportal/${v.selectedIcon}.svg` }}
           // selectedIcon={{url: require(`./img/${v.icon}-active.png`)}}
           // icon={{url: require(`./img/${v.icon}.png`)}}
           selected={ pathname === v.path }
           onPress={() => {
             this.props.history.push(v.path)
           }}
         />
        ))}
      </TabBar>
    )
  }
}

export default NavLinkBar
