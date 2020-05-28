import React from 'react'
import MainImage from '../images/blog/blog1.jpg';
import HomeSidebarTop from './HomeSidebarTop.js'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

const Home = (props) => {
   // setTimeout(()=>{
   //    props.history.push('/about')
   // }, 2000 )
   return (
    <div>
        <div className="row">
          <div className="col-md-8 border d-flex flex-column justify-content-end" style={{background: `url(${MainImage})  no-repeat center center/cover`, minHeight:`500px`,}}>
            <p><span className="badge text-left text-white" style={{background:'#8064a4',fontSize:'1rem', padding:'0.5rem'}}>#NEWS</span></p>
            <h2 className="text-white"><b>New Bill Allows to Pay Crypto Taxes</b></h2>
            <p className="text-white">28 May, 2020 <span className="ml-5"> <CommentOutlinedIcon/> 0</span></p>
          </div>
          <div className="col-md-4 border">
            <HomeSidebarTop/>
          </div>
        </div>
    </div>
   )
}

export default Home
