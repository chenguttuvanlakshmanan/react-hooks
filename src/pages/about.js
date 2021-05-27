import Sidebar from "../component/sidebar";
import classes from './about.module.css'
import AboutContent from "../component/AboutContent";

const About = () => {
    return (
        <div className={classes.container}>
            <div className={classes.box}>
               <AboutContent></AboutContent>
            </div>
            <Sidebar className={classes.leftm}></Sidebar>
        </div>
    )
}

export default About;