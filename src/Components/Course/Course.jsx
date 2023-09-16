import React from 'react';

const Course = ({course,handleCourseSelected}) => {
    const {title,cover,course_details,credit,course_price}=course;
    console.log(course)
    return (
        <div className='mb-20 m-8 flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={cover}  />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold justify-around">{title}</h2>
                <p>{course_details}</p>
                <div class="card-actions">
                <div className='flex justify-between'>
                <div>Price : ${course_price}</div>
                <div>Credit : {credit} hr</div>
                </div>
                <button class="btn-primary text-white bg-blue-500 font-bold py-2 px-16 rounded-[10px]" onClick ={()=>handleCourseSelected(course)}>Select
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;

