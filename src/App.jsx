import SearchForm from "./components/SearchForm"
import BarDisplay from "./components/BarDisplay"
import { useState } from "react"

function App(){

  const [barData, setBarData] = useState([])

  return(
    <>
      <h1>Bar Finder</h1>
      <SearchForm setBarData={setBarData}/>
      <BarDisplay barData={barData}/>
    </>
  )
}

export default App