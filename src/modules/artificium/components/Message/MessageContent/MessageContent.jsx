import MessageActions from './MessageActions/MessageActions'
import './MessageContentStyle.css'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageImages from './MessageImages/MessageImages'
import MessageTags from './MessageTags/MessageTags'

const MessageContent = ({text}) => {
  return (
    <div className='aj-message-content'>
      <MessageHeader title="Artificium" time='just now' text="Sure thing! How about these spaceship names:"/>
      <MessageTags />
      <p className='aj-content-text'>{text}</p>
      <MessageImages />
      <MessageActions />
    </div>
  )
}

export default MessageContent