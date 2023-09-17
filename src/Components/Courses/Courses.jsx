import { useEffect } from "react";
import React, { useState } from 'react';
import Course from "../Course/Course";
const Courses = ({handleCourseSelected}) => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            {/* <h1 className="text-xl">Total: {courses.length}</h1> */}

            <div>
            {
                courses.map((course) => (
                    <Course
                        key={course.id}
                        course={course}
                        handleCourseSelected={handleCourseSelected}
                        >
                    </Course>
                ))
            }
            </div>
        </div>
    );
};

export default Courses;

