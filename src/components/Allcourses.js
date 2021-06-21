import React ,{useState}from 'react'
import Course from './Course'
import base_url from './../api/bootapi';
function Allcourses() {
    const [courses,setcourses]=useState([{title:"java course", desc:"this is beginner java course"},{title:"python course", desc:"this is beginner python course"}])
    const getAllCoursesFromServer=()=>
    {
        axios.get(`${base_url}/courses`).then(response=>{},error=>{})

    }
    return (
        <div>
         <h3>ALL COURSES</h3>
         <p>Complete list of courses are</p>   
         {
        courses.length>0? courses.map((item)=><Course course={item}/>):alert("NO COURSE AVAILABLE")
}
        </div>
    )
}

export default Allcourses
