import classes from './Logout.module.css'
import { useHistory } from 'react-router-dom';
import React,{ useEffect } from 'react';

const Logout = () => {

    useEffect( () => {
        localStorage.removeItem('token')
    },[])

    const history = useHistory()

    const clickHandler = () => {
        history.replace('/Login');
    }

    return(
        <div className={classes.disp}>
            <h1>Thanks for visiting us you can click on the below button to login again</h1>
            <button type="button" onClick={clickHandler}>Login</button>
        </div>
    )

}

export default Logout;