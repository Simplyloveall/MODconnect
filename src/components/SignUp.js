import React from 'react'

function SignUp() {


    let [username, setUsername] = React.useState('')
    let [password, setPassword] = React.useState('')
    let [errormessage, setErrormessage] = React.useState('')


    //Username is at least 4 characters
    //Passowrd is at least 6 characters
    //Password can't be 'password'

    function checkFields(e) {
        e.preventDefault();
        if (username.length < 4) {
            setErrormessage('username is too short')
        } else if (password.length < 6) {
            setErrormessage('password must be at least 6 characters')
        } else if (password.length === 'password') {
            setErrormessage("your password can't be 'passowrd'")
        } else {
            setErrormessage(`welcome ${username}`)
        }
        
    }



    return (

        <div>

            <form onSubmit={checkFields}> 

            <label>Username</label>
            <input name='username' onChange={(e)=>setUsername(e.target.value)} value={username}/>
            <label>Password</label>
            <input name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button>Create</button>

            <p>{errormessage}</p>



            </form>


        </div>

    )
}

export default SignUp