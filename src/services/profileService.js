import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function create(userActivity, id) {
  const res = await fetch(`${BASE_URL}/${id}/userActivities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(userActivity)
  })
  return res.json()
}

async function show(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function deleteOne(userActivityId) {
  console.log(userActivityId)
  const pathTest = `${BASE_URL}/userActivity/${userActivityId}`
  console.log(pathTest)
  const res = await fetch(pathTest, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  console.log(res)
  return res.json()
}

async function update(userActivityId, formData){
  console.log('activity id for hunter', userActivityId)
  const res = await fetch(`${BASE_URL}/${userActivityId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(formData)
  })
  return res.json()
}



async function addPhoto(photoData, id) {
  const res = await fetch(`${BASE_URL}/${id}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}


async function addApiActivity(profileId, activity) {
  console.log('this is id', profileId)
  const res = await fetch(`${BASE_URL}/${profileId}/activities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(activity),
  })
    return res.json()
}

export { getAllProfiles, addPhoto, create, show, deleteOne, addApiActivity, update }