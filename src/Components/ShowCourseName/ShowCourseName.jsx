

const ShowCourseName = ({course}) => {
    const {title} = course;
    //console.log(title)
    
    return (
        <><div className="card w-96 bg-base-100 ">
            <div className="card-body">
                <h2>{title}</h2>
            </div>
        </div>
        </>
    );
};

export default ShowCourseName;

