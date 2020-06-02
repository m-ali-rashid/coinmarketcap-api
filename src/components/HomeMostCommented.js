import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../images/blog/blog5.jpg';
import Image2 from '../images/blog/blog6.jpg';
import Image3 from '../images/blog/blog7.jpg';

const useStyles = makeStyles((theme) => ({
  childImage: {
    height:'100%',
    width:'100%',
    transition:'0.3s',
    "&:hover":{
      transform:'scale(1.2)',
      cursor:'pointer'
  },
}
}));

const HomeMostCommented = (props) => {
  const classes = useStyles();
   return (
    <div className="">
        <div className="row">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image1})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p>Repudiandae aut corrupti at consectetur temporibus.</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image2})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p>Odio ipsa ab, ullam facere, voluptatem vel magni.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image3})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p>Amet, consectetur adipisicing elit. Excepturi, quae.</p>
          </div>
        </div>
    </div>
   )
}

export default HomeMostCommented
