import MessageImage from './MessageImage/MessageImage'
import './MessageImagesStyle.css'
import Image1 from './../../../../assets/image1.png'
import Image2 from './../../../../assets/image2.png'
import Image3 from './../../../../assets/image3.png'

const MessageImages = () => {
  return (
    <div className='aj-message-images'>
      <MessageImage url={Image1}/>
      <MessageImage url={Image2}/>
      <MessageImage url={Image3}/>
    </div>
  )
}

export default MessageImages