import React from 'react'
import { connect } from 'react-redux'
import { List, Badge, NavBar, Icon, Grid } from 'antd-mobile'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import {getChatId} from '../../util'


@connect(
  state => state,
  { getMsgList, sendMsg, recvMsg },
)
class Msg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      msg: [],
      showEmoji: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    if (!this.props.chat.chatmsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }
  getLast(arr) {
    return arr[arr.length -1]
  }
  handleSubmit() {
    // socket.emit('sendmsg', {text: this.state.text})
    // this.setState({text: ''})
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({from, to, msg})
    this.setState({
      text: '',
      showEmoji: false,
    })
  }
  fixCarousel() {
    setTimeout(function() {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }
  render() {
    const Item = List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const userinfo = this.props.chat.users
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup).sort((a,b) => {
      const a_last = this.getLast(a)
      const b_last = this.getLast(b)
      return b_last - a_last
    })
    return (
      <div>
        {chatList.map(v => {
          const lastItem = this.getLast(v)
          const targetId = v[0].from === userid ? v[0].to : v[0].from
          const unreadNum = v.filter(v => !v.read && v.to === userid).length
          if (!userinfo[targetId]) {
            return null
          }
          return(
            <List key={lastItem._id}>
              <Item
                extra={<Badge text={unreadNum} />}
                thumb={require(`../img/${userinfo[targetId].avatar}.png`)}
                arrow="horizontal"
                onClick={()=>{
                  this.props.history.push(`/chat/${targetId}`)
                }}
              >
                {lastItem.content}
                <Brief>{userinfo[targetId].name}</Brief>
              </Item>
            </List>
          )
        })}
      </div>
    )
  }
}

export default Msg
