import BlogList from '../BlogList/index'
import './index.css'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="profile-image"
    />
    <h1 className="name">Wade Warren</h1>
    <p className="designation">Software Developer at UK</p>
    <BlogList data-testid="loader" />
  </div>
)

export default Home
