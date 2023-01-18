function OtherList({ frameworks }) {

    return (
        <>
        <h2>Good Front-End Frameworks:</h2> 
        { frameworks.length > 0 ? ( // if ternario
            frameworks.map((item,index) =>  <p key={index}>{item}</p>) // é necessario passar um index para o react, para ele saber qual é aquele valor
            )  : ( // else do if
                <p>this list is empty</p>
            )}
        </>
    )
}

export default OtherList;