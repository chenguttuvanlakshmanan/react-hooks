import classes from './sidebar.module.css'
import car1 from './images/car11.jpg'
import car2 from './images/car12.jpg'
import car3 from './images/car13.jpg'
import car4 from './images/car14.jpg'
import car5 from './images/car15.png'
import car6 from './images/car16.jpg'

const Sidebar = () => {

    return(
        <div className={classes.container}>
            <div className={classes.header}>
               <i> Menu </i>
            </div>
             <div className={classes.container1}>
                <div className={classes.box}><img className={classes.imgcar} src={car1} alt="super car"/></div>
                <div className={classes.box}><img className={classes.imgcar} src={car2} alt="super car"/></div>
                <div className={classes.box}><img className={classes.imgcar} src={car3} alt="super car"/></div>
                <div className={classes.box}><img className={classes.imgcar} src={car4} alt="super car"/></div>
                <div className={classes.box}><img className={classes.imgcar} src={car5} alt="super car"/></div>
                <div className={classes.box}><img className={classes.imgcar} src={car6} alt="super car"/></div>
            </div>
        </div>

    )
}

export default Sidebar;