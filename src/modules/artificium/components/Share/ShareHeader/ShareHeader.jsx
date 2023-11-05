import './ShareHeaderStyle.css'

const ShareHeader = () => {
  return (
    <div className="aj-header">
      <div className="aj-header-title">
        <h1>Manage who can view this project</h1>
        <div className="aj-header-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.1665 4.16667L15.8332 15.8333M15.8332 4.16667L4.1665 15.8333" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <div className="aj-header-content">
        <p>
          Select which users can access and view this project.
          Only users with access can view and edit the project.
        </p>
      </div>
    </div>
  )
}

export default ShareHeader