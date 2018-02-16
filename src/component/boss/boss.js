import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  WingBlank,
} from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount () {
    this.props.getUserList('genius')
  }
  render() {
    const userList = this.props.userList
    console.log(userList)
    return (
      <WingBlank>
        {
          userList.map(v => (
            v.avatar ? <Card key={v._id}>
              <Card.Header
                title={v.user}
                // thumb={require(`../img/${v.avatar}.jpeg`)}
                extra={<span>{v.title}</span>}
              />
              <Card.body>
                {v.desc.split('\n').map(v => (
                  <div key={v}>{v}</div>
                ))}
              </Card.body>
            </Card> : null
          ))
        }
      </WingBlank>
    )
  }
}

export default Boss