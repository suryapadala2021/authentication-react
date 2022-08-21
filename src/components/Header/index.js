import './index.css'

const Header = () => (
  <div className="nav-box">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-logo-lg "
    />
    <div className="nav-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="nav-logout-logo"
      />
    </div>
    <nav className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-home-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
        className="nav-home-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt="nav cart"
        className="nav-home-logo"
      />
    </nav>
    <ul className="nav-items-lg">
      <li className="nav-item-lg">Home</li>
      <li className="nav-item-lg">Products</li>
      <li className="nav-item-lg">Cart</li><li>
      <button type="button" className="nav-btn-lg">Logout</button></li>
    </ul>
  </div>
)
export default Header
