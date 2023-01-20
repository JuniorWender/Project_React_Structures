import { useState } from "react"

function Condicional(){
    const[email, setEmail] = useState()
    const[userEmail, setUsetEmail] = useState()

    function sendEmail(e){
        e.preventDefault();
        setUsetEmail(email);
        
    }

    function clearEmail(){
        setUsetEmail('');
    }

    return(
        <div>
            <h2>Add a E-mail:</h2>
            <form>
                <input type="email" placeholder="Enter with your email" onChange={(e) => setEmail(e.target.value)}></input>
            </form>
            <button type="submit" onClick={sendEmail}>Send Email</button>
            {userEmail && (
                <div>
                    <p> The e-mail is: {userEmail} </p>
                    <button onClick={clearEmail}> Limpar </button>
                </div>
            )}
        </div>
    )
}

export default Condicional