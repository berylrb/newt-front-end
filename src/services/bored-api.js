const baseUrl = "https://bored-api-backend.onrender.com/api"

 
export async function getSoloActivity() {
  const res = await fetch(`${baseUrl}/activity?participants=1`)
  const data = await res.json()
  console.log(data)
  return data
}



export async function getGroupActivity() {
  
  const res = await fetch(`${baseUrl}/activity?participants=4`)
  const data = await res.json()
  console.log(data)
  return data
}


export async function getActivityDetails(key) {
  console.log(key)
  const res = await fetch(`${baseUrl}/activity?key=${parseInt(key)}`)
  const data = await res.json()
  console.log(data)
  return data
}



export async function activitySearch(formData) {
  console.log(formData)
  
  const options = `?type=${formData.type}&&participants=${formData.participants}&&price=${formData.price}`
  const path = `${baseUrl}/activity${options}`
  console.log(path)
  const res = await fetch(path)
  const data = await res.json()
  console.log(data)
  return data
}


// http://www.boredapi.com/api/activity?price=0.3&&participants=3