import DropdownHeader from './DropdownHeader/DropdownHeader'
import './ShareDropdownStyle.css'
import Avatar4 from './../../../assets/Avatar4.svg'
import Avatar5 from './../../../assets/Avatar5.svg'
import Avatar6 from './../../../assets/Avatar6.svg'
import DropdownUser from './DropdownUser/DropdownUser'

const ShareDropdown = () => {

  return (
    <div className='aj-share-dropdown' id='aj-share-dropdown'>
      <DropdownHeader />
      <DropdownUser url={Avatar4} name='Marcus Chen' username='@marc' alt='Avatar4'/>
      <DropdownUser url={Avatar5} name='Ava Gupta' username='@avyavy' alt='Avatar5'/>
      <DropdownUser url={Avatar6} name='Lucas Ortiz' username='@luckyluc' alt='Avatar6'/>
    </div>
  )
}

export default ShareDropdown