import ListUser from './ListUser/ListUser'
import './ShareListStyle.css'
import Avatar1 from './../../../assets/Avatar.svg'
import Avatar2 from './../../../assets/Avatar1.svg'
import Avatar3 from './../../../assets/Avatar2.svg'
import Avatar4 from './../../../assets/Avatar3.svg'
import ListButton from './ListButton/ListButton'
import ShareDropdown from '../ShareDropdown/ShareDropdown'

const ShareList = () => {
  return (
    <div className='aj-share-list'>
      <ShareDropdown />
      <ListUser url={Avatar1} title="You" username="@ryan" owner={true} />
      <ListUser url={Avatar2} title="Mia Park" username="@cute-mia" editor={true} />
      <ListUser url={Avatar3} title="Isabella Chen" username="@issa" editor={true} />
      <ListUser url={Avatar4} title="Andrew Garcia" username="@garci28" viewer={true} />
      <ListButton />
    </div>
  )
}

export default ShareList