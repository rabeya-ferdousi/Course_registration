import React from 'react';

const Course = ({course,handleCourseSelected}) => {
    const {title,cover,course_details,credit,course_price}=course;
    console.log(course)
    return (
        <div>
            <h1>{title}</h1>
            <p>{course_details}</p>
            <div>
                <div>{credit}</div>
                <div>{course_price}</div>
            </div>
            <button className='bg-[#2F80ED]'
            onClick ={()=>handleCourseSelected(course)}>
                Select
            </button>
        </div>
    );
};

export default Course;