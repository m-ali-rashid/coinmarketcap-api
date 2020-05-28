import React from 'react'
import Image1 from '../images/blog/blog5.jpg';
import Image2 from '../images/blog/blog6.jpg';
import Image3 from '../images/blog/blog7.jpg';

const HomeMostCommented = (props) => {
   return (
    <div>
        <div className="row">
          <div className="col-4" style={{background: `url(${Image1})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsum sit</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4" style={{background: `url(${Image2})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Ad consequuntur aliquam repudiandae aut corrupti at consectetur temporibus.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={{background: `url(${Image3})  no-repeat center center/cover`, minHeight:``,}}></div>
          <div className="col-8">
            <p>Quas voluptates eveniet odio ipsa ab, ullam facere, voluptatem vel magni.</p>
          </div>
        </div>
    </div>
   )
}

export default HomeMostCommented
