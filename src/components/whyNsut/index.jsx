import React from 'react';
import Navbar from '../common/navbar'
import Footer from '../common/footer'
import CoursesOffered from './CoursesOffered'
import Societies from './Societies'
import OurAlumni from './OurAlumni'
import PastRecruiters from './PastRecruiters'

const WhyNSUT = () => {
    return ( <div className='why-nsut'> 

        <Navbar/>

      
        <CoursesOffered/>
        <br/>
        <div className='banner past-recruiters' >
          <h1>PAST RECRUITERS</h1>
        </div>
       <PastRecruiters/>
        <OurAlumni/>
        <br/>
        <Footer/>


    </div>);
   
    
}
 
export default WhyNSUT;