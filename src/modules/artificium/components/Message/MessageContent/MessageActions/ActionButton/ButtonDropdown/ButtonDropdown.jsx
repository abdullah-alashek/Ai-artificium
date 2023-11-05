import './ButtonDropdownStyle.css'
import DropdownItem from './DropdownItem/DropdownItem'
import Icon1 from './../../../../../../assets/magic-wand.svg'
import Icon2 from './../../../../../../assets/sliders.svg'
import Icon3 from './../../../../../../assets/Link.svg'
import Icon4 from './../../../../../../assets/Download.svg'

const ButtonDropdown = () => {
  return (
    <div className='aj-button-dropdown'>
      <ul>
        <li><DropdownItem text="Create variation" icon={Icon1} /></li>
        <li><DropdownItem text="Adjust" icon={Icon2} /></li>
        <li><DropdownItem text="Share" icon={Icon3} /></li>
        <li><DropdownItem text="Export" icon={Icon4} /></li>
      </ul>
    </div>
  )
}

export default ButtonDropdown