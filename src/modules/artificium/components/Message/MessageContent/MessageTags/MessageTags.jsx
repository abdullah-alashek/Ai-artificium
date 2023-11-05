import MessageTag from './MessageTag/MessageTag'
import './MessageTagsStyle.css'

const MessageTags = () => {
  return (
    <div className='aj-message-tags'>
      <MessageTag title="Starfire"/>
      <MessageTag title="Celestia"/>
      <MessageTag title="Cosmic Voyager"/>
      <div className="aj-tags-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.0834 6.24984C12.0834 7.40043 11.1507 8.33317 10.0001 8.33317C8.84949 8.33317 7.91675 7.40043 7.91675 6.24984C7.91675 5.09924 8.84949 4.1665 10.0001 4.1665C11.1507 4.1665 12.0834 5.09924 12.0834 6.24984Z" fill="#686B6E"/>
          <path d="M12.0834 13.7498C12.0834 14.9004 11.1507 15.8332 10.0001 15.8332C8.84949 15.8332 7.91675 14.9004 7.91675 13.7498C7.91675 12.5992 8.84949 11.6665 10.0001 11.6665C11.1507 11.6665 12.0834 12.5992 12.0834 13.7498Z" fill="#686B6E"/>
        </svg>
      </div>
    </div>
  )
}

export default MessageTags
































