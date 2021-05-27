import  MediaCard from '../component/card'
import car1 from './images/car1.jpg'
import car2 from './images/car2.jpg'
import car3 from './images/car3.jpg'
import classes from './home.module.css'
import React ,{Fragment} from 'react'

const Home = () => {
    return(
        <Fragment>
            <div className={classes.header}>
                <h1> Super cars show</h1>
            </div>
            <div class={classes.container}>
                <MediaCard car={car1} text1="Super Car one"></MediaCard >
                <MediaCard car={car2} text1="Super Car two"></MediaCard >
                <MediaCard car={car3} text1="Super Car three"></MediaCard >
            </div>
         </Fragment>
    )
}

export default Home;