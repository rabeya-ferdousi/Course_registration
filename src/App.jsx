import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import SelectedCourse from './Components/SelectedCourse/SelectedCourse'
function App() {
  const [courseSelected,setCourseSelected] = useState([]);
  const handleCourseSelected = course =>{
    // const newCreditTime = creditTime+credit;
    // setCreditTime(newCreditTime);
    //console.log(course)
    const newCourse =[...courseSelected,course];
    setCourseSelected(newCourse)
  }

  return (
    <>
    <Header></Header>
    <Courses handleCourseSelected={handleCourseSelected} ></Courses>
    <SelectedCourse courseSelected={courseSelected} ></SelectedCourse>
    </>
  )
}

export default App
