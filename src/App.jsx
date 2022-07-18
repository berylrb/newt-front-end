import './App.css'

import { useState, useEffect } from 'react'
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
import * as profileService from './services/profileService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userActivity, setUserActivity] = useState([])
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

  const handleAddPhoto = async (newPhotoData, photo) => {
    const newPhoto = await profileService.create(newPhotoData)
    if (photo){
      newPhoto.photo = await photoHelper(photo, newPhotoData)
    }
    setUser([...user, newPhoto])
    navigate('/')
  }

  const photoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await profileService.addPhoto(photoData,id)
  }

  const handleAddUserActivity = async (newUserActivityData) => {
    const newUserActivity = await profileService.create(newUserActivityData, user.profile)
    setUserActivity([...userActivity, newUserActivity])
  }

  const handleDeleteUserActivity = async (userActivityId) => {
    console.log(userActivityId)
    const deletedUserActivity = await profileService.deleteOne(userActivityId)
    // setUserActivity(userActivity.filter(activity => activity._id !== deletedUserActivity._id))
  }

  useEffect(() => {
    const fetchAllUserActivities = async () =>{
      const profile = await profileService.show(user?.profile)
      setUserActivity(profile.userActivity)
    }
    fetchAllUserActivities()
  }, [user?.profile])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} handleAddPhoto={handleAddPhoto} />}
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
          path="/profiles/:id"
          element={<Profile 
            profile={user?.profile} 
            user={user} 
            userActivity={userActivity} handleAddUserActivity={handleAddUserActivity}
            handleDeleteUserActivity={handleDeleteUserActivity}
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
          element={<ActivityDetails handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/activity/:activityName" element={<SearchDetails />} />
      </Routes>
    </>
  )
}

export default App