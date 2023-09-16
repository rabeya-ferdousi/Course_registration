import ShowCourseName from "../ShowCourseName/ShowCourseName";

const SelectedCourse = ({courseSelected}) => {
    return (
        <div className='md:w-1/3'>
            <h2 className="text-3xl">ALl Selected Course : {courseSelected.length}</h2>
            {
                courseSelected.map((course,idx) => <ShowCourseName
                key ={idx}
                course = {course}
                ></ShowCourseName>)
            }
        </div>
    );
};

export default SelectedCourse;
