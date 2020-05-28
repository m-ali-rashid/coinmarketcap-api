import React from 'react'
import Image1 from '../images/blog/blog2.jpg';
import Image2 from '../images/blog/blog3.jpg';
import Image3 from '../images/blog/blog4.jpg';
import Image4 from '../images/blog/blog5.jpg';

const HomeHotStories = (props) => {
   return (
    <div className="border">
        <div className="row">
          <div className="col-4" style={{background: `url(${Image1})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Ad consequuntur aliquam repudiandae aut corrupti at consectetur temporibus.</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4" style={{background: `url(${Image2})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Quas voluptates eveniet odio ipsa ab, ullam facere, voluptatem vel magni.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={{background: `url(${Image3})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quae.</p>
          </div>
        </div>
    </div>
   )
}

export default HomeHotStories
