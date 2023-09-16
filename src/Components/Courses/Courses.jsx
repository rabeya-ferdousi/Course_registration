import { useEffect } from "react";
import React, { useState } from 'react';

const Courses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1 className="text-xl">Total : {courses.length}</h1>
        </div>
    );
};

export default Courses;