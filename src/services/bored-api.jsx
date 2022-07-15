const baseUrl = "http://www.boredapi.com/api"

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


export async function getActivityDetails(apiUrl) {
  const res = await fetch(`${apiUrl}`)
  return res.json()
}