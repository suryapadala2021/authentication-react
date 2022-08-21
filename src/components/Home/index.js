import './index.css'
import Header from '../Header/index'

const Home = () => (
    <div className="container">
  <div className="home-container">
    <Header />
    <div className="home-box">
    <div className="home-box-lg-text-container">
      <h1 className="home-box-heading">Clothes That Get YOU Noticed</h1>
      <img
        className="cloths-get-you-noticed-img-small"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
      <p className="home-box-description">Fashion is part of the daily air and it doesnot quit help that it changes all the time.Clothes have always been a marker of the era and we are in revolution.Your fashion makes you been  seen and  heard that way you are.So,celebrate the seasons new and exciting fashion in your own way.</p>
        <button className="shop-now-btn" type="button">Shop Now</button>
    </div>
    <div className="cloths-get-you-noticed-img-lg-box">
     <img
        className="cloths-get-you-noticed-img-lg"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
      </div>
    </div>
  </div>
  </div>
)

export default Home
