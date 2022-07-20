import './App.css'

import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Profile from './pages/Profile/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import Search from './pages/Search/Search'
import ActivityDetails from './pages/ActivityDetails/ActivityDetails'
import SearchDetails from './pages/Search/SearchDetails/SearchDetails'
import EditUserActivity from './components/EditUserActivity/EditUserActivity.'
import AddComment from './pages/AddComment/AddComment'


const App = () => {
  const [user, setUser] = useState(authService.getUser())

  
  const navigate = useNavigate()
  console.log(user)


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }






  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/search"
          element={<Search handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit"
          element={<EditUserActivity />}
        />
        <Route
          path="/profiles/:id"
          element={<Profile 
            profile={user?.profile} 
            user={user}
            />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/activity"
          element={<ActivityDetails handleSignupOrLogin={handleSignupOrLogin} user={user} />}
        />
        <Route path="/activity/:activityName" element={<SearchDetails user={user}/>} />
        <Route
          patch="/activity/:activityName/addComment"
          element={<AddComment
            profile={user?.profile}
            user={user}
            />
          }
          />
          
      </Routes>
    </>
  )
}

export default App