function YourName({setName}) {
    return(
        <div>
            <p>Enter with Your Name:</p>
            <input 
                type="text" 
                placeholder="what's your name?" 
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    )
}

export default YourName;