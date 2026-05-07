function BarDisplay({barData}){
    
    function onTest(){
        console.log(barData)
    }

    return(
        <>
            <h2>Bar Display Component</h2>
            
            <button onClick={onTest}>Click</button>
        </>
    )
}

export default BarDisplay