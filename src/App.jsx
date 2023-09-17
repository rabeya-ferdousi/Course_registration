import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import SelectedCourse from './Components/SelectedCourse/SelectedCourse'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [courseSelected,setCourseSelected] = useState([]);
  const [creditTime,setCreditTime] = useState(0);
  const handleCourseSelected = (course,credit) =>{
    // const newCreditTime = creditTime+credit;
    // setCreditTime(newCreditTime);
    //console.log(course)
    //const newCourse =[...courseSelected,course];
    let alert=true;
    const newTime = creditTime+credit
    if(newTime>20){
      toast("You can't add more course.");
    }
    else if(courseSelected.includes(course)){
    // window.alert('You already Have this Course');
    toast("You already Have this Course ! ");
    }
    else{
      const newCourse =[...courseSelected,course];
      setCourseSelected(newCourse);
      setCreditTime(newTime);
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
    <SelectedCourse courseSelected={courseSelected} creditTime ={creditTime}></SelectedCourse>

   </div>
   <ToastContainer></ToastContainer>
    </> 
  )
}

export default App


