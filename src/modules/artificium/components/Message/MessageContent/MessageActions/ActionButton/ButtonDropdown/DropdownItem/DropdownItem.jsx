import './DropdownItemStyle.css'

const DropdownItem = ({text, icon}) => {
  return (
    <div className='aj-dropdown-item'>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default DropdownItem