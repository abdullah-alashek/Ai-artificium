import MessageContent from './MessageContent/MessageContent'
import './MessageStyle.css'

const Message = ({avatar}) => {
  return (
    <div className='aj-message'>
      <img className='avatar-img' src={avatar} alt="avatar" />
      <MessageContent text="Here are a few concept arts that also might inspire you. Take a look!"/>
    </div>
  )
}

export default Message