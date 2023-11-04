import './../assets/Compo5Style.css';
import img from './../assets/bulb2.png';
const Compo5 = () => {
  return (
    <div className="Compo5">
        <div className='container'>
          <div className='MH'>
          <img src={img} alt='bulb' />
          <h5>Tip: From now Artificium has memorized the name <span className='yallow'>'Cosmic Voyager'</span> and added it to your project <span className='parple'>Library</span></h5>
          <button>Don't show again</button>
          </div>
    </div>
</div>
  )
}

export default Compo5