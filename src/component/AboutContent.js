import classes from './AboutContent.module.css'
import car from './images/car16.jpg'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


const AboutContent = () => {
  return(
        <div className={classes.container}>
            <div className={classes.box4 + " " + classes.box}>
              <h1 className={classes.header}><i>Super Cars Mega Sale</i></h1>
            </div>
            <div className={classes.box1 + " " + classes.box}>
                <h2 className={classes.subhead}>Car sales</h2>
                <p className={classes.subpara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae maiores? Pariatur placeat consequuntur quibusdam explicabo blanditiis accusantium velit quidem fugit veritatis? Quaerat, minima doloremque! Similique autem, aut qui tenetur quos aperiam ipsum veniam eius possimus illum dolores voluptates recusandae hic dolor repellat commodi labore. Minima, odit minus. Aliquid quisquam deserunt, cum ea vel mollitia soluta dicta itaque at nesciunt ab nostrum sequi pariatur quasi ad rerum. Fugiat distinctio iste dolorum nihil! Aperiam, molestiae? Beatae eligendi pariatur molestiae consectetur est nisi maiores doloremque repellendus aperiam dolor soluta ad vitae, voluptas similique! Quaerat recusandae, maxime reiciendis possimus similique unde odit ipsa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae maiores? Pariatur placeat consequuntur quibusdam explicabo blanditiis accusantium velit quidem fugit veritatis? Quaerat, minima doloremque! Similique autem, aut qui tenetur quos aperiam ipsum veniam eius possimus illum dolores voluptates recusandae hic dolor repellat commodi labore. Minima, odit minus. Aliquid quisquam deserunt, cum ea vel mollitia soluta dicta itaque at nesciunt ab nostrum sequi pariatur quasi ad rerum. Fugiat distinctio iste dolorum nihil! Aperiam, molestiae? Beatae eligendi pariatur molestiae consectetur est nisi maiores doloremque repellendus aperiam dolor soluta ad vitae, voluptas similique! Quaerat recusandae, maxime reiciendis possimus similique unde odit ipsa.

                </p>

            </div>
            <div className={classes.box2 + " " + classes.box}>
                <img className={classes.imgfloat} src={car} alt="super car"/>
                <p className={classes.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae maiores? Pariatur placeat consequuntur quibusdam explicabLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae maiores? Pariatur placeat consequuntur quibusdam explicab</p>
            </div>
            <div className={classes.box3 + " " + classes.box}>
            <XYPlot
                width={400}
                height={200}
                >
                <HorizontalGridLines />
                <LineSeries
                    color="red"
                    data={[
                    {x: 1, y: 10},
                    {x: 2, y: 5},
                    {x: 3, y: 15}
                    ]}/>
                <XAxis title="X" />
                <YAxis />
            </XYPlot>
            </div>       


    </div>
  )
}

export default AboutContent;