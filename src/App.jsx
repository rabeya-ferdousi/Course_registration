import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import SelectedCourse from './Components/SelectedCourse/SelectedCourse'
function App() {
  const [courseSelected,setCourseSelected] = useState([]);
  const [creditTime,setCreditTime] = useState(0);
  const handleCourseSelected = (course,credit) =>{
    // const newCreditTime = creditTime+credit;
    // setCreditTime(newCreditTime);
    //console.log(course)
    //const newCourse =[...courseSelected,course];
    if(courseSelected.includes(course)){
      window.alert('You already Have this Course');
    }
    else{
      const newCourse =[...courseSelected,course];
      setCourseSelected(newCourse);
      setCreditTime(creditTime+credit);
    }
  }
  // const handleCreditTime = credit_time => {
  //   setCreditTime(creditTime+credit_time);
  // }

  return (
    <>
    <Header></Header>
    <div className='flex'>
    
    <Courses handleCourseSelected={handleCourseSelected} ></Courses>
    <SelectedCourse courseSelected={courseSelected} creditTime ={creditTime}></SelectedCourse></div>
    </>
  )
}

export default App


