import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineCompass, AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { userData } = useSelector(state => state.user);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          SocialApp
        </Link>

        <div className="nav-search">
          <AiOutlineSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="nav-items">
          <Link to="/" className="nav-item">
            <AiOutlineHome size={24} />
          </Link>
          <Link to="/explore" className="nav-item">
            <AiOutlineCompass size={24} />
          </Link>
          <Link to="/messages" className="nav-item">
            <AiOutlineMessage size={24} />
          </Link>
          <Link to="/profile" className="nav-item">
            <img src="https://via.placeholder.com/32" alt="profile" className="nav-profile-img" />
          </Link>
        </div>
        {userData.name}
      </div>
    </nav>
  );
}
