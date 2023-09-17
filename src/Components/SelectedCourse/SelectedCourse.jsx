import ShowCourseName from "../ShowCourseName/ShowCourseName";

const SelectedCourse = ({courseSelected,creditTime}) => {
    return (
        <div className='md:w-1/3'>
            {/* <h2 className="text-3xl">ALl Selected Course : {courseSelected.length}</h2> */}
            
            <h1 className="font-bold text-xl text-[#2F80ED] m-2">Credit Hour Remaining : </h1><hr></hr>
            <h1 className="font-bold text-2xl m-2">Course Name : </h1><hr></hr>
            {
                courseSelected.map((course,idx) => <ShowCourseName
                key ={idx}
                course = {course}
                ></ShowCourseName>)
            }
            
            <h1 className="font-bold text-xl m-5">Total Credit Time : {creditTime}</h1>
        </div>
    );
};

export default SelectedCourse;
