import './App.css'
import {getAll} from "./Servcies/Workers/Workers-Service"

function App() {

  const getData = () => {
    getAll()
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={getData}>click</button>
    </div>
  )
}

export default App
