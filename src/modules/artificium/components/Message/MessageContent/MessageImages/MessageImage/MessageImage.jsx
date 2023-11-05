import './MessageImageStyle.css'

const MessageImage = ({url}) => {
  return (
    <div className='aj-message-image'>
      <img src={url} alt="Message Img" />
      <div className="aj-image-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M11.3334 6.24984C11.3334 6.98622 10.7365 7.58317 10.0001 7.58317C9.2637 7.58317 8.66675 6.98622 8.66675 6.24984C8.66675 5.51346 9.2637 4.9165 10.0001 4.9165C10.7365 4.9165 11.3334 5.51346 11.3334 6.24984ZM11.3334 13.7498C11.3334 14.4862 10.7365 15.0832 10.0001 15.0832C9.2637 15.0832 8.66675 14.4862 8.66675 13.7498C8.66675 13.0135 9.2637 12.4165 10.0001 12.4165C10.7365 12.4165 11.3334 13.0135 11.3334 13.7498Z" fill="#CDCECF" stroke="#CDCECF" stroke-width="1.5"/>
        </svg>
      </div>
    </div>
  )
}

export default MessageImage