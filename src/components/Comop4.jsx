import './../assets/Compo4Style.css';
import image from './../assets/image.png';
import code from './../assets/code.png';
import pen from './../assets/pencil.png';
import bulb from './../assets/bulb.png';
import play from './../assets/play.png';
import drop from './../assets/drop-down-tiny.png';
import Compo41 from './Compo41';
import Button from './Button';
import photo1 from './../assets/Avatar.png';
import Como4Chat from './Como4Chat';

const Comop4 = () => {
  return (
    <div className='Comop4'>
        <div className='container'>
        <Como4Chat img={photo1} title="Artificium" des="Just Now" des2="Okay, let's explore some options related to the spaceship. Here are some things I can do for you:"/>
        {/* <div className='arti1'>
            <div className='arti11'>
                <img src={photo1} alt='avatar' />
                <div className='word'>
                    <div className='word1'>
                        <h2>Artificium</h2>
                        <p>Just Now</p>
                    </div>
                    <p>Okay, let's explore some options related to the spaceship. Here are some things I can do for you:</p>
                </div>
            </div>
            <i style={{width: "16px",height: "16px",flexShrink: "0"}}> <img src={copy} alt='copy' /></i>
        </div> */}


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