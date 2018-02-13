import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const avatarList = 'boy,cat,crab,cute,face,girl,panda,smile,tiger'.split(',').map(v => ({
      icon: require(`../img/${v}.jpeg`),
      text: v,
    }))
    const gridHeader = this.state.icon
      ? <div>
          <span>已选择头像</span>
          <img style={{ width: 20}} src={this.state.icon} alt=""/>
        </div>
      : '请选择头像'
    return (
      <div>
        <List renderHeader={() => gridHeader} />
        <Grid
          data={avatarList}
          columnNum={5}
          onClick={elm => {
            this.setState(elm)
            this.props.selectAvatar(elm.text)
          }}
        />
      </div>
    )
  }
}

export default AvatarSelector