import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout, profile }) => {
  return (
    <>
      <header className='App-header'>
        {user ?
          <nav>
              <Link className="navLink" to="/">Home</Link>
              <Link className="navLink" to="/profiles">Community</Link>
              <Link className="navLink"  to="/profiles/:id" profile={profile}>Profile</Link>
              <Link className="navLink"  to="/search">Search</Link>
              <Link className="navLink"  to="" onClick={handleLogout}>Log Out</Link>
              <Link className="navLink"  to="/changePassword">Change Password</Link>
          </nav>
        :
          <nav>
              <Link className="navLink"  to="/login">Log In</Link>
              <Link className="navLink"  to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
