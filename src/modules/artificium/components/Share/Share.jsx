import ShareHeader from "./ShareHeader/ShareHeader"
import ShareLink from "./ShareLink/ShareLink"
import ShareList from "./ShareList/ShareList"
import ShareUsers from "./ShareUsers/ShareUsers"
import './ShareStyle.css'

const Share = () => {
  return (
    <div className="aj-share">
      <ShareHeader />
      <ShareUsers />
      <ShareList />
      <ShareLink />
    </div>
  )
}

export default Share