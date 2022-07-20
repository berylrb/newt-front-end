import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import newt from '../../assets/newt.png'

const NavBar = ({ user, handleLogout, profile }) => {
  return (
    <>
      <header className='App-header'>
        
        {user ?
          <nav>
              <Link className="navLink" to="/">
                <img className={styles.newtHeader} src={newt} alt="newt" />
              </Link>
              <Link className="navLink" to="/profiles">Community</Link>
              <Link className="navLink"  to={`/profiles/${user.profile}`}>Profile</Link>
              <Link className="navLink"  to="/search">Search</Link>
              <Link className="navLink"  to="" onClick={handleLogout}>Log Out</Link>
              <Link className="navLink"  to="/changePassword">Change Password</Link>
          </nav>
        :
        <>
          <div className={styles.newtDiv}>
              <img className={styles.newtHeader} src={newt} alt="newt" />
          </div>
          <nav>
              <Link className="navLink"  to="/login">Log In</Link>
              <Link className="navLink"  to="/signup">Sign Up</Link>
          </nav>
          </>
        }
      </header>
    </>
  )
}

export default NavBar
