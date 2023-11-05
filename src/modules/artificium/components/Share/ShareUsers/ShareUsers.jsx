import './ShareUsersStyle.css'

const ShareUsers = () => {
  // Showing and Hiding Dropdown when clicking on the input field
  document.onclick = (div) => {
    if(
      div.target.className !== 'aj-dropdown-user' 
      && div.target.className !== 'aj-dropdown-header'
      && div.target.className !== 'aj-share-dropdown'
      ) {
        let dropdown = document.querySelector('.aj-share-dropdown');
        dropdown.classList.remove('aj-dropdown-shown')
      }
    if(div.target.className === 'aj-users-input-field') {
      let dropdown = document.querySelector('.aj-share-dropdown');
      dropdown.classList.add('aj-dropdown-shown')
    }
  }
  return (
    <div className='aj-share-users'>
      <div className="aj-users-input">
        <input className='aj-users-input-field' type="text" />
        <div className="aj-chips">
          {/* Chips will be placed here when clicking on a User */}
        </div>
        <div className="aj-trail-text">
          <p>can edit</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9 5L6.35355 7.64645C6.15829 7.84171 5.84171 7.84171 5.64645 7.64645L3 5" stroke="#B6F09C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <button>
        Invite
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z" stroke="#0C1132" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default ShareUsers