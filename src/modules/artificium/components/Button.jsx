import './../../artificium/assets/ButtonStyle.css';

const Button = (props) => {
  return (
    <div className='button'>
        <button>
            <h5>{props.descript}</h5>
            <img src={props.img} alt='' />
        </button>
    </div>
  )
}

export default Button