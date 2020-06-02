import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../images/blog/blog2.jpg';
import Image2 from '../images/blog/blog3.jpg';
import Image3 from '../images/blog/blog4.jpg';
import Image4 from '../images/blog/blog5.jpg';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

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

const HomeHotStories = (props) => {
  const classes = useStyles();
   return (
    <div className="">
        <div className="row">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image1})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p className="m-0">Ad consequuntur aliquam repudiandae aut.</p>
            <small style={{color:'#a9a9a9',marginTop:'0.2rem'}}>28 May, 2020 <span className="ml-3"> <CommentOutlinedIcon/> 0</span></small>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image2})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p>Quas voluptates eveniet odio ipsa ab.</p>
            <small style={{color:'#a9a9a9',marginTop:'0.2rem'}}>28 May, 2020 <span className="ml-3"> <CommentOutlinedIcon/> 0</span></small>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-0" style={{overflow:'hidden', height:'100px'}}>
            <div className={classes.childImage} style={{background: `url(${Image3})  no-repeat center center/cover`}}>
            </div>
          </div>
          <div className="col-8" style={{overflow:'hidden'}}>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <small style={{color:'#a9a9a9',marginTop:'0.2rem'}}>28 May, 2020 <span className="ml-3"> <CommentOutlinedIcon/> 0</span></small>
          </div>
        </div>
    </div>
   )
}

export default HomeHotStories
