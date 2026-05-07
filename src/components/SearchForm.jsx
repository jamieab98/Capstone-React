import { useState } from "react"

function SearchForm(){

    const [searchParameter, setSearchParameter] = useState("")
    const [numberOfReturns, setNumberOfReturns] = useState(1)
    const [searchInput, setSearchInput] = useState("")

    const url = "https://api.openbrewerydb.org/v1/breweries"
    //search by_city example: https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3

    function handleSearch(e){
        e.preventDefault()
        if (searchParameter == "random"){
            fetch(`${url}/random`)
            .then(response=>response.json())
            .then((data)=>{
                const bar_data = data[0]
                console.log(bar_data)
            })
            .catch(error=>console.log(error))
        }
        else if (searchParameter == "by_name"){
            fetch(`${url}?${searchParameter}=${searchInput}`)
            .then(response=>response.json())
            .then((data)=>{
                const bar_data = data
                console.log(bar_data)
            })
            .catch(error=>console.log(error))
        }
        else{
            fetch(`${url}?${searchParameter}=${searchInput}&per_page=${numberOfReturns}`)
            .then(response=>response.json())
            .then((data)=>{
                const bar_data = data
                console.log(bar_data)
            })
            .catch(error=>console.log(error))
        }
        //console.log(`Searching for ${numberOfReturns} bars by ${searchParameter}.`)
    }

    return(
        <>
            <h2>Search Form Component</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="searchparameter">Search Parameter</label>
                <select id="searchparameter" value={searchParameter} onChange={(e)=>setSearchParameter(e.target.value)}>
                    <option value="">--Select One--</option>
                    <option value="by_city">By City</option>
                    <option value="by_state">By State</option>
                    <option value="by_name">By Name</option>
                    <option value="random">Random</option>
                </select>
                <label id="numberofbars">Number of Bars
                    <input type="number" id="numberofbars" value={numberOfReturns} onChange={(e)=>setNumberOfReturns(e.target.value)}/>
                </label>
                <label id="userinput">Search By: 
                    <input type="text" id="userinput" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
                </label>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchForm