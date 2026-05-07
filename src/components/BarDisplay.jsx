function BarDisplay({barData}){

    return(
        <>
            <h2>Bar Display Component</h2>
            {barData.map((bar)=>(
                <div key={bar.id}>
                    <div>{bar.name}</div>
                    <div>{bar.address_1}</div>
                    <div>{bar.city}, {bar.state}</div>
                    <div>{bar.country}</div>
                    <div>Contact Information:</div>
                    <a href={bar.website_url}>{bar.website_url}</a>
                    <div>{bar.phone}</div>
                    <br/>
                </div>
            ))}
        </>
    )
}

export default BarDisplay