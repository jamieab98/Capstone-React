import { useState } from "react"

function SearchForm(){

    const [searchParameter, setSearchParameter] = useState("")
    const [numberOfReturns, setNumberOfReturns] = useState(1)
    const [searchInput, setSearchInput] = useState("")

    function handleSearch(e){
        e.preventDefault()
        console.log("Searching for bars...")
        console.log(`Searching for ${numberOfReturns} bars by ${searchParameter}.`)
    }

    return(
        <>
            <h2>Search Form Component</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="searchparameter">Search Parameter</label>
                <select id="searchparameter" value={searchParameter} onChange={(e)=>setSearchParameter(e.target.value)}>
                    <option value="">--Select One--</option>
                    <option value="city">By City</option>
                    <option value="state">By State</option>
                    <option value="name">By Name</option>
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