import './MessageHeaderStyle.css'

const MessageHeader = ({title, time, text}) => {
  return (
    <div className='aj-message-header'>
      <div className="aj-header-head">
        <div className="aj-head-text">
          <h3>{title}</h3>
          <p>{time}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M11.6667 5.99984H12.0001C12.7365 5.99984 13.3334 6.59679 13.3334 7.33317V11.9998C13.3334 12.7362 12.7365 13.3332 12.0001 13.3332H7.33341C6.59703 13.3332 6.00008 12.7362 6.00008 11.9998V11.6665M4.00008 9.99984H8.66675C9.40313 9.99984 10.0001 9.40288 10.0001 8.6665V3.99984C10.0001 3.26346 9.40313 2.6665 8.66675 2.6665H4.00008C3.2637 2.6665 2.66675 3.26346 2.66675 3.99984V8.6665C2.66675 9.40288 3.2637 9.99984 4.00008 9.99984Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p className='aj-header-text'>{text}</p>
    </div>
  )
}

export default MessageHeader