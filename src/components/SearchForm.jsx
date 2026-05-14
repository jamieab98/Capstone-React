import { useState } from "react"

function SearchForm({setBarData}){

    const [searchParameter, setSearchParameter] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [page, setPage] = useState(2)

    const url = "https://api.openbrewerydb.org/v1/breweries"
    // api documentation: https://www.openbrewerydb.org/documentation//

    function handleSearch(e){
        e.preventDefault()
        if (searchParameter == "random"){
            fetch(`${url}/random?size=50`)
            .then(response=>response.json())
            .then(data=>setBarData(data))
            .catch(error=>console.log(error))
        }
        else if (searchParameter == "by_city"){
            fetch(`${url}?by_city=${searchInput}`)
            .then(response=>response.json())
            .then(data=>setBarData(data))
            .catch(error=>console.log(error))
        }
        else if (searchParameter == "by_name"){
            fetch(`${url}?${searchParameter}=${searchInput}`)
            .then(response=>response.json())
            .then(data=>setBarData(data))
            .catch(error=>console.log(error))
        }
        else if (searchParameter == "by_state"){
            fetch(`${url}?by_state=${searchInput}&page=${page}`)
            .then(response=>response.json())
            .then(data=>setBarData(data))
            .catch(error=>console.log(error))
        }
    }

    return(
        <>
            <h2>Search Form Component</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="searchparameter">Search By:</label>
                <select id="searchparameter" value={searchParameter} onChange={(e)=>setSearchParameter(e.target.value)}>
                    <option value="">--Select One--</option>
                    <option value="by_city">By City</option>
                    <option value="by_state">By State</option>
                    <option value="by_name">By Name</option>
                    <option value="random">Random</option>
                </select>
                <label id="userinput">Search: 
                    <input type="text" id="userinput" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
                </label>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchForm