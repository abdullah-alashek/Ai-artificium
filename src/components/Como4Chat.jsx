import './../assets/ChatStyle.css';
import copy from './../assets/copy.png';
const Como4Chat = (props) => {
  return (
    <div className='arti1'>
            <div className='arti11'>
                <img src={props.img} alt='avatar' />
                <div className='word'>
                    <div className='word1'>
                        <h2>{props.title}</h2>
                        <p>{props.des}</p>
                    </div>
                    <p>{props.des2}</p>
                </div>
            </div>
            <i style={{width: "16px",height: "16px",flexShrink: "0"}}> <img src={copy} alt='copy' /></i>
        </div>
  )
}

export default Como4Chat