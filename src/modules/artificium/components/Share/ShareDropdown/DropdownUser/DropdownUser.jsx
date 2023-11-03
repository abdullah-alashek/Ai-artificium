import './DropdownUserStyle.css'

const DropdownUser = ({url, name, username, alt}) => {
  return (
    <div className='aj-dropdown-user'>
      <img src={url} alt={alt} />
      <div className="aj-user-text">
        <h3>{name}</h3>
        <p>{username}</p>
      </div>
    </div>
  )
}

export default DropdownUser