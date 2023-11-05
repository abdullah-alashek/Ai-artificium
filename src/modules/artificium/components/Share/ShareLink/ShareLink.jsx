import './ShareLinkStyle.css'

const ShareLink = () => {
  return (
    <div className='aj-share-link'>
      <div className="aj-link-access">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="#B6F09C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p>Anyone with the link</p>
        <div className="aj-link-dropdown">
          <p>can view</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9 5L6.35355 7.64645C6.15829 7.84171 5.84171 7.84171 5.64645 7.64645L3 5" stroke="#B6F09C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="aj-link-line"></div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 9.99998L10 5.99998M9.54475 11.4847L8.48409 12.5453V12.5453C7.31252 13.7169 5.41302 13.7169 4.24145 12.5453L3.63604 11.9399C2.46447 10.7683 2.46447 8.86885 3.63604 7.69727V7.69727L4.6967 6.63661M11.6661 9.36335L12.7267 8.30269V8.30269C13.8983 7.13111 13.8983 5.23162 12.7267 4.06005L12.1213 3.45463C10.9497 2.28306 9.05025 2.28306 7.87868 3.45463V3.45463L6.81802 4.51529" stroke="#9B9C9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Copy Link
      </button>
    </div>
  )
}

export default ShareLink