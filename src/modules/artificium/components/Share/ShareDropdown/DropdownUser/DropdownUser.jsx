import './DropdownUserStyle.css'

const DropdownUser = ({url, name, username, alt}) => {

  
  const handleClick = () => {
    let chips = document.querySelector('.aj-chips');
    chips.innerHTML += `
      <div class="aj-chip">
        <img src=${url} alt="image" />
        <p>${name}</p>
        <svg class="aj-chip-close-button" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M1.6665 1.66666L6.33317 6.33332M6.33317 1.66666L1.6665 6.33332" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    `
    let closeButtons = document.querySelectorAll('.aj-chip-close-button');
    closeButtons.forEach((btn, e) => {
      btn.addEventListener('click', () => {
        btn.parentElement.style.display = "none"
      })
    })
  }
  

  return (
    <div className='aj-dropdown-user' onClick={() => {handleClick()}}>
      <img src={url} alt={alt} />
      <div className="aj-user-text">
        <h3>{name}</h3>
        <p>{username}</p>
      </div>
    </div>
  )
}

export default DropdownUser