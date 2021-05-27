import React,{useRef} from "react"
import classes from './login.module.css'
import { useHistory } from "react-router-dom";

const Login = () => {

    const nameInput = useRef('');
    const passwordInput = useRef('');
    const history = useHistory();
    const submitHandler = (event) => {
        event.preventDefault();
        console.log('done');
        console.log(nameInput.current.value ,passwordInput.current.value);
        localStorage.setItem("token","abcd")
        history.push('/about')
    }
    return (
        <>
        
        <div className={classes.formr}>
        <h3>Login</h3>
        <form onSubmit={submitHandler}  >
         
            <label>Name</label><br/>
            <input type="text" ref={nameInput} />
            <br />
            <label>Password</label><br/>
            <input type="password" ref={passwordInput}/><br/>
         
            <button type="submit">Submit</button>
        </form>   
        </div>
        </>     
    )
}

export default Login;