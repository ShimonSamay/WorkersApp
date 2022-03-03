const BaseUrl = "http://localhost:5000/workers" ;

export const getAll = async () => {
  return await fetch (`${BaseUrl}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}