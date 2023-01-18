function HelloWorld({name}) {

    function helloName (anyName){
        return `Hello! ${anyName}, who are you?`
    }

    return (
    <>
       {name &&  // if name exist, it will render this <p> tag
            <p>{helloName(name)}</p>
       }
    </>
    )
}

export default HelloWorld;