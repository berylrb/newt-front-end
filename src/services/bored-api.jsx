const baseUrl = "http://www.boredapi.com/api/"

export async function getSoloActivity() {
  const res = await fetch(`${baseUrl}/activity?participants=1`)
}