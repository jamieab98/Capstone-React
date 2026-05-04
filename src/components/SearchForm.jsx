import { useState } from "react"

function SearchForm(){

    const [searchParameter, setSearchParameter] = useState("")
    const [numberPerPage, setNumberPerPage] = useState(1)

    return(
        <>
            <h2>Search Form Component</h2>
        </>
    )
}

export default SearchForm