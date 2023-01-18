function YourName({setName}) {
    return(
        <div>
            <p>Enter with your name:</p>
            <input 
                type="text" 
                placeholder="what's your name?" 
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    )
}

export default YourName;