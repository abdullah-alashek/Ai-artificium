import { useState } from 'react'
import './ActionButtonStyle.css'

const ActionButton = ({text, icon, dropdown}) => {
  const [shown, setShown] = useState(false);
  const toggleDropdown = () => {
    setShown(!shown);
  }
  return (
    <div className='aj-action-button' onClick={toggleDropdown}>
      <p>{text}</p>
      {icon ? <img src={icon} alt="arrow down icon" />: ''}
      {shown && dropdown}
    </div>
  )
}

export default ActionButton