import './ListUserStyle.css'

const ListUser = ({title, username, url, owner, editor, viewer}) => {

  // Adding users to Array
  let userChipsArray = [];
  
  let addUserToArray = (title, url) => {
    userChipsArray.push (
      {
        title: title,
        url: url,
      }
      );
    showUser();
  }
  // adding users to screen
  let showUser = () => {
    let chips = document.querySelector(".aj-chips");
    for(let i = 0; i < userChipsArray.length; i++) {
      chips.innerHTML +=   
      `
        <div class='aj-chip'>
          <img src=${userChipsArray[i].url} alt=${userChipsArray[i].title} />
          <p>${userChipsArray[i].title}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1.6665 1.66666L6.33317 6.33332M6.33317 1.66666L1.6665 6.33332" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      `
    }
  }

  return (
    <div className='aj-list-user' onClick={() => addUserToArray(title, url)} key={title}>
      <div className="aj-user-data">
        <img src={url} alt="avatar" />
        <div className="aj-data-name">
          <h3>{title}</h3>
          <p>{username}</p>
        </div>
      </div>
      <div className="aj-user-power">
        <button className={owner? "aj-owner" : editor? "aj-editor" : viewer? "aj-viewer" : "aj-viewer"}>
          <svg className={owner? "aj-glow1 aj-owner" : editor? "aj-glow1 aj-editor" : viewer? "aj-glow1 aj-viewer" : "aj-glow1 aj-viewer"} xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
            <g opacity="0.16" filter="url(#filter0_f_893_1730)">
              <circle cy="32" r="20" fill={owner? "#B6F09C" : editor? "#82DBF7" : viewer? "#A6B0F2" : "#A6B0F2"}/>
            </g>
            <defs>
              <filter id="filter0_f_893_1730" x="-36" y="-4" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_893_1730"/>
              </filter>
            </defs>
          </svg>
          {owner? "Owner" : editor? "Editor" : viewer? "Viewer" : "Viewer"} 
          <svg className={owner? "aj-glow2 aj-owner" : editor? "aj-glow2 aj-editor" : viewer? "aj-glow2 aj-viewer" : "aj-glow2 aj-viewer"} xmlns="http://www.w3.org/2000/svg" width="43" height="32" viewBox="0 0 43 32" fill="none">
            <g opacity="0.24" filter="url(#filter0_f_893_1731)">
              <circle cx="43" r="11" fill={owner? "#B6F09C" : editor? "#82DBF7" : viewer? "#A6B0F2" : "#A6B0F2"}/>
            </g>
            <defs>
              <filter id="filter0_f_893_1731" x="0" y="-43" width="86" height="86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur_893_1731"/>
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ListUser