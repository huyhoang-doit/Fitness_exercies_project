export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af28f0b122msh59ebe41371e7e54p141c42jsn06b561dddd34',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  const reponse = await fetch(url, options)
  const data = await reponse.json()
  return data
}