import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/activities`


async function addComment(activityId, formData) {
  console.log(formData)
  const res = await fetch(`${BASE_URL}/${activityId}/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(formData)
  })
  return await res.json()
}


async function findCommentsByKey(key) {
  const res = await fetch(`${BASE_URL}/${key}/comments`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  
  return await res.json()
}
export {
  addComment,
  findCommentsByKey
}