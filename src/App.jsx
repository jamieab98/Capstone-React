import SearchForm from "./components/SearchForm"

function App(){

  const url = "https://api.openbrewerydb.org/v1/breweries"
  //search by_city example: https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3

  return(
    <>
      <h1>App Components</h1>
      <SearchForm/>
    </>
  )
}

export default App