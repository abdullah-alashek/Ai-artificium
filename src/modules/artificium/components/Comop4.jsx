import './../../artificium/assets/Compo4Style.css';
import image from './../modules./../../artificium/assets/image.png';
import code from './../modules./../../artificium/assets/code.png';
import pen from './../modules./../../artificium/assets/pencil.png';
import bulb from './../modules./../../artificium/assets/bulb.png';
import play from './../modules./../../artificium/assets/play.png';
import drop from './../modules./../../artificium/assets/drop-down-tiny.png';
import Compo41 from './Compo41';
import photo1 from './../modules./../../artificium/assets/Avatar.png';
import Button from './Button';
import Como4Chat from './Como4Chat';


const Comop4 = () => {
  return (
    <div className='Comop4'>
        <div className='container'>
        <Como4Chat img={photo1} title="Artificium" des="Just Now" des2="Okay, let's explore some options related to the spaceship. Here are some things I can do for you:"/>
        <div className='props'>
            <Compo41 img={image} description="Image generation" />
            <Compo41 img={code} description="Code Engineering" />
            <Compo41 img={pen} description="Content Creation" />
            <Compo41 img={bulb} description="Idea Generation" />
            <Compo41 img={play} description="Audio/Video   Creation" />
        </div>

        <div className='button'>
            <Button descript="Regenerate response" />
            <Button descript="Modify" img={drop}/>
        </div>



    </div>
    </div>
  )
}

export default Comop4