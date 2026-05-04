import { useState } from "react"

function SearchForm(){

    const [searchParameter, setSearchParameter] = useState("")
    const [numberOfReturns, setNumberOfReturns] = useState(1)

    return(
        <>
            <h2>Search Form Component</h2>
            <form>
                <label>Search Parameter</label>
                <select>
                    <option>--Select One--</option>
                    <option>By City</option>
                    <option>By State</option>
                    <option>By Name</option>
                    <option>Random</option>
                </select>
                <label>Number of Bars
                    <input type="number"/>
                </label>
            </form>
        </>
    )
}

export default SearchForm