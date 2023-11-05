import './../../artificium/assets/Compo41Style.css';

const Compo41 = (props) => {
  return (
    <div className='Compo41'>
        <img src={props.img} alt='nothing' />
        <h3>{props.description}</h3>
    </div>
  )
}

export default Compo41